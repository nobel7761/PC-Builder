import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import FeaturedProducts from "@/components/FeaturedProducts";
import { IProduct } from "@/types/types";

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
  const res = await fetch(
    "https://backend-pc-builder-beta.vercel.app/products"
  );
  const allProducts = await res.json();
  const powerSupplyProducts = allProducts?.filter(
    (product: IProduct) => product.category === "Power Supply Unit"
  );

  return {
    props: { powerSupplyProducts },
  };
};
