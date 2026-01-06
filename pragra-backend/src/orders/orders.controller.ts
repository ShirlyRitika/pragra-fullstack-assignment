import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Body() body: any) {
    return this.ordersService.createOrder(body);
  }

  @Get(':userId')
  getUserOrders(@Body('userId') userId: string) {
    return this.ordersService.getOrdersByUser(userId);
  }
}
