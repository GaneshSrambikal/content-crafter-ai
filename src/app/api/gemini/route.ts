import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('User not Authenticated', { status: 403 });
    }
    // find user from db .if does not exist add a new record to user
    const user = await db.user.findUnique({
      where: {
        userId: userId,
      },
    });
    if (!user) {
      await db.user.create({
        data: {
          userId: userId,
        },
      });
    }

    const { title, description, templateUsed } = await req.json();

    const createNewOutput = await db.aIOutput.create({
      data: {
        userId: userId,
        title: title,
        description: description,
        templateUsed,
      },
    });

    revalidatePath('/');
    return NextResponse.json(createNewOutput, { status: 200 });
  } catch (error) {
    return new NextResponse('AI GENERATE failed error', { status: 500 });
  }
}
