import React, { ReactElement } from "react";
import RootLayout from "@/layout/RootLayout";
import ProductDetails from "@/components/ProductDetails";
import { IProduct } from "@/types/types";

const ProductDetailsPage = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = (page: ReactElement) => (
  <RootLayout>{page}</RootLayout>
);

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://backend-pc-builder-beta.vercel.app/products"
  );
  const products = await res.json();

  const paths = products.map((product: IProduct) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const productId = params.id;
  const res = await fetch(
    `https://backend-pc-builder-beta.vercel.app/product/${productId}`
  );

  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
