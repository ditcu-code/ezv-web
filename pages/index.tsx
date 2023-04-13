import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "./api/products";

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
      <div className="max-w-7xl mx-auto py-6 border-black divide-y space-y-4 ">
        {products.map((product) => (
          <div key={product.id} className="relative h-48 border-black flex px-16 ">
            <Image
              className="object-cover max-h-48 my-4 "
              src={product.images[0]}
              alt={product.title}
              width={300}
              height={300}
            />
            <div className="w-full text-gray-700 m-4 grid content-between">
              <div>
                <div className="flex justify-between w-full">
                  <p>
                    {product.title} - {product.brand}
                  </p>
                  <p>${product.price}</p>
                </div>
                <p className="my-4">{product.description}</p>
              </div>

              <div className="flex justify-between w-full ">
                <p className="border">{product.category}</p>
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
