import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(
    name: string,
    email: string,
    password: string,
    token: string,
  ) {
    const user = new this.userModel({
      name,
      email,
      password,
      verificationToken: token,
      isVerified: false,
    });
    return user.save();
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async verifyEmail(token: string) {
    return this.userModel.findOneAndUpdate(
      { verificationToken: token },
      { isVerified: true, verificationToken: null },
      { new: true },
    );
  }
}
