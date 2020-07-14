import { ArgsType, Field } from "type-graphql";
import { IProductListItemObjectTypeCreateArgs } from "../../models/ProductListItem";

@ArgsType()
export class CreateProductListItemArgs
  implements IProductListItemObjectTypeCreateArgs {
  @Field()
  public readonly productId!: number;

  @Field()
  public readonly quantity!: number;
}
