This is a full-stack e-commerce style application built using:

📦 Project Overview

This is a full-stack e-commerce style application built using:

Frontend: Next.js with TypeScript
Backend: NestJS
Database: MongoDB
Payments: Stripe (Test Mode)

 🚀 Features Implemented

Authentication
- Email & Password signup & login
- Email verification
- Google OAuth login
- Facebook OAuth login

 Post-Login Features
- Display list of products
- Purchase products
- Stripe payment integration (Test Mode)

 Bonus
- Payment success page
🧑‍💻 Tech Stack

| Layer     | Technology |
|----------|-----------|
Frontend   | Next.js + TypeScript  
Backend    | NestJS  
Database   | MongoDB Atlas  
Payments   | Stripe API  
Deployment | Vercel (Frontend), Railway (Backend)

> ⚠️ Important Note  
> Some features (authentication, products, payments) require environment variables.  
> For security reasons, these are not included in the public deployment.  
> The full application works correctly when run locally with the environment variables provided below.
>Authentication

Email & Password based signup & login
ℹ️ OAuth and email verification were explored during development but are not enabled in the deployed version due to missing production environment variables.

Backend Setup
cd pragra-backend
npm install
npm run start:dev

Frontend Setup
npm install
npm run dev

⚙️ Environment Variables Setup
📂 Frontend 
NEXT_PUBLIC_API_URL=api_url
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

📂 Backend
PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
