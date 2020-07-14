export interface IProductEntity {
  name: string;
  price: number;
}

export interface IProductObjectType {
  id: number;
  name: string;
  price: number;
}

export interface IProductObjectTypeCreateArgs {
  name: string;
  price: number;
}

export interface IProductObjectTypeUpdateArgs {
  id: number;
  name: string;
  price: number;
}

export interface IProductServiceCreateArgs {
  name: string;
  price: number;
}

export interface IProductServiceUpdateArgs {
  id: number;
  name: string;
  price: number;
}
