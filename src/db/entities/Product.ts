import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IProductEntity } from "../../models/Product";
import { ProductListItem } from "./ProductListItem";

@Entity()
export class Product implements IProductEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @OneToMany((type) => ProductListItem, (listItem) => listItem.product)
  listItems!: ProductListItem[];

  constructor(options: IProductEntity) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
