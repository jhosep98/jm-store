import * as React from "react";

import { ProductCard } from "./product-card";
import { APIProductList } from "@/types/generated/product-list.interface";

interface CardsGridModel {
  strapiHost: string;
  products: APIProductList;
}

export const CardsGrid: React.FC<CardsGridModel> = ({
  strapiHost,
  products,
}) => {
  return (
    <>
      {products.data.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            strapiHost={strapiHost ?? ""}
          />
        );
      })}
    </>
  );
};
