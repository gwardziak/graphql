import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IProductListModel } from "../../models/ProductListModel";

type ProductListOptions = Omit<IProductListModel, "id">;

@Entity()
export class ProductList implements IProductListModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  /*
  @Column()
  products!: Product[];
*/
  /*
  @OneToMany((type) => Product, (products) => products.list)
  @Field((type) => [Product])
  products!: Product[];
*/
  constructor(options: ProductListOptions) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
