export interface APIProduct {
  data: Data;
  meta: Record<string, string>;
}

export interface Data {
  id: number;
  documentId: string;
  productName: string;
  slug: string;
  description: Description[];
  active: boolean;
  price: number;
  isNew: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  stock: number;
  rawDescription: string;
  images: Image[];
  category: Category;
}

export interface Category {
  id: number;
  documentId: string;
  categoryName: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Description {
  type: string;
  children: Child[];
  format?: string;
}

export interface Child {
  type: Type;
  text?: string;
  bold?: boolean;
  children?: Child[];
}

export enum Type {
  ListItem = "list-item",
  Text = "text",
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export enum EXT {
  Webp = ".webp",
}

export interface Formats {
  thumbnail: Large;
  medium: Large;
  small: Large;
  large: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export enum MIME {
  ImageWebp = "image/webp",
}
