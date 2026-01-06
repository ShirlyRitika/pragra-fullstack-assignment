"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between text-white">
      <h1 className="font-bold">MyShop</h1>
      <div className="space-x-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/products">Products</Link>
      </div>
    </nav>
  );
}
