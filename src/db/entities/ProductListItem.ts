import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IProductListItemEntity } from "../../models/ProductListItem";
import { Product } from "./Product";
import { ProductList } from "./ProductList";

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

  @ManyToOne((type) => ProductList, (productList) => productList.items, {
    onDelete: "CASCADE",
  })
  productList!: ProductList;

  constructor(options: IProductListItemEntity) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
