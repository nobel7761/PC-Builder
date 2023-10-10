import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import FeaturedProducts from "@/components/FeaturedProducts";
import { IProduct } from "@/types/types";

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
  const res = await fetch(
    "https://backend-pc-builder-beta.vercel.app/products"
  );
  const allProducts = await res.json();
  const allCpus = allProducts?.filter(
    (product: IProduct) => product.category === "CPU"
  );

  return {
    props: { allCpus },
  };
};
