import { ArgsType, Field, Float } from "type-graphql";
import { IProduct } from "../ProductType";

@ArgsType()
export class CreateProductArgs implements Omit<IProduct, "id"> {
  @Field()
  public readonly name!: string;

  @Field((type) => Float)
  public readonly price!: number;
}
