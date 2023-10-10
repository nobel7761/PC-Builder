import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import FeaturedProducts from "@/components/FeaturedProducts";
import { IProduct } from "@/types/types";

const MotherBoardPage = ({
  allMotherBoards,
}: {
  allMotherBoards: IProduct[];
}) => {
  return (
    <div>
      <FeaturedProducts products={allMotherBoards} />
    </div>
  );
};

export default MotherBoardPage;

MotherBoardPage.getLayout = (page: ReactElement) => (
  <RootLayout>{page}</RootLayout>
);

export const getStaticProps = async () => {
  const res = await fetch(
    "https://backend-pc-builder-beta.vercel.app/products"
  );
  const allProducts = await res.json();
  const allMotherBoards = allProducts?.filter(
    (product: IProduct) => product.category === "Motherboard"
  );

  return {
    props: { allMotherBoards },
  };
};
