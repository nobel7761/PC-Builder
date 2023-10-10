import React from "react";
import Category from "./Category";

const FeaturedCategories = ({ categories }: { categories: string[] }) => {
  return (
    <div className="my-6">
      <h1 className="md:text-4xl text-2xl font-bold uppercase text-center">
        Featured Categories
      </h1>

      <div className="w-11/12 mx-auto grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-6 mt-6">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;

export const getStaticProps = async () => {
  const res = await fetch(
    "hhttps://backend-pc-builder-beta.vercel.app/products"
  );
  const data = await res.json();
  const allCategories = data;

  return {
    props: { allCategories },
  };
};
