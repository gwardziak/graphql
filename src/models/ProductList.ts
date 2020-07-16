import { ProductListItem } from "../db/entities/ProductListItem";

export interface IProductListEntity {
  name: string;
}

export interface IProductListObjectType {
  id: number;
  name: string;
  items: ProductListItem[];
}
//comment
export interface IProductListModel {
  name: string;
  //products: Product[];
}
