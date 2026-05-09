export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  productIds: string[];
  parentId?: string;
  visible?: boolean;
}
