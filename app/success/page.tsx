"use client";

export default function SuccessPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>

      <p className="mt-4 text-lg">Thank you for your purchase.</p>

      <a
        href="/products"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Back to Products
      </a>
    </div>
  );
}
