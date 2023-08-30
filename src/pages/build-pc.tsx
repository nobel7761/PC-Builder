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
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  const categories: string[] = [];

  for (const product of data?.data) {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  }

  return {
    props: { categories },
  };
};
