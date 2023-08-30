import { IProduct } from "@/pages";
import { addToProductList } from "@/redux/features/buildPC/buildPC";
import { useAppDispatch } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();

  console.log("Product", product);

  const handleClick = (category: string) => {
    let addProduct: any = {};

    if (category.toLowerCase() === "cpu") {
      addProduct.cpu = {
        title: product.name,
        image: product.image,
        price: product.price,
        route: "/cpu",
      };
    }

    if (category.toLowerCase() === "motherboard") {
      addProduct.motherboard = {
        title: product.name,
        image: product.image,
        price: product.price,
        route: "/motherboard",
      };
    }

    if (category.toLowerCase() === "ram") {
      addProduct.ram = {
        title: product.name,
        image: product.image,
        price: product.price,
        route: "/ram",
      };
    }

    if (category.toLowerCase() === "power supply unit") {
      addProduct.powerSupply = {
        title: product.name,
        image: product.image,
        price: product.price,
        route: "/power-supply-unit",
      };
    }

    if (category.toLowerCase() === "storage device") {
      addProduct.storage = {
        title: product.name,
        image: product.image,
        price: product.price,
        route: "/storage-device",
      };
    }

    if (category.toLowerCase() === "monitor") {
      addProduct.monitor = {
        title: product.name,
        image: product.image,
        price: product.price,
        route: "/monitor",
      };
    }

    if (category.toLowerCase() === "others") {
      addProduct.others = {
        title: product.name,
        image: product.image,
        price: product.price,
        route: "/others",
      };
    }

    dispatch(addToProductList(addProduct));
  };
  return (
    <div className="rounded-md overflow-hidden shadow-lg shadow-black py-4">
      <Image
        src={`/${product.image}`}
        alt={product.name}
        layout="responsive"
        height={300}
        width={500}
        className="px-6"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 uppercase">
          {product.name.length > 22
            ? product.name.slice(0, 22) + "..."
            : product.name}
        </div>
        <p className="text-black font-bold text-base">
          Category:{" "}
          <span className="text-gray-700 font-normal">{product.category}</span>
        </p>
        <p className="text-black font-bold text-base">
          Price:{" "}
          <span className="text-gray-700 font-normal">{product.price}</span>
        </p>
        <p className="text-black font-bold text-base">
          Stock:{" "}
          <span
            className={`font-bold ${
              product.status === "In Stock" ? "text-green-500" : "text-red-500"
            }`}
          >
            {product.status}
          </span>
        </p>
        <p className="text-black font-bold text-base">
          Rating:{" "}
          <span className="text-gray-700 font-normal">
            {product.average_rating}
          </span>
        </p>
      </div>

      <div className="flex justify-between px-6">
        <Link href={`/product-details/${product?._id}`}>
          <button
            className={`text-blue-500 font-semibold rounded-md hover:underline`}
          >
            Details...
          </button>
        </Link>

        <Link href="/build-pc">
          <button
            disabled={product.status === "Out of Stock"}
            onClick={() => handleClick(product.category)}
            className={`bg-indigo-600 text-white px-4 py-1 rounded-md ${
              product.status === "Out of Stock"
                ? "cursor-not-allowed bg-indigo-600/50"
                : "cursor-pointer"
            }`}
          >
            Add To Builder
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
