import { Field, ID, ObjectType } from "type-graphql";
import { Product } from "../../db/entities/Product";
import { IProductListModel } from "../../models/ProductListModel";
import { ProductObjectType } from "./../../product/dto/ProductObjectType";

@ObjectType("ProductList")
export class ProductListObjectType implements IProductListModel {
  @Field((type) => ID)
  id!: number;

  @Field()
  name!: string;

  @Field((type) => [ProductObjectType])
  products!: Product[];

  /*
  @OneToMany((type) => Product, (products) => products.list)
  @Field((type) => [Product])
  products!: Product[];
*/
}
