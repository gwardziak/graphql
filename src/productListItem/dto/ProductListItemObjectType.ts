import { Field, ID, InputType, Int, ObjectType } from "type-graphql";
import { Product } from "../../db/entities/Product";
import { IProductListItemObjectType } from "../../models/ProductListItem";
import { ProductObjectType } from "../../product/dto/ProductObjectType";

@ObjectType("ProductListItem")
@InputType()
export class ProductListItemObjectType implements IProductListItemObjectType {
  @Field((type) => ID)
  id!: number;

  @Field((type) => ProductObjectType)
  product!: Product;

  @Field((type) => Int)
  quantity!: number;
}
