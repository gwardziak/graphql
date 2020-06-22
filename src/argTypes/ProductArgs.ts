import { ArgsType, Field, Float, ID } from "type-graphql";

interface IProduct {
  id: number;
  name: string;
  price: number;
}

@ArgsType()
export class CreateProductArgs implements Omit<IProduct, "id"> {
  @Field()
  public readonly name!: string;

  @Field((type) => Float)
  public readonly price!: number;
}

@ArgsType()
export class UpdateProductArgs implements Partial<IProduct> {
  @Field((type) => ID)
  public readonly id!: number;

  @Field((type) => String, { nullable: true })
  public readonly name?: string | undefined;

  @Field((type) => Float, { nullable: true })
  public readonly price?: number | undefined;
}
