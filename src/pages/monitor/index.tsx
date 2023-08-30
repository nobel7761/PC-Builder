import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import { IProduct } from "..";
import FeaturedProducts from "@/components/FeaturedProducts";

const MonitorPage = ({ allMonitors }: { allMonitors: IProduct[] }) => {
  return (
    <div>
      <FeaturedProducts products={allMonitors} />
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const allProducts = await res.json();
  const allMonitors = allProducts?.data?.filter(
    (product: IProduct) => product.category === "Monitor"
  );

  return {
    props: { allMonitors },
  };
};
