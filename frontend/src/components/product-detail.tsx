import * as React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { APIProduct } from "@/types";
import { AddProductButton } from "./add-product-button";

export const ProductDetail: React.FC<APIProduct> = (product) => {
  const { data } = product;

  return (
    <div className="col-span-2">
      <h1 className="text-3xl font-bold">{data.productName}</h1>

      <div className="flex flex-col gap-4 items-start mb-6">
        <p className="text-xl font-semibold">
          {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "PEN",
            minimumFractionDigits: 2,
          }).format(data.price)}
        </p>

        <AddProductButton product={data} />
      </div>

      <div className="[&>p>strong]:font-bold [&>p]:mb-2 [&>ul]:list-disc [&>ul]:mb-2 [&>ul]:pl-8  text-gray-600 dark:text-white">
        <BlocksRenderer content={data.description as []} />
      </div>
    </div>
  );
};
