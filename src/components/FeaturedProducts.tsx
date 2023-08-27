import React from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/pages";

const FeaturedProducts = ({ products }: { products: IProduct[] }) => {
  //   console.log("allProducts", products);
  return (
    <div className="my-6">
      <h1 className="text-4xl font-bold uppercase text-center">
        Featured Products
      </h1>

      {products.slice(0, 9).map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
