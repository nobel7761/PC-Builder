import React, { ReactElement } from "react";
import { IProduct } from "..";
import RootLayout from "@/layout/RootLayout";
import ProductDetails from "@/components/ProductDetails";

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
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  const paths = products.data.map((product: IProduct) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const productId = params.id;
  const res = await fetch(
    `http://localhost:3000/api/product-details/${productId}`
  );
  // console.log("API Response:", res);
  const data = await res.json();
  // console.log("Fetched Data:", data);

  return {
    props: {
      product: data.data,
    },
  };
};
