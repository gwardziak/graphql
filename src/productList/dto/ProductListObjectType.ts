import { Field, ID, ObjectType } from "type-graphql";
import { Product } from "../../db/entities/Product";
import { IProductListModel } from "./../../models/ProductListModel";

@ObjectType("ProductList")
export class ProductListObjectType implements IProductListModel {
  @Field((type) => ID)
  id!: number;

  @Field()
  name!: string;

  @Field((type) => [Product])
  products!: Product[];

  /*
  @OneToMany((type) => Product, (products) => products.list)
  @Field((type) => [Product])
  products!: Product[];
*/
  constructor(options: IProductListModel) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
