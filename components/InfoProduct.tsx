import { ProductType } from "../pages/api/products";

export type InfoProductProps = { product: ProductType }
export const InfoProduct: React.FC<InfoProductProps> = ({ product }) => {

    return (
        <div className="grid content-between w-full p-4 text-gray-700">
        <div>
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold">
              {product.title} - {product.brand}
            </h3>
            <p>${product.price}</p>
          </div>
          <p className="my-4">{product.description}</p>
        </div>
  
        <div className="flex justify-between w-full ">
          <p className="border border-orange-200 rounded bg-orange-50 px-2 py-1 text-xs">
            {product.category}
          </p>
          <p><b>{product.rating.toFixed(1)}</b>/5</p>
        </div>
      </div>
    )
};

export default InfoProduct;