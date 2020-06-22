import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { CreateProductListArgs } from "./../argTypes/ProductListArgs";
import { ProductList } from "./../entities/ProductList";

@Resolver()
export class ProductListResolver {
  @Query(() => [ProductList])
  async productsLists(): Promise<ProductList[]> {
    return await getRepository(ProductList).find();
  }

  @Query(() => ProductList, { nullable: true })
  async productsList(@Arg("id") id: number): Promise<ProductList | null> {
    const productList = await getRepository(ProductList).findOne({
      where: { id },
    });

    if (!productList) return null;

    return productList;
  }

  @Mutation(() => ProductList)
  async createProductList(
    @Args()
    { name, products }: CreateProductListArgs
  ): Promise<ProductList> {
    console.log(name, products);

    return new ProductList({ name: "dupa", products: [] });
  }

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

  /*
  @Mutation(() => ProductList)
  async createProductList(@Args() productList: CreateProductListArgs) {
    console.log(productList);
    //const newProductList = new ProductList(productList);
    //console.log("Creating productList");
    //return await getRepository(ProductList).save(newProductList);
  }

  /*
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
