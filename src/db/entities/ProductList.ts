import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IProductListModel } from "../../models/ProductListModel";
import { Product } from "./Product";

type ProductListOptions = Omit<IProductListModel, "id">;

@Entity()
export class ProductList implements IProductListModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany((type) => Product, (products) => products.list)
  products!: Product[];

  constructor(options: ProductListOptions) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
