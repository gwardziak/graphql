import { Service } from "typedi";
import { getRepository } from "typeorm";
import { ProductList } from "../db/entities/ProductList";

@Service()
export class ProductListService {
  private productRepository = getRepository(ProductList);

  async getAll(): Promise<ProductList[]> {
    return await this.productRepository.find();
  }

  async getOne(id: number): Promise<ProductList | null> {
    const productList = await this.productRepository.findOne({
      where: { id },
    });

    if (!productList) return null;

    return productList;
  }
  /*
  async create({
    name,
    products,
  }: CreateProductListArgs): Promise<ProductList> {
    const product1 = new Product({ name: "cos", price: 1.2 });
    await getRepository(Product).save(product1);
    const product2 = new Product({ name: "cos1", price: 1.2 });
    await getRepository(Product).save(product2);

    const list = new ProductList({ name, products: [product1, product2] });

    return await this.productRepository.save(list);
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
    await this.productRepository.find();
    return new ProductList({ name, products });
  }

  @Mutation(() => ProductList)
  async createProductList(@Args() productList: CreateProductListArgs) {
    console.log(productList);
    //const newProductList = new ProductList(productList);
    //console.log("Creating productList");
    //return await this.productRepository.save(newProductList);
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
