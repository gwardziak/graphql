import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { CreateProductArgs, UpdateProductArgs } from "../argTypes/ProductArgs";
import { Product } from "../entities/Product";

@Resolver()
export class ProductResolver {
  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return await getRepository(Product).find();
  }

  @Query(() => Product, { nullable: true })
  async product(@Arg("name") name: string): Promise<Product | null> {
    const product = await getRepository(Product).findOne({ where: { name } });

    if (!product) return null;

    return product;
  }

  @Mutation(() => Product)
  async createProduct(@Args() product: CreateProductArgs) {
    const newProduct = new Product(product);
    console.log("Creating product");
    return await getRepository(Product).save(newProduct);
  }

  @Mutation(() => Product)
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
}
