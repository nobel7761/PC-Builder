import { IProduct } from "@/pages";
import { Button } from "@/shared/components/shadcn/button";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg shadow-black py-4">
      <img src={product.image} alt={product.name} className="w-3/4 mx-auto" />

      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 uppercase">
          {product.name.length > 22
            ? product.name.slice(0, 22) + "..."
            : product.name}
        </div>
        <p className="text-black font-bold text-base">
          Category:{" "}
          <span className="text-gray-700 font-normal">{product.category}</span>
        </p>
        <p className="text-black font-bold text-base">
          Price:{" "}
          <span className="text-gray-700 font-normal">{product.price}</span>
        </p>
        <p className="text-black font-bold text-base">
          Stock:{" "}
          <span
            className={`font-bold ${
              product.status === "In Stock" ? "text-green-500" : "text-red-500"
            }`}
          >
            {product.status}
          </span>
        </p>
        <p className="text-black font-bold text-base">
          Rating:{" "}
          <span className="text-gray-700 font-normal">
            {product.average_rating}
          </span>
        </p>
      </div>

      <div className="flex justify-between px-6">
        <Link href={`/product-details/${product?._id}`}>
          <button
            className={`text-blue-500 font-semibold rounded-md hover:underline`}
          >
            Details...
          </button>
        </Link>

        <button
          disabled={product.status === "Out of Stock"}
          className={`bg-indigo-600 text-white px-4 py-1 rounded-md ${
            product.status === "Out of Stock"
              ? "cursor-not-allowed bg-indigo-200"
              : "cursor-pointer"
          }`}
        >
          Add To Builder
        </button>
      </div>

      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}
    </div>
  );
};

export default ProductCard;
