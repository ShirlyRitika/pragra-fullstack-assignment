export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Welcome to MyShop 🛍️
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Simple. Secure. Fast shopping experience.
      </p>

      <div className="flex gap-4">
        <a
          href="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          View Products
        </a>

        <a
          href="/login"
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition"
        >
          Login
        </a>
      </div>
    </div>
  );
}
