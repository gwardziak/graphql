import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IProductListItemEntity } from "../../models/ProductListItem";
import { Product } from "./Product";

@Entity()
export class ProductListItem implements IProductListItemEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @ManyToOne((type) => Product, (product) => product.listItems, {
    onDelete: "CASCADE",
  })
  product!: Product;

  constructor(options: IProductListItemEntity) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
