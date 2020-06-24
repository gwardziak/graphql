import { ArgsType, Field, Float, ID } from "type-graphql";
import { IProductModel } from "../../models/ProductModel";

@ArgsType()
export class UpdateProductArgs implements Partial<IProductModel> {
  @Field((type) => ID)
  public readonly id!: number;

  @Field((type) => String, { nullable: true })
  public readonly name?: string | undefined;

  @Field((type) => Float, { nullable: true })
  public readonly price?: number | undefined;
}
