import { IProduct } from "@/pages";
import Image from "next/image";
import React from "react";
import { FaUserAlt } from "react-icons/fa";

const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 md:px-0 px-4">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-1/4 w-full">
            <Image
              src={`/${product.image}`}
              alt={product.name}
              height={300}
              width={500}
            />
          </div>
          <div className="md:ml-4 mt-4 md:mt-0 w-3/4">
            <h1 className="md:text-2xl text-xl font-semibold">
              {product?.name}
            </h1>
            <p className="text-gray-600">{product?.category}</p>
            <p
              className={`text-sm mt-2 ${
                product?.status === "In Stock"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {product?.status}
            </p>
            <p className="text-2xl font-semibold mt-2">{product?.price}</p>
            <p className="text-gray-600 mt-2">{product?.description}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Key Features</h2>
          <ul className="list-disc list-inside ml-4">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Ratings</h2>
          <p className="text-gray-600">
            Individual Rating: {product.individual_rating}
          </p>
          <p className="text-gray-600">
            Average Rating: {product.average_rating}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Reviews</h2>
          {product?.reviews?.map(
            (review: { username: string; review: string }, index: number) => (
              <div key={index} className="mt-2 flex gap-x-2 items-center">
                <div className="border-2 border-black rounded-full p-2">
                  <FaUserAlt className="text-2xl" />
                </div>
                <div>
                  <p className="capitalize font-bold">{review.username}</p>
                  <p className="font-light text-sm">{review.review}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
