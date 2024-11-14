import { createStore } from "zustand/vanilla";

import { ProductModel } from "@/types/product";

export type CartState = {
  cart: ProductModel[];
};

export type CartActions = {
  addToCart: (product: ProductModel) => void;
  removeFromCart: (product: ProductModel) => void;
  clearCart: () => void;
};

export type CartStore = CartState & CartActions;

export const initCartStore = (): CartState => {
  return {
    cart: [],
  };
};

export const defaultInitState: CartState = {
  cart: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()((set) => ({
    ...initState,
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
};
