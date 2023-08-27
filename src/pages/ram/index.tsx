import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import { IProduct } from "..";
import FeaturedProducts from "@/components/FeaturedProducts";

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
  const res = await fetch("http://localhost:3000/api/products");
  const allProducts = await res.json();
  const allRam = allProducts?.data?.filter(
    (product: IProduct) => product.category === "RAM"
  );

  return {
    props: { allRam },
  };
};
