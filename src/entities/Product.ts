import { Field, Float, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type ProductOptions = {
  name: string;
  price: number;
};

@ObjectType()
@Entity()
export class Product {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field((type) => Float)
  @Column()
  price!: number;

  constructor(options: ProductOptions) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
