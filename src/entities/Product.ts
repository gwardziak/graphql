import { Field, Float, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type ProductOptions = {
  name: string;
  price: number;
};

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id!: number;

  @Column()
  @Field()
  name!: string;

  @Column()
  @Field((type) => Float)
  price!: number;

  constructor(options: ProductOptions) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
