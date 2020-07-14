import { Product } from "../db/entities/Product";

export interface IProductListItemEntity {
  quantity: number;
  product: Product;
}

export interface IProductListItemObjectType {
  id: number;
  quantity: number;
  product: Product;
}

export interface IProductListItemObjectTypeCreateArgs {
  productId: number;
  quantity: number;
}

export interface IProductListItemServiceCreateArgs {
  productId: number;
  quantity: number;
}
