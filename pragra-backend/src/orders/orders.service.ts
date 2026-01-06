import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './orderSchema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<OrderDocument>,
  ) {}

  async createOrder(data: {
    userId: string;
    productId: string;
    amount: number;
    paymentIntentId: string;
  }) {
    const order = new this.orderModel(data);
    return order.save();
  }

  async getOrdersByUser(userId: string) {
    return this.orderModel.find({ userId });
  }
}
