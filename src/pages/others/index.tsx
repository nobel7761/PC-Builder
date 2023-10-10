import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import FeaturedProducts from "@/components/FeaturedProducts";
import { IProduct } from "@/types/types";

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
  const res = await fetch(
    "https://backend-pc-builder-beta.vercel.app/products"
  );
  const allProducts = await res.json();
  const others = allProducts?.filter(
    (product: IProduct) => product.category === "Others"
  );

  return {
    props: { others },
  };
};
