"use client";

import * as React from "react";
import { Button } from "@nextui-org/button";

import { useCartStore } from "@/hooks";
import { ProductModel } from "@/types/product";

interface AddProductButtonModel {
  product: ProductModel;
}

export const AddProductButton: React.FC<AddProductButtonModel> = ({
  product,
}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const onAddCart = () => {
    addToCart(product);
  };

  return (
    <Button variant="solid" color="primary" onClick={onAddCart}>
      Add to Cart
    </Button>
  );
};
