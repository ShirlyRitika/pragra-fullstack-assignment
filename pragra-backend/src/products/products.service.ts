import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './productSchema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}




  async create(data: { name: string; price: number; description: string }) {
    const product = new this.productModel(data);
    return product.save();
  }

  async createMany(products: { name: string; price: number; description: string }[]) {
  return this.productModel.insertMany(products);
}


  async findAll() {
    return this.productModel.find();
  }
}
