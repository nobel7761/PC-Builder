import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import FeaturedProducts from "@/components/FeaturedProducts";
import { IProduct } from "@/types/types";

const RamPage = ({ allRam }: { allRam: IProduct[] }) => {
  return (
    <div>
      <FeaturedProducts products={allRam} />
    </div>
  );
};

export default RamPage;

RamPage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://backend-pc-builder-beta.vercel.app/products"
  );
  const allProducts = await res.json();
  const allRam = allProducts?.filter(
    (product: IProduct) => product.category === "RAM"
  );

  return {
    props: { allRam },
  };
};
