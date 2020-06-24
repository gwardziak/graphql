import { Arg, Query, Resolver } from "type-graphql";
import { ProductList } from "../db/entities/ProductList";
import { ProductListObjectType } from "./dto/ProductListObjectType";
import { ProductListService } from "./ProductListService";

@Resolver()
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
  /*
  @Mutation(() => ProductList)
  async createProductList(
    @Args()
    { name, products }: CreateProductListArgs
  ): Promise<ProductList> {
    console.log(name, products);

    return new ProductList({ name: "dupa", products: [] });
  }

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
