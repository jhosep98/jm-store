import * as React from "react";

import { ProductCard } from "@/components";
import { findManyProductsQuery } from "@/providers";
import { APIProductList } from "@/types/generated/product-list.interface";

const { STRAPI_HOST } = process.env;

export default async function RowCard() {
  const products: APIProductList = await findManyProductsQuery();

  return (
    <section>
      <div className="grid gap-x-[var(--cards-gap-x)] gap-y-[var(--cards-gap-y)] grid-cols-1 lg:grid-cols-4">
        {products.data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            strapiHost={STRAPI_HOST ?? ""}
          />
        ))}
      </div>
    </section>
  );
}
