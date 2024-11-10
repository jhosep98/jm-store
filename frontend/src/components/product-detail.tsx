import * as React from "react";
import { Button } from "@nextui-org/button";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { findOneProductQuery } from "@/providers";

export const ProductDetail: React.FC = async () => {
  const product = await findOneProductQuery("n6axqeu9u6u7a3z1s0cnx10g");

  return (
    <div className="col-span-2">
      <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>

      <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>

      <div className="[&>p>strong]:font-bold [&>p]:mb-2 [&>ul]:list-disc [&>ul]:mb-2 [&>ul]:pl-8  text-gray-600">
        <BlocksRenderer content={product?.description ?? []} />
      </div>

      <Button variant="solid" color="primary">
        Add to Cart
      </Button>
    </div>
  );
};
