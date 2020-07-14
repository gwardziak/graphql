import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IProductEntity } from "../../models/Product";
import { ProductList } from "./ProductList";

@Entity()
export class Product implements IProductEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @ManyToOne((type) => ProductList, (list) => list.products)
  list!: ProductList;

  constructor(options: IProductEntity) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
