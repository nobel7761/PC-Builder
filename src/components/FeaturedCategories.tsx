import { IProduct } from "@/pages";
import React from "react";
import Category from "./Category";

const FeaturedCategories = ({ categories }: { categories: string[] }) => {
  return (
    <div className="my-6">
      <h1 className="text-4xl font-bold uppercase text-center">
        Featured Categories
      </h1>

      <div className="w-11/12 mx-auto grid grid-cols-4 gap-10 mt-6">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  const allCategories = data?.data;

  return {
    props: { allCategories },
  };
};
