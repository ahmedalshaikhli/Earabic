export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  productType: string;
  productBrand: string;
  photos: IPhoto[];
}
export interface IPhoto {
  id: number;
  pictureUrl: string;
  fileName: string;
  isMain: boolean;
  url?: string;
}

export interface IProductToCreate {
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  productTypeId: number;
  productBrandId: number;
  photos: File[];
}
export class ProductFormValues implements IProductToCreate {
  name = '';
  description = '';
  price: number = 0;
  pictureUrl = '';
  productBrandId!: number;
  productTypeId!: number;
  photos: File[] = [];
  

  constructor(init?: ProductFormValues) {
    Object.assign(this, init);
  }
}

