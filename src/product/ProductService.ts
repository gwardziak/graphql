import { Service } from "typedi";
import { getRepository } from "typeorm";
import { Product } from "../db/entities/Product";
import { CreateProductArgs } from "./dto/CreateProductArgs";
import { UpdateProductArgs } from "./dto/UpdateProductArgs";

@Service()
export class ProductService {
  async getAll(): Promise<Product[]> {
    return await getRepository(Product).find();
  }

  async getOne(id: number): Promise<Product | null> {
    const product = await getRepository(Product).findOne({
      where: { id },
    });

    if (!product) return null;

    return product;
  }

  async create(product: CreateProductArgs) {
    const newProduct = new Product(product);
    return await getRepository(Product).save(newProduct);
  }

  async edit({ id, ...newValues }: UpdateProductArgs) {
    const product = await getRepository(Product).findOne({ where: { id } });

    if (!product) throw new Error("Product not found!");

    Object.assign(product, newValues);
    return await getRepository(Product).save(product);
  }

  async delete(id: number) {
    const product = await getRepository(Product).findOne({ where: { id } });

    if (!product) throw new Error("Product not found!");

    await getRepository(Product).delete(product);

    return true;
  }
}
