import {
  Arg,
  Args,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { getRepository } from "typeorm";
import { Product } from "../db/entities/Product";
import { ProductList } from "../db/entities/ProductList";
import { ProductObjectType } from "./../product/dto/ProductObjectType";
import { CreateProductListArgs } from "./dto/CreateProductListArgs";
import { ProductListObjectType } from "./dto/ProductListObjectType";
import { ProductListService } from "./ProductListService";

@Resolver((of) => ProductListObjectType)
export class ProductListResolver {
  private constructor(
    private readonly productListService: ProductListService
  ) {}

  @Query(() => [ProductListObjectType])
  async productLists(): Promise<ProductList[]> {
    return await this.productListService.getAll();
  }

  @Query(() => ProductListObjectType, { nullable: true })
  async productList(@Arg("id") id: number): Promise<ProductList | null> {
    return await this.productListService.getOne(id);
  }

  @Mutation(() => ProductListObjectType)
  async createProductList(
    @Args()
    createArgs: CreateProductListArgs
  ): Promise<ProductList> {
    return await this.productListService.create(createArgs);
  }

  @FieldResolver()
  async products(
    @Root() { id: listId }: ProductListObjectType
  ): Promise<ProductObjectType[]> {
    const products = await getRepository(Product).find({
      relations: ["list"],
      where: { id: listId },
    });

    return products;
  }

  /*


 @Mutation(() => ProductListObjectType)
  async createProductList(
    @Args()
    createArgs: CreateProductListArgs
  ): Promise<ProductList> {
    return await this.productListService.create(createArgs);
  }


*/

  /*
  @Mutation(() => ProductList)
  async createProductList(
    @Arg("name") name: string,
    @Arg("products") products: Product[]
  ): Promise<ProductList> {
    console.log(name);
    console.log(products);
    await getRepository(ProductList).find();
    return new ProductList({ name, products });
  }

  @Mutation(() => ProductList)
  async createProductList(@Args() productList: CreateProductListArgs) {
    console.log(productList);
    //const newProductList = new ProductList(productList);
    //console.log("Creating productList");
    //return await getRepository(ProductList).save(newProductList);
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
  */
}
