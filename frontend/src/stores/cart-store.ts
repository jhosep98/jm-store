"use client";

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

const LOCAL_STORAGE_KEY = "cart_data";

// Load cart from localStorage
const loadCartFromLocalStorage = (): ProductModel[] => {
  const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);

  console.log("storedCart", storedCart);

  return storedCart ? JSON.parse(storedCart) : [];
};

// Save cart to localStorage
const saveCartToLocalStorage = (cart: ProductModel[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
};

export const createCartStore = (
  initState: CartState = { cart: loadCartFromLocalStorage() }
) => {
  console.log("initState", initState);

  return createStore<CartStore>()((set) => ({
    ...initState,

    addToCart: (item) => {
      set((state) => {
        const updatedCart = [...state.cart, item];
        saveCartToLocalStorage(updatedCart);
        return { cart: updatedCart };
      });
    },

    removeFromCart: (item) => {
      set((state) => {
        const updatedCart = state.cart.filter(
          (cartItem) => cartItem.id !== item.id
        );
        saveCartToLocalStorage(updatedCart);
        return { cart: updatedCart };
      });
    },

    clearCart: () => {
      set(() => {
        saveCartToLocalStorage([]);
        return { cart: [] };
      });
    },
  }));
};
