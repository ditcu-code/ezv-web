import { ProductType } from "../pages/api/products";

export type InfoProductProps = { product: ProductType };
export const InfoProduct: React.FC<InfoProductProps> = ({ product }) => {
  return (
    <div className="grid content-between w-9/12 p-4 px-6 text-gray-700">
      <div>
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">
            {product.title} - {product.brand}
          </h3>
          <p className="text-2xl font-bold">${product.price}</p>
        </div>
        <p className="my-4">{product.description}</p>
      </div>

      <div className="flex justify-between w-full">
        {CategoryInfo(product.category)}
        <p>
          <b>{product.rating.toFixed(1)}</b> out of 5
        </p>
      </div>
    </div>
  );
};

export default InfoProduct;

export enum CategoryTypes {
  smartphone = "smartphones",
  laptops = "laptops",
  fragrances = "fragrances",
  skincare = "skincare",
  groceries = "groceries",
  homeDecoration = "home-decoration",
}

export function CategoryInfo(cat: CategoryTypes) {

  function switcher(): string {
    switch (cat) {
      case CategoryTypes.smartphone:
        return "border-violet-200 rounded bg-violet-50";
        case CategoryTypes.laptops:
          return "border-red-200 rounded bg-red-50";
        case CategoryTypes.fragrances:
          return "border-yellow-200 rounded bg-yellow-50";
        case CategoryTypes.skincare:
          return "border-green-200 rounded bg-green-50";
        case CategoryTypes.groceries:
          return "border-teal-200 rounded bg-teal-50";
        case CategoryTypes.homeDecoration:
          return "border-blue-200 rounded bg-blue-50";
          default:
            return ""
    }

  }

  return (
    <p className={`border ${switcher()} rounded px-2 py-1 text-xs`}>
      {cat}
    </p>
  );
}
