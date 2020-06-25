import { Field, Float, ID, InputType, ObjectType } from "type-graphql";
import { IProductModel } from "../../models/ProductModel";

@ObjectType("Product")
@InputType()
export class ProductObjectType implements IProductModel {
  @Field((type) => ID)
  id!: number;

  @Field()
  name!: string;

  @Field((type) => Float)
  price!: number;
}
