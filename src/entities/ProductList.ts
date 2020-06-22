import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

interface IProductList {
  name: string;
  price: number;
}

@Entity()
export class ProductList {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany((type) => Product, (product) => product.list)
  products!: Product[];

  constructor(options: IProductList) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
