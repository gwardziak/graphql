import { ArgsType, Field } from "type-graphql";
import { IProductListModel } from "../../models/ProductListModel";

@ArgsType()
export class CreateProductListArgs implements Omit<IProductListModel, "id"> {
  @Field()
  public readonly name!: string;
  /*
  @Field((type) => [Product])
  public readonly products!: Product[];
*/
}
