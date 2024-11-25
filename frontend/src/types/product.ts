export interface ProductModel {
  id: number;
  price: number;
  documentId: string;
  productName: string;
  category: { categoryName: string, slug: string };
  slug: string;
  images: Array<{ url: string }>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  decription: Array<{ text: string }>;
  stock: number;
}
