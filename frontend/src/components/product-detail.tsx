import * as React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { useFindOneProductQuery } from "@/providers";
import { AddProductButton } from "./add-product-button";

export const ProductDetail: React.FC = async () => {
  const product = await useFindOneProductQuery("n6axqeu9u6u7a3z1s0cnx10g");

  return (
    <div className="col-span-2">
      <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>

      <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>

      <div className="[&>p>strong]:font-bold [&>p]:mb-2 [&>ul]:list-disc [&>ul]:mb-2 [&>ul]:pl-8  text-gray-600">
        <BlocksRenderer content={product?.description ?? []} />
      </div>

      <AddProductButton product={product} />
    </div>
  );
};
