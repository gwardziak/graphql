import { Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { Product } from "../db/entities/Product";
import { ProductObjectType } from "./dto/ProductObjectType";

@Resolver()
export class ProductResolver {
  @Query(() => [ProductObjectType])
  async products(): Promise<Product[]> {
    return await getRepository(Product).find();
  }
  /*
  @Query(() => ProductObjectType, { nullable: true })
  async product(@Arg("id") id: number): Promise<Product | null> {
    const product = await getRepository(Product).findOne({
      where: { id },
    });

    if (!product) return null;

    return product;
  }

  @Mutation(() => ProductObjectType)
  async createProduct(@Args() product: CreateProductArgs) {
    const newProduct = new Product(product);
    console.log("Creating product");
    return await getRepository(Product).save(newProduct);
  }

  @Mutation(() => ProductObjectType)
  async editProduct(@Args() { id, ...newValues }: UpdateProductArgs) {
    console.log("Editing product...");

    const product = await getRepository(Product).findOne({ where: { id } });
    if (!product) throw new Error("Product not found!");
    Object.assign(product, newValues);
    return await getRepository(Product).save(product);
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id") id: number) {
    const product = await getRepository(Product).findOne({ where: { id } });
    if (!product) throw new Error("Product not found!");
    await getRepository(Product).delete(product);

    return true;
  }
  */
}
