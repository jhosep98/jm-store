"use client";

import React from "react";

import { useCartStore } from "@/context";
import { EmptyCart } from "@/components";
import { ProductsTable } from "./products-table";

export const CartContainer: React.FC = () => {
  const { cart } = useCartStore((state) => state);

  return (
    <>
      {cart.length > 0 && <ProductsTable />}

      {cart.length === 0 && <EmptyCart />}
    </>
  );
};
