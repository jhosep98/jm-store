"use client";

import * as React from "react";
import { Button } from "@nextui-org/button";

import { useCartStore } from "@/context";
import { ProductModel } from "@/types/product";

interface AddProductButtonModel {
  product: ProductModel;
}

export const AddProductButton: React.FC<AddProductButtonModel> = ({
  product,
}) => {
  const { addToCart } = useCartStore((state) => state);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Button variant="solid" color="primary" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};
