import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import FeaturedProducts from "@/components/FeaturedProducts";
import { IProduct } from "@/types/types";

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
  const res = await fetch(
    "https://backend-pc-builder-beta.vercel.app/products"
  );
  const allProducts = await res.json();
  const allMonitors = allProducts?.filter(
    (product: IProduct) => product.category === "Monitor"
  );

  return {
    props: { allMonitors },
  };
};
