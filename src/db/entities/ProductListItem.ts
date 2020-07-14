import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IProductListItemEntity } from "../../models/ProductListItem";
import { Product } from "./Product";

@Entity()
export class ProductListItem implements IProductListItemEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @OneToOne((type) => Product)
  @JoinColumn()
  product!: Product;

  constructor(options: IProductListItemEntity) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
