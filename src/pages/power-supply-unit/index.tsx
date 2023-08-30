import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import { IProduct } from "..";
import FeaturedProducts from "@/components/FeaturedProducts";

const PowerSupplyPageUnit = ({
  powerSupplyProducts,
}: {
  powerSupplyProducts: IProduct[];
}) => {
  return (
    <div>
      <FeaturedProducts products={powerSupplyProducts} />
    </div>
  );
};

export default PowerSupplyPageUnit;

PowerSupplyPageUnit.getLayout = (page: ReactElement) => (
  <RootLayout>{page}</RootLayout>
);

export const getStaticProps = async () => {
  const res = await fetch("http://pc-builder-server-pink.vercel.app/products");
  const allProducts = await res.json();
  const powerSupplyProducts = allProducts?.data?.filter(
    (product: IProduct) => product.category === "Power Supply Unit"
  );

  return {
    props: { powerSupplyProducts },
  };
};
