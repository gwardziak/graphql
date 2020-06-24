import { ArgsType, Field, ID } from "type-graphql";
import { IProductListModel } from "./../../models/ProductListModel";

@ArgsType()
export class UpdateProductListArgs implements Partial<IProductListModel> {
  @Field((type) => ID)
  public readonly id!: number;

  @Field((type) => String, { nullable: true })
  public readonly name?: string | undefined;
}
