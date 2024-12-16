"use client";

import React from "react";

import { useCartStore } from "@/context";
import { EmptyCart } from "@/components";
import { ProductsTable } from "./products-table";

interface CartContainerModel {
  strapiHost: string;
}

export const CartContainer: React.FC<CartContainerModel> = ({ strapiHost }) => {
  const { cart } = useCartStore((state) => state);

  return (
    <>
      {cart.length > 0 && <ProductsTable strapiHost={strapiHost} />}

      {cart.length === 0 && <EmptyCart />}
    </>
  );
};
