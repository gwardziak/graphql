import { Product } from "../db/entities/Product";

export interface IProductListModel {
  id: number;
  name: string;
  products: Product[];
}
