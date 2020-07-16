import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IProductListEntity } from "./../../models/ProductList";
import { ProductListItem } from "./ProductListItem";

@Entity()
export class ProductList implements IProductListEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(
    (type) => ProductListItem,
    (productListItem) => productListItem.productList
  )
  items!: ProductListItem[];

  constructor(options: IProductListEntity) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
