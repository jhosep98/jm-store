import * as React from "react";

import { useCartStore } from "@/context";

export const useGetProductDetails = () => {
  const { cart } = useCartStore((state) => state);

  const removeRepeatedProducts = React.useCallback((products: any[]) => {
    const countProduct = (id: string) => {
      return products.filter((product) => product.id === id).length;
    };

    const uniqueProducts = [...new Set(products.map((product) => product.id))];

    return uniqueProducts.map((id) => {
      const count = countProduct(id);

      return {
        ...products.find((product) => product.id === id),
        quantity: count,
      };
    });
  }, []);

  const uniqueProducts = removeRepeatedProducts(cart);

  const totalPrice = uniqueProducts.reduce((acc, item) => {
    const total = item.quantity * item.price;
    return acc + total;
  }, 0);

  return {
    uniqueProducts,
    totalPrice,
  };
};
