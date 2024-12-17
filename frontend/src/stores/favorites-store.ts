"use client";

import { createStore } from "zustand/vanilla";

import { APIProduct } from "@/types";

export type FavoritesState = {
  favorites: APIProduct[];
};

export type FavoritesActions = {
  addToFavorites: (product: APIProduct) => void;
  removeFromFavorites: (product: APIProduct) => void;
  clearFavorites: () => void;
};

export type FavoritesStore = FavoritesState & FavoritesActions;

export const initFavoritesStore = (): FavoritesState => {
  return {
    favorites: [],
  };
};

export const defaultInitState: FavoritesState = {
  favorites: [],
};

const LOCAL_STORAGE_KEY = "favorites_data";

// Load favorites from localStorage
const loadFavoritesFromLocalStorage = (): APIProduct[] => {
  if (typeof window !== "undefined") {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  return [];
};

// Save favorites to localStorage
const saveFavoritesToLocalStorage = (favorites: APIProduct[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
  }
};

export const createFavoritesStore = (
  initState: FavoritesState = { favorites: loadFavoritesFromLocalStorage() }
) => {
  return createStore<FavoritesStore>()((set) => ({
    ...initState,

    addToFavorites: (item) => {
      set((state) => {
        const updatedFavorites = [...state.favorites, item];
        saveFavoritesToLocalStorage(updatedFavorites);
        return { favorites: updatedFavorites };
      });
    },

    removeFromFavorites: (item) => {
      set((state) => {
        const updatedFavorites = state.favorites.filter(
          (favorite) => favorite.data.id !== item.data.id
        );
        saveFavoritesToLocalStorage(updatedFavorites);
        return { favorites: updatedFavorites };
      });
    },

    clearFavorites: () => {
      set(() => {
        saveFavoritesToLocalStorage([]);
        return { favorites: [] };
      });
    },
  }));
};
