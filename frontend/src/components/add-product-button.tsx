"use client";

import * as React from "react";
import { Button } from "@nextui-org/button";

import { APIProduct } from "@/types";
import { useCartStore } from "@/context";
import { LetsIconsAddRound } from "@/lib/icons-name";

interface AddProductButtonModel {
  product: APIProduct;
}

export const AddProductButton: React.FC<AddProductButtonModel> = ({
  product,
}) => {
  const { addToCart, cart } = useCartStore((state) => state);

  const handleAddToCart = () => {
    if (cart.length < product.data.stock) {
      addToCart(product);
    }
  };

  return (
    <Button
      variant="solid"
      color="primary"
      onClick={handleAddToCart}
      disabled={product.data.stock === 0}
      endContent={<LetsIconsAddRound fontSize={20} />}
    >
      Añadir al carrito
    </Button>
  );
};
