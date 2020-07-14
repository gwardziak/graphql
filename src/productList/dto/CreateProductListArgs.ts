import { ArgsType, Field } from "type-graphql";
import { Product } from "../../db/entities/Product";
import { IProductListModel } from "../../models/ProductListModel";
import { ProductObjectType } from "./../../product/dto/ProductObjectType";

export type createProductListArgs = Omit<IProductListModel, "id">;

@ArgsType()
export class CreateProductListArgs implements Omit<IProductListModel, "id"> {
  @Field()
  public readonly name!: string;

  @Field((type) => [ProductObjectType])
  public readonly products!: Product[];
}
