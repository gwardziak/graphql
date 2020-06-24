import { ArgsType, Field, Float } from "type-graphql";
import { IProductModel } from "../../models/ProductModel";

@ArgsType()
export class CreateProductArgs implements Omit<IProductModel, "id"> {
  @Field()
  public readonly name!: string;

  @Field((type) => Float)
  public readonly price!: number;
}
