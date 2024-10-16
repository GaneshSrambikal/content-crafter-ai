import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
export async function POST(req: Request) {
  const { amount, currency, receiptId } = await req.json();
  const { userId } = auth();
  try {
    const rp1 = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID as string,
      key_secret: process.env.RAZORPAY_KEY_SECRET as string,
    });
    const orders = await rp1.orders.create({
      amount,
      currency,
      receipt: receiptId,
    });
    if (!orders) {
      return new NextResponse('Bad Request', { status: 400 });
    }
    // update purchase data on db
    let purchase = await db.purchase.create({
      data: {
        userId: userId as string,
        credit: 10000,
        paymentGateway: 'razorpay',
      },
    });
    return NextResponse.json(orders);
  } catch (error) {
    return new NextResponse('RazorPay Failure', { status: 400 });
  }
}
