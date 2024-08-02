import { NextResponse } from "next/server";
import Razorpay from 'razorpay';
export async function POST(req: Request){
    const {amount, currency,receiptId} = await req.json()
      try {
       

        const rp1 = new Razorpay({
          key_id: process.env.RAZORPAY_KEY_ID as string,
          key_secret: process.env.RAZORPAY_KEY_SECRET as string,
        });
        const orders = await rp1.orders.create({amount,currency,receipt: receiptId});
        if (!orders) {
          return new NextResponse('Bad Request', { status: 400 });
        }
        return NextResponse.json(orders);
      } catch (error) {
        return new NextResponse('RazorPay Failure', { status: 400 });
      }
}