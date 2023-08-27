import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import { IProduct } from "..";
import FeaturedProducts from "@/components/FeaturedProducts";

const OthersPage = ({ others }: { others: IProduct[] }) => {
  return (
    <div>
      <FeaturedProducts products={others} />
    </div>
  );
};

export default OthersPage;

OthersPage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const allProducts = await res.json();
  const others = allProducts?.data?.filter(
    (product: IProduct) => product.category === "Others"
  );

  return {
    props: { others },
  };
};
