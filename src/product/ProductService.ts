import { Service } from "typedi";
import { getRepository } from "typeorm";
import { Product } from "../db/entities/Product";

// this service will be global - shared by every request
@Service()
export class ProductService {
  async getAll() {
    return await getRepository(Product).find();
  }
}
