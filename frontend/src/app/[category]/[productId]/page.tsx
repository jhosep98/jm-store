import * as React from "react";
import type { Metadata } from "next";

import { useFindOneProductQuery } from "@/providers";
import { ProductDetail, SwiperProduct } from "@/components";

export const metadata: Metadata = {
  title: "Classic T-Shirt",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
};

const { STRAPI_HOST } = process.env;

export default async function ProductIdPage() {
  const product = await useFindOneProductQuery("n6axqeu9u6u7a3z1s0cnx10g");

  return (
    <main className="max-w-screen-lg container mx-auto px-4 py-[25px] my-[25px]">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-16">
        <SwiperProduct
          images={product.images.map((image: { url: string }) => ({
            image: `${STRAPI_HOST}/${image.url}`,
            name: image.url,
          }))}
        />

        <ProductDetail />
      </div>
    </main>
  );
}
