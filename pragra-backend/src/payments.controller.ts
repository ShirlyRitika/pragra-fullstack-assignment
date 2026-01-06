import { Controller, Post, Body } from '@nestjs/common';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

@Controller('payments')
export class PaymentsController {

  @Post('checkout')
  async createCheckout(@Body() body: { productName: string; amount: number }) {

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: body.productName,
            },
            unit_amount: body.amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/products',
    });

    return { url: session.url };
  }
}
