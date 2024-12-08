import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { findOneProductQuery } from "@/providers";
import { ProductDetail, SwiperProduct } from "@/components";

const { STRAPI_HOST } = process.env;

interface ProductIdPageModel {
  params: { category: string; productId: string };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProductIdPageModel["params"]>;
}): Promise<Metadata> {
  try {
    const { productId } = await params;

    const product = await findOneProductQuery(productId);

    return {
      title: product.data.productName,
      description: product.data.rawDescription,
      openGraph: {
        title: product.data.productName,
        description: product.data.rawDescription,
        images: product.data.images.map(
          (image: { url: string }) => `${STRAPI_HOST}/${image.url}`
        ),
      },
    };
  } catch (e) {
    return {
      title: "Pagina del producto",
      description: `Producto no encontrado: ${e}`,
      openGraph: {
        title: "Pagina del producto",
        description: "Producto no encontrado",
        images: [],
      },
    };
  }
}

export default async function ProductIdPage({
  params,
}: {
  params: Promise<ProductIdPageModel["params"]>;
}) {
  const { productId } = await params;

  const product = await findOneProductQuery(productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-screen-lg container mx-auto px-4 py-[25px] my-[25px] sm:pt-[65px] sm:mb-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-8">
        <SwiperProduct
          images={product.data.images.map((image: { url: string }) => ({
            image: `${STRAPI_HOST}/${image.url}`,
            name: image.url,
          }))}
        />

        <ProductDetail data={product.data} meta={product.meta} />
      </div>
    </main>
  );
}
