import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

interface IProductList {
  name: string;
  products: Product[];
}

@ObjectType()
@Entity()
export class ProductList implements IProductList {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  /*
  @Field((type) => [Product])
  @Column({ array: true })
  products!: Product[];
  */

  @OneToMany((type) => Product, (products) => products.list)
  @Field((type) => [Product])
  products!: Product[];

  constructor(options: IProductList) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
