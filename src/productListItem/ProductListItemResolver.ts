import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { ProductListItem } from "../db/entities/ProductListItem";
import { CreateProductListItemArgs } from "./dto/CreateProductListItemArgs";
import { ProductListItemObjectType } from "./dto/ProductListItemObjectType";
import { ProductListItemService } from "./ProductListItemService";

@Resolver()
export class ProductListItemResolver {
  private constructor(
    private readonly productListItemService: ProductListItemService
  ) {}

  @Query(() => [ProductListItemObjectType])
  async productListItems(): Promise<ProductListItem[]> {
    return await this.productListItemService.getAll();
  }

  @Query(() => ProductListItemObjectType, { nullable: true })
  async productListItem(
    @Arg("id") id: number
  ): Promise<ProductListItem | null> {
    return await this.productListItemService.getOne(id);
  }

  @Mutation(() => ProductListItemObjectType)
  async createProductListItem(
    @Args()
    createArgs: CreateProductListItemArgs
  ): Promise<ProductListItem> {
    return await this.productListItemService.create(createArgs);
  }

  @Mutation(() => Boolean)
  async deleteProductListItem(@Arg("id") id: number): Promise<Boolean> {
    return await this.productListItemService.delete(id);
  }
}
