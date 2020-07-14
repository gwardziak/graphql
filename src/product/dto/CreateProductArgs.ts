import { ArgsType, Field, Float } from "type-graphql";
import { IProductObjectTypeCreateArgs } from "../../models/Product";

@ArgsType()
export class CreateProductArgs implements IProductObjectTypeCreateArgs {
  @Field()
  public readonly name!: string;

  @Field((type) => Float)
  public readonly price!: number;
}
