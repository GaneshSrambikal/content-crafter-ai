import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});
export async function POST(req: Request) {
  const { opts } = await req.json();
  const { userId } = auth();
  try {
    if (opts === 'stripe') {
      const user = await currentUser();
      if (!userId) {
        return new NextResponse('Unauthorized', { status: 403 });
      }

      //   stripe payload
      const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
        {
          quantity: 1,
          price_data: {
            currency: 'USD',
            product_data: {
              name: '10,000 AI Credit',
              description: 'all $100 worth of credit',
            },
            unit_amount: 10000,
          },
        },
      ];

      // update purchase data on db
      let purchase = await db.purchase.create({
        data: {
          userId: userId,
          credit: 10000,
          paymentGateway: 'stripe',
        },
      });
      // find stripeCustomer
      let stripeCustomer = await db.stripeCustomer.findUnique({
        where: {
          userId: userId,
        },
        select: {
          stripeCustomerId: true,
        },
      });
      // if stripe customer does exist
      if (!stripeCustomer) {
        const customer = await stripe.customers.create({
          email: user?.emailAddresses[0].emailAddress,
        });
        // push to db
        let newStripeCustumer = await db.stripeCustomer.create({
          data: {
            userId: userId,
            stripeCustomerId: customer.id,
          },
        });
      }

      const session = await stripe.checkout.sessions.create({
        customer: stripeCustomer?.stripeCustomerId,
        line_items,
        mode: 'payment',
        success_url: `http://localhost:3000/dashboard`,
        cancel_url: `http://localhost:3000/dashboard/upgrade`,
        metadata: {
          userId: userId,
        },
      });
      return NextResponse.json({ url: session.url });
    }
  } catch (error) {
    return new NextResponse('internal Errors', { status: 500 });
  }
}
