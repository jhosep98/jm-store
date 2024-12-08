"use client";

import { createStore } from "zustand/vanilla";

import { APIProduct } from "@/types";

export type CartState = {
  cart: APIProduct[];
};

export type CartActions = {
  addToCart: (product: APIProduct) => void;
  removeFromCart: (product: APIProduct) => void;
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
const loadCartFromLocalStorage = (): APIProduct[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  }

  return [];
};

// Save cart to localStorage
const saveCartToLocalStorage = (cart: APIProduct[]) => {
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
          (cartItem) => cartItem.data.id !== item.data.id
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
