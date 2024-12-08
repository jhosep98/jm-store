import * as React from "react";

import { ProductCard } from "@/components";
import { findManyProductsQuery } from "@/providers";
import { APIProductList } from "@/types/generated/product-list.interface";

const { STRAPI_HOST } = process.env;

export default async function RowCard() {
  const products: APIProductList = await findManyProductsQuery();

  return (
    <section>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.data.map((data) => {
          const photos = data.images.map(
            (img: { url: string }) => `${STRAPI_HOST}/${img.url}`
          );

          return (
            <ProductCard
              id={data.id}
              name={data.productName}
              price={data.price}
              image={photos[2]}
              category={data.category.slug}
              slug={data.slug}
              key={data.id}
              stock={data.stock}
              documentId={data.documentId}
            />
          );
        })}
      </div>
    </section>
  );
}
