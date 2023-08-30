import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import { IProduct } from "..";
import FeaturedProducts from "@/components/FeaturedProducts";

const StorageDevice = ({ allStorages }: { allStorages: IProduct[] }) => {
  return (
    <div>
      <FeaturedProducts products={allStorages} />
    </div>
  );
};

export default StorageDevice;

StorageDevice.getLayout = (page: ReactElement) => (
  <RootLayout>{page}</RootLayout>
);

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const allProducts = await res.json();
  const allStorages = allProducts?.data?.filter(
    (product: IProduct) => product.category === "Storage Device"
  );

  return {
    props: { allStorages },
  };
};
