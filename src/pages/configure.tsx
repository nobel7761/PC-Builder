import PCBuild from "@/components/PCBuild";
import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";

const BuildPC = ({ categories }: { categories: string[] }) => {
  return (
    <div>
      <PCBuild categories={categories} />
    </div>
  );
};

export default BuildPC;

BuildPC.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;

export const getServerSideProps = async () => {
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
    props: { categories },
  };
};
