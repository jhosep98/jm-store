"use client";

import { createStore } from "zustand/vanilla";

import { Product } from "@/types";

export type CartState = {
  cart: Product[];
};

export type CartActions = {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
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
const loadCartFromLocalStorage = (): Product[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  }

  return [];
};

// Save cart to localStorage
const saveCartToLocalStorage = (cart: Product[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }
};

export const createCartStore = (
  initState: CartState = { cart: loadCartFromLocalStorage() }
) => {
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
