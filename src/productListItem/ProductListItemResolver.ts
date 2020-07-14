import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { ProductListItem } from "../db/entities/ProductListItem";
import { CreateProductListItemArgs } from "./dto/CreateProductListItemArgs";
import { ProductListItemObjectType } from "./dto/ProductListItemObjectType";
import { ProductListItemService } from "./ProductListItemService";

@Resolver((of) => ProductListItemObjectType)
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
  //worked
  /*
  @Mutation(() => ProductListItemObjectType)
  async createProductListItem(
    @Args()
    createArgs: CreateProductListArgs
  ): Promise<ProductListItem> {
    return await this.productListItemService.create(createArgs);
  }
*/
  /*
  @FieldResolver()
  async product(@Root() { id: productId, product }: ProductListItemObjectType) {
    console.log(productId);
    console.log(product);
    const products = await getRepository(ProductListItem).find({
      relations: ["product"],
      where: { id: 2 },
    });
    console.log(products);
    return products;
  }
*/
  /*
  //TODO
  @FieldResolver()
  async product(
    @Root() { id: listId }: ProductListItemObjectType
  ): Promise<ProductObjectType[]> {
    const products = await getRepository(Product).find({
      relations: ["product"],
      //where: { id: listId },
    });
    console.log(products);
    return products;
  }
  */
}
