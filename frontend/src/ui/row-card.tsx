import * as React from "react";

import { ProductCard } from "@/components";
import { ProductModel } from "@/types/product";
import { findManyProductsQuery } from "@/providers";

const { STRAPI_HOST } = process.env;

export default async function RowCard() {
  const products: Array<ProductModel> = await findManyProductsQuery();

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {products.map(({ id, productName, price, images, category, slug }) => {
          const photos = images.map(
            (img: { url: string }) => `${STRAPI_HOST}/${img.url}`
          );

          return (
            <ProductCard
              id={id}
              name={productName}
              price={price}
              image={photos[2]}
              category={category.slug}
              slug={slug}
              key={id}
            />
          );
        })}
      </div>
    </section>
  );
}
