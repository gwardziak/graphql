import { ArgsType, Field } from "type-graphql";
import { Product } from "../entities/Product";

interface IProductList {
  id: number;
  name: string;
  products: Product[];
}

@ArgsType()
export class CreateProductListArgs implements Omit<IProductList, "id"> {
  @Field()
  public readonly name!: string;

  @Field((type) => [Product])
  public readonly products!: Product[];
}

/*
@InputType()
export class CreateProductListArgs implements Omit<IProductList, "id"> {
  @Field()
  public name!: string;

  @Field((type) => [Product])
  public products!: Product[];
}
*/
/*
@ArgsType()
export class UpdateProductListArgs implements Partial<IProductList> {
  @Field((type) => ID)
  public readonly id!: number;

  @Field((type) => String, { nullable: true })
  public readonly name?: string | undefined;

  @Field((type) => Float, { nullable: true })
  public readonly price?: number | undefined;
}
*/
