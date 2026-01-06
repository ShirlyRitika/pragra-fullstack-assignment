import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  paymentIntentId: string;

  @Prop({ default: 'paid' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
