import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CategoryTypes } from '../../components/InfoProduct';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(error.response.status).json({ message: error.message });
  }
}

export interface ResponseDataType {
  products: ProductType[]
  total: Number
  skip: Number
  limit: Number
}

export interface PropsType {
  products: ProductType[];
}

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: CategoryTypes;
  thumbnail: string;
  images: string[];
};