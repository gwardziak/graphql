import { Service } from "typedi";
import { getRepository } from "typeorm";
import { Product } from "../db/entities/Product";
import {
  IProductServiceCreateArgs,
  IProductServiceUpdateArgs,
} from "../models/Product";

@Service()
export class ProductService {
  private productRepository = getRepository(Product);

  async getAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getOne(id: number): Promise<Product | null> {
    const product = await this.productRepository.findOne({
      where: { id },
    });

    if (!product) return null;

    return product;
  }

  async create(product: IProductServiceCreateArgs): Promise<Product> {
    const newProduct = new Product(product);
    return await this.productRepository.save(newProduct);
  }

  async edit({
    id,
    ...values
  }: Partial<IProductServiceUpdateArgs>): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) throw new Error("Product not found!");

    Object.assign(product, values);
    return await this.productRepository.save(product);
  }

  async delete(id: number): Promise<boolean> {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) return false;

    await this.productRepository.delete(product);

    return true;
  }
}
