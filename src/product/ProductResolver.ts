import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { Product } from "../db/entities/Product";
import { CreateProductArgs } from "./dto/CreateProductArgs";
import { ProductObjectType } from "./dto/ProductObjectType";
import { UpdateProductArgs } from "./dto/UpdateProductArgs";
import { ProductService } from "./ProductService";

@Resolver()
export class ProductResolver {
  private constructor(private readonly productService: ProductService) {}

  @Query(() => [ProductObjectType])
  async products(): Promise<Product[]> {
    return await this.productService.getAll();
  }

  @Query(() => ProductObjectType, { nullable: true })
  async product(@Arg("id") id: number): Promise<Product | null> {
    return await this.productService.getOne(id);
  }

  @Mutation(() => ProductObjectType)
  async createProduct(@Args() createArgs: CreateProductArgs): Promise<Product> {
    return await this.productService.create(createArgs);
  }

  @Mutation(() => ProductObjectType)
  async editProduct(@Args() updateArgs: UpdateProductArgs): Promise<Product> {
    return await this.productService.edit(updateArgs);
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id") id: number): Promise<Boolean> {
    return await this.productService.delete(id);
  }
}
