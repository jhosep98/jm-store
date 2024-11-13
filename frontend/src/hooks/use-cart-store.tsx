import { create } from "zustand";

import { ProductModel } from "@/types/product";

type State = {
  cart: ProductModel[];
};

type Action = {
  addToCart: (product: ProductModel) => void;
  removeFromCart: (product: ProductModel) => void;
  clearCart: () => void;
};

export const useCartStore = create<State & Action>()((set) => ({
  cart: [],

  addToCart: (item) => {
    set((state) => ({
      cart: [...state.cart, item],
    }));
  },

  removeFromCart: (item) => {
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
    }));
  },

  clearCart: () => {
    set(() => ({
      cart: [],
    }));
  },
}));
