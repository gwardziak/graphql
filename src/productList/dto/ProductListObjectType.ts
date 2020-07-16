import { Field, ID, ObjectType } from "type-graphql";
import { IProductListObjectType } from "../../models/ProductList";
import { ProductListItem } from "./../../db/entities/ProductListItem";

@ObjectType("ProductList")
export class ProductListObjectType implements IProductListObjectType {
  @Field((type) => ID)
  id!: number;

  @Field()
  name!: string;

  @Field((type) => [ProductListObjectType])
  items!: ProductListItem[];
}
