import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import FeaturedProducts from "@/components/FeaturedProducts";
import { IProduct } from "@/types/types";

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
  const res = await fetch(
    "https://backend-pc-builder-beta.vercel.app/products"
  );
  const allProducts = await res.json();
  const allStorages = allProducts?.filter(
    (product: IProduct) => product.category === "Storage Device"
  );

  return {
    props: { allStorages },
  };
};
