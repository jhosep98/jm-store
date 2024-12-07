import * as React from "react";
import type { Metadata } from "next";

import { findOneProductQuery } from "@/providers";
import { ProductDetail, SwiperProduct } from "@/components";
import { notFound } from "next/navigation";

const { STRAPI_HOST } = process.env;

interface ProductIdPageModel {
  params: { category: string; productId: string };
}

export async function generateMetadata({
  params,
}: ProductIdPageModel): Promise<Metadata> {
  try {
    const { productId } = params;

    const product = await findOneProductQuery(productId);

    return {
      title: product.productName,
      description: product.rawDescription,
      openGraph: {
        title: product.productName,
        description: product.rawDescription,
        images: product.images.map(
          (image: { url: string }) => `${STRAPI_HOST}/${image.url}`
        ),
      },
    };
  } catch (error) {
    return {
      title: "Pagina del producto",
      description: "Producto no encontrado",
      openGraph: {
        title: "Pagina del producto",
        description: "Producto no encontrado",
        images: [],
      },
    };
  }
}

export default async function ProductIdPage({ params }: ProductIdPageModel) {
  const { productId } = params;

  const product = await findOneProductQuery(productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-screen-lg container mx-auto px-4 py-[25px] my-[25px] sm:pt-[65px] sm:mb-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-8">
        <SwiperProduct
          images={product.images.map((image: { url: string }) => ({
            image: `${STRAPI_HOST}/${image.url}`,
            name: image.url,
          }))}
        />

        <ProductDetail product={product} />
      </div>
    </main>
  );
}
