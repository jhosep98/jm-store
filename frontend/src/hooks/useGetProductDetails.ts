"use client";

import * as React from "react";

import { APIProduct } from "@/types";
import { useCartStore } from "@/context";

export const useGetProductDetails = () => {
  const { cart } = useCartStore((state) => state);

  const removeRepeatedProducts = React.useCallback((products: APIProduct[]) => {
    const countProduct = (id: number) => {
      return products.filter((product) => product.data.id === id).length;
    };

    const uniqueProducts = [
      ...new Set(products.map((product) => product.data.id)),
    ];

    return uniqueProducts.map((id) => {
      const count = countProduct(id);

      return {
        ...products.find((product) => product.data.id === id),
        quantity: count,
      };
    });
  }, []);

  const uniqueProducts = removeRepeatedProducts(cart);

  const totalPrice = uniqueProducts.reduce((acc, item) => {
    if (!item.data?.price) return acc;

    const total = item.quantity * item.data?.price;
    return acc + total;
  }, 0);

  return {
    uniqueProducts,
    totalPrice,
  };
};
