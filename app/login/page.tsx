"use client";

import { useState } from "react";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await api.post("/auth/login", { email, password });
    router.push("/products");
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100">
    <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        Welcome Back
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Sign in to continue
      </p>

      <div className="space-y-5">
        <input
  type="email"
  placeholder="Email"
  className="w-full p-3.5 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>


      <input
  type="password"
  placeholder="Password"
  className="w-full p-3.5 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>


        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
);

}
