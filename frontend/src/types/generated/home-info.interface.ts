export interface APIHomeInfo {
  data: Data;
  meta: Record<string, string>;
}

export interface Data {
  id: number;
  documentId: string;
  title: string;
  description: Description[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  firstSubtitle: string;
  cover: Cover[];
}

export interface Cover {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Formats {
  thumbnail: Large;
  large?: Large;
  medium?: Large;
  small: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Description {
  type: string;
  children: Child[];
}

export interface Child {
  type: string;
  text: string;
  bold?: boolean;
}
