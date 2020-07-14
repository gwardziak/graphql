import { ArgsType, Field, ID } from "type-graphql";
import { IProductListModel } from "../../models/ProductListModel";

export type updateProductListArgs = Partial<IProductListModel>;

@ArgsType()
export class UpdateProductListArgs implements Partial<IProductListModel> {
  @Field((type) => ID)
  public readonly id!: number;

  @Field((type) => String, { nullable: true })
  public readonly name?: string | undefined;
}
