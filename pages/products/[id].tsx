import React from "react";
import Image from "next/image";
import { ProductType } from "../api/products";
import { GetStaticProps } from "next";
import InfoProduct from "../../components/InfoProduct";

export default function Products(product: ProductType) {

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col w-full max-w-7xl mx-auto p-8">
        <Image
          className="object-cover mx-auto rounded-xl max-h-full my-4"
          src={product.thumbnail}
          alt={product.title}
          width={1200}
          height={1000}
        />
        <div className="flex relative h-48 lg:px-8 py-1">
          <InfoProduct product={product} />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto">
          {product.images.map((item) => (
            <Image
              key={item}
              className="object-cover rounded-xl max-h-48 my-4 "
              src={item}
              alt={product.title}
              width={270}
              height={300}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  const products = data.products;

  const paths = products.map((product: ProductType) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product: ProductType = await res.json();

  return {
    props: product,
  };
};
