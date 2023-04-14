import Image from "next/image";
import { PropsType, ResponseDataType } from "./api/products";
import Link from "next/link";
import { GetStaticProps } from "next";
import InfoProduct from "../components/InfoProduct";

const Home = ({ products }: PropsType) => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col divide-y max-w-7xl divide-gray-300 mx-auto py-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={{
              pathname: "/products/[slug]",
              query: { slug: product.id },
            }}
          >
            <div className="sm:flex relative h-full sm:h-48 px-16 py-1 hover:bg-gray-50">
              <Image
                className="object-cover rounded-xl my-4 mx-auto w-96"
                src={product.thumbnail}
                alt={product.title}
                width={250}
                height={250}
                priority
              />
              <InfoProduct product={product} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const products: ResponseDataType = await res.json();

  return {
    props: {
      products,
    }.products,
  };
};
