import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() data: { name: string; price: number; description: string }) {
    return this.productsService.create(data);
  }

  @Post('bulk')
  createMany(@Body() products: any[]) {
    return this.productsService.createMany(products);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}
