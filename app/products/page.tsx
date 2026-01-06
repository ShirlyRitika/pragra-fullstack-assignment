"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  async function handleBuy(product: any) {
    const res = await axios.post("http://localhost:3001/payments/checkout", {
      productName: product.name,
      amount: product.price,
    });

    window.location.href = res.data.url;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Products</h1>

      <div className="grid grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
            <p className="font-bold mt-2">₹ {p.price}</p>

            <button
              onClick={() => handleBuy(p)}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
