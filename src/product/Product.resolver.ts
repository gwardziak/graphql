import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { ProductModel } from "../db/entities/Product";
import { CreateProductArgs } from "./dto/create-product.args";
import { UpdateProductArgs } from "./dto/update-product.args";
import { Product } from "./Product.service";

@Resolver()
export class ProductResolver {
  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return await getRepository(ProductModel).find();
  }

  @Query(() => Product, { nullable: true })
  async product(@Arg("id") id: number): Promise<Product | null> {
    const product = await getRepository(ProductModel).findOne({
      where: { id },
    });

    if (!product) return null;

    return product;
  }

  @Mutation(() => Product)
  async createProduct(@Args() product: CreateProductArgs) {
    const newProduct = new ProductModel(product);
    console.log("Creating product");
    return await getRepository(ProductModel).save(newProduct);
  }

  @Mutation(() => Product)
  async editProduct(@Args() { id, ...newValues }: UpdateProductArgs) {
    console.log("Editing product...");

    const product = await getRepository(Product).findOne({ where: { id } });
    if (!product) throw new Error("Product not found!");
    Object.assign(product, newValues);
    return await getRepository(ProductModel).save(product);
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id") id: number) {
    const product = await getRepository(Product).findOne({ where: { id } });
    if (!product) throw new Error("Product not found!");
    await getRepository(ProductModel).delete(product);

    return true;
  }
}
