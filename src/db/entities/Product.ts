import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

interface IProductModel {
  name: string;
  price: number;
}

@Entity()
export class ProductModel implements IProductModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: number;

  /*
  @ManyToOne((type) => ProductList, (list) => list.products)
  list!: ProductList;
*/
  constructor(options: IProductModel) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
