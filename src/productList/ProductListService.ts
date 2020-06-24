import { Service } from "typedi";
import { getRepository } from "typeorm";
import { Product } from "../db/entities/Product";
import { ProductList } from "../db/entities/ProductList";
import { ProductObjectType } from "./../product/dto/ProductObjectType";
import { CreateProductListArgs } from "./dto/CreateProductListArgs";

@Service()
export class ProductListService {
  async getAll(): Promise<ProductList[]> {
    return await getRepository(ProductList).find();
  }

  async getOne(id: number): Promise<ProductList | null> {
    const productList = await getRepository(ProductList).findOne({
      where: { id },
    });

    if (!productList) return null;

    return productList;
  }

  async create(
    bbb: ProductObjectType,
    { name, products }: CreateProductListArgs
  ): Promise<ProductList> {
    const product1 = new Product({ name: "cos", price: 1.2 });
    await getRepository(Product).save(product1);
    const product2 = new Product({ name: "cos1", price: 1.2 });
    await getRepository(Product).save(product2);

    const list = new ProductList({ name, products: [product1, product2] });

    return await getRepository(ProductList).save(list);
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
