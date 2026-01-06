import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // ---------------- SIGNUP ----------------
  async signup(name: string, email: string, password: string) {
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString('hex');

    await this.usersService.create(
      name,
      email,
      hashedPassword,
      token,
    );

    // ===== ETHEREAL EMAIL SETUP =====
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const verifyUrl = `http://localhost:3000/auth/verify-email?token=${token}`;

    const info = await transporter.sendMail({
      from: '"Pragra App" <no-reply@pragra.com>',
      to: email,
      subject: 'Verify your email',
      html: `
        <h2>Email Verification</h2>
        <p>Click the link below to verify your email:</p>
        <a href="${verifyUrl}">Verify Email</a>
      `,
    });

    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

    return { message: 'Verification email sent' };
  }

  // ---------------- LOGIN ----------------
  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (!user.isVerified) {
      throw new UnauthorizedException('Email not verified');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid password');
    }

    const token = this.jwtService.sign({
      id: user._id,
      email: user.email,
    });

    return { token };
  }

  // ---------------- VERIFY EMAIL ----------------
  async verifyEmail(token: string) {
    const user = await this.usersService.verifyEmail(token);

    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }

    return { message: 'Email verified successfully' };
  }
}
