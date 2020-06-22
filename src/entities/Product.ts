import { Field, Float, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

interface IProduct {
  name: string;
  price: number;
}

@ObjectType()
@Entity()
export class Product implements IProduct {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field((type) => Float)
  @Column()
  price!: number;

  constructor(options: IProduct) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
