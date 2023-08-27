import { IProduct } from "@/pages";
import React from "react";

const ProductCard = ({ product }: { product: IProduct }) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
