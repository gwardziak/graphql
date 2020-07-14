import { Field, Float, ID, InputType, ObjectType } from "type-graphql";
import { IProductObjectType } from "../../models/Product";

@ObjectType("Product")
@InputType()
export class ProductObjectType implements IProductObjectType {
  @Field((type) => ID)
  id!: number;

  @Field()
  name!: string;

  @Field((type) => Float)
  price!: number;
}
