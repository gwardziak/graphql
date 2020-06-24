import { ArgsType, Field } from "type-graphql";
import { Product } from "../../db/entities/Product";
import { IProductListModel } from "../../models/ProductListModel";

@ArgsType()
export class CreateProductListArgs implements Omit<IProductListModel, "id"> {
  @Field()
  public readonly name!: string;

  @Field((type) => [Product])
  public readonly products!: Product[];
}
