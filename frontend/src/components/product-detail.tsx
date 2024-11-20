import * as React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { findOneProductQuery } from "@/providers";
import { AddProductButton } from "./add-product-button";

export const ProductDetail: React.FC = async () => {
  const product = await findOneProductQuery("n6axqeu9u6u7a3z1s0cnx10g");

  return (
    <div className="col-span-2">
      <h1 className="text-3xl font-bold">{product.productName}</h1>

      <div className="flex flex-col gap-4 items-start mb-6">
        <p className="text-xl font-semibold">
          {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "PEN",
            minimumFractionDigits: 2,
          }).format(product.price)}
        </p>

        <AddProductButton product={product} />
      </div>

      <div className="[&>p>strong]:font-bold [&>p]:mb-2 [&>ul]:list-disc [&>ul]:mb-2 [&>ul]:pl-8  text-gray-600">
        <BlocksRenderer content={product?.description ?? []} />
      </div>
    </div>
  );
};
