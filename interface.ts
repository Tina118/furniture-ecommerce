export interface IFurniture {
  name: string;
  src: string;
  category: string;
  originalPrice: number;
  salePrice: number;
  description: string;
  feature: string;
  featurePoints: string[];
  careInstructions: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
