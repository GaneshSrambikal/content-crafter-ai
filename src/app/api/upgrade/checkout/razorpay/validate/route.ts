import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import crypto from 'crypto';
import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      await req.json();

    const sha = crypto.createHmac(
      'sha256',
      process.env.RAZORPAY_KEY_SECRET as string
    );
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest('hex');

    if (digest !== razorpay_signature) {
      return NextResponse.json(
        { msg: 'Transaction not legit', isValid: false },
        { status: 400 }
      );
    }
    // if payment is legit update the user credits in db
    if (digest === razorpay_signature) {
      try {
        const { userId } = auth();
        if (!userId) {
          return new NextResponse('user not authorized', { status: 403 });
        }
        const findUserByUserID = await db.user.findUnique({
          where: {
            userId: userId,
          },
        });
        if (!findUserByUserID) {
          await db.user.create({
            data: {
              userId: userId,
              totalCredit: 10000 + 10000,
            },
          });
        } else {
          await db.user.update({
            where: {
              userId: userId,
            },
            data: {
              totalCredit: findUserByUserID.totalCredit + 10000,
            },
          });
          console.log('user db updated')
        }
      } catch (error) {
        return new NextResponse('RazorPay Signature verification failed', {
          status: 500,
        });
      }
    }

    return NextResponse.json({
      msg: 'Transaction is Legit',
      orderId: razorpay_order_id,
      isValid: true,
    });
  } catch (error) {
    return new NextResponse('Internal Errors', { status: 500 });
  }
}
