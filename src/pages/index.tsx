"use-client";

import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import Banner from "@/components/Banner/Banner";
import { IProduct } from "@/types/types";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedCategories from "@/components/FeaturedCategories";

const HomePage = ({
  allProducts,
  allCategories,
}: {
  allProducts: IProduct[];
  allCategories: string[];
}) => {
  if (!allProducts || !allCategories) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Banner />
      <FeaturedProducts products={allProducts} />
      <FeaturedCategories categories={allCategories} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://backend-pc-builder-beta.vercel.app/products"
    );
    const data = await res.json();

    const categories: string[] = [];
    for (const product of data) {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    }

    return {
      props: { allProducts: data || [], allCategories: categories }, // Ensure allProducts is an array
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { allProducts: [], allCategories: [] }, // Handle the error gracefully by providing an empty array
    };
  }
};
