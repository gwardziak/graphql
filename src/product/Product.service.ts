import { Field, Float, ID, ObjectType } from "type-graphql";
import { IProduct } from "./ProductType";

@ObjectType()
export class Product implements IProduct {
  @Field((type) => ID)
  id!: number;

  @Field()
  name!: string;

  @Field((type) => Float)
  price!: number;
}
