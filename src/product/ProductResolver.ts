import { Arg, Query, Resolver } from "type-graphql";
import { Product } from "../db/entities/Product";
import { ProductObjectType } from "./dto/ProductObjectType";
import { ProductService } from "./ProductService";

@Resolver()
export class ProductResolver {
  constructor(
    // constructor injection of service
    private readonly productService: ProductService
  ) {}

  @Query(() => [ProductObjectType])
  async products() {
    return await this.productService.getAll();
  }

  @Query(() => ProductObjectType, { nullable: true })
  async product(@Arg("id") id: number): Promise<Product | null> {
    return await this.productService.getOne(id);
  }
  /*
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
