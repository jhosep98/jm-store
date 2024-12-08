export interface APIHomeSeo {
  data: Data;
  meta: Record<string, string>;
}

export interface Data {
  id: number;
  documentId: string;
  siteName: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  siteDescription: string;
  defaultSeo: DefaultSEO;
}

export interface DefaultSEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage: ShareImage;
}

export interface ShareImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: null;
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
