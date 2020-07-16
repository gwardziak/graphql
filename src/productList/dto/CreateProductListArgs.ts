import { ArgsType, Field } from "type-graphql";
import { IProductListModel } from "../../models/ProductList";

export type createProductListArgs = Omit<IProductListModel, "id">;

@ArgsType()
export class CreateProductListArgs implements Omit<IProductListModel, "id"> {
  @Field()
  public readonly name!: string;

  //@Field((type) => [ProductObjectType])
  //public readonly products!: Product[];
}
