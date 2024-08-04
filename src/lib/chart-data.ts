import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
export const fetchChartData = async () => {
  try {
    const { userId } = auth();
    let availableCredit: number = 0;
    let totalUsage: number = 0;
    if (userId) {
      const userAIoutput = await db.aIOutput.findMany({
        where: {
          userId: userId as string,
        },
      });

      if (userAIoutput.length > 0) {
        userAIoutput.forEach((output) => {
          totalUsage = totalUsage + Number(output.description?.length);
        });

        revalidatePath('/');
      }
      const userCredit = await db.user.findUnique({
        where: {
          userId: userId as string,
        },
      });

      availableCredit = userCredit ? Number(userCredit?.totalCredit) : 10000;
    }
    return {
      availableCredit,
      totalUsage,
    };
  } catch (error) {
    console.log('Unauthorized', error);
    throw new Error('unauthorized to access data');
  }
};
