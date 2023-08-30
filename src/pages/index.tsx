import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import Banner from "@/components/Banner/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedCategories from "@/components/FeaturedCategories";

export interface IProduct {
  _id?: string;
  image: string;
  name: string;
  category: string;
  subCategory?: string;
  status: string;
  price: number;
  description: string;
  features: string[];
  individual_rating: number;
  average_rating: number;
  reviews: {
    username: string;
    review: string;
  }[];
}

const HomePage = ({
  allProducts,
  allCategories,
}: {
  allProducts: IProduct[];
  allCategories: string[];
}) => {
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
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  const categories: string[] = [];
  for (const product of data?.data) {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  }

  return {
    props: { allProducts: data.data, allCategories: categories },
  };
};
