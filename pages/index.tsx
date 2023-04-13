import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
//       <p className="text-lg text-gray-500">This is a sample component.</p>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 border-black divide-y space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border-black flex">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={300}
              height={300}
              className="h-48 w-96 my-4 object-cover"
            />
            <div className="border border-black border-solid w-full text-gray-700 m-4">
              <div className="flex-row justify-between">
                <div className="flex justify-between w-full ">
                  <p>
                    {product.title} - {product.brand}
                  </p>
                  <p>${product.price}</p>
                </div>
                <p className="my-4">{product.description}</p>
              </div>

              <div className="flex justify-between w-full ">
                <p className="border">
                  {product.category}
                </p>
                <p>{product.rating}/5.00</p>
              </div>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
