"use client";

import * as React from "react";
import { Button } from "@nextui-org/button";

interface ProductDetailModel {
  name: string;
  price: number;
  category: string;
  details: string;
}

export const ProductDetail: React.FC<ProductDetailModel> = (product) => {
  return (
    <div className="col-span-2">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>

      <p className="text-gray-600 mb-6">{product.details}</p>

      <Button variant="solid" color="primary">
        Add to Cart
      </Button>
    </div>
  );
};
