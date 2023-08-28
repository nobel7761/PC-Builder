import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/pages";
import { useRouter } from "next/router";

function shuffleArray(array: IProduct[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const FeaturedProducts = ({ products }: { products: IProduct[] }) => {
  const [shuffledData, setShuffledData] = useState<IProduct[]>([]);
  const { pathname } = useRouter();

  useEffect(() => {
    const shuffledArray = shuffleArray(products);
    setShuffledData(shuffledArray);
  }, [products]);

  return (
    <div className="my-6 flex flex-col gap-y-6">
      <h1 className="md:text-4xl text-2xl font-bold uppercase text-center">
        {pathname === "/cpu" && "ALL CPU"}
        {pathname === "/motherboard" && "ALL Motherboard"}
        {pathname === "/ram" && "ALL RAM"}
        {pathname === "/power-supply-unit" && "ALL Power Supply Unit"}
        {pathname === "/storage-device" && "ALL Storage Device"}
        {pathname === "/monitor" && "ALL Monitor"}
        {pathname === "/others" && "Other Products"}
        {pathname === "/" && "Featured Products"}
      </h1>

      <div className="w-11/12 mx-auto grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-6">
        {shuffledData.slice(0, 11).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
