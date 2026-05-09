export interface Product {
  id: string;
  categoryId: string;

  name: string;
  shortDescription: string;
  longDescription?: string;

  image: string;

  benefits?: string;
  instructions?: string;
  ingredients?: string;

  amazonUrl?: string;
  salonUrl?: string;
}
