import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IProductModel } from "../../models/ProductModel";
import { ProductList } from "./ProductList";

type ProductOptions = Omit<IProductModel, "id">;

@Entity()
export class Product implements ProductOptions {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @ManyToOne((type) => ProductList, (list) => list.products)
  list!: ProductList;

  constructor(options: ProductOptions) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
