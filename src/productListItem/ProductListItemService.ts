import { Service } from "typedi";
import { getRepository } from "typeorm";
import { Product } from "../db/entities/Product";
import { ProductListItem } from "../db/entities/ProductListItem";
import { IProductListItemServiceCreateArgs } from "../models/ProductListItem";

@Service()
export class ProductListItemService {
  private productListItemRepository = getRepository(ProductListItem);

  async getAll(): Promise<ProductListItem[]> {
    return await this.productListItemRepository.find();
  }

  async getOne(listItemId: number): Promise<ProductListItem | null> {
    const productListItem = await this.productListItemRepository.findOne({
      where: { id: listItemId },
    });

    if (!productListItem) return null;

    return productListItem;
  }

  async create({
    productId,
    quantity,
  }: IProductListItemServiceCreateArgs): Promise<ProductListItem> {
    const product = await getRepository(Product).findOne({
      where: { id: productId },
    });

    if (!product) throw new Error("Product not found!");

    const productListItem = new ProductListItem({
      quantity,
      product,
    });

    return await this.productListItemRepository.save(productListItem);
  }
}
