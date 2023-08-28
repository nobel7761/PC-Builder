import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import { IProduct } from "..";
import FeaturedProducts from "@/components/FeaturedProducts";

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
  const res = await fetch("http://localhost:3000/api/products");
  const allProducts = await res.json();
  const allMotherBoards = allProducts?.data?.filter(
    (product: IProduct) => product.category === "Motherboard"
  );

  return {
    props: { allMotherBoards },
  };
};
