import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import { IProduct } from "..";
import FeaturedProducts from "@/components/FeaturedProducts";

const CpuPage = ({ allCpus }: { allCpus: IProduct[] }) => {
  return (
    <div>
      <FeaturedProducts products={allCpus} />
    </div>
  );
};

export default CpuPage;

CpuPage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;

export const getStaticProps = async () => {
  const res = await fetch("http://pc-builder-server-pink.vercel.app/products");
  const allProducts = await res.json();
  const allCpus = allProducts?.data?.filter(
    (product: IProduct) => product.category === "CPU"
  );

  return {
    props: { allCpus },
  };
};
