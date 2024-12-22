"use client";

import { createStore } from "zustand/vanilla";

import { Product } from "@/types";

export type FavoritesState = {
  favorites: Product[];
};

export type FavoritesActions = {
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (product: Product) => void;
  clearFavorites: () => void;
  validateFavorite: (product: Product) => boolean;
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
const loadFavoritesFromLocalStorage = (): Product[] => {
  if (typeof window !== "undefined") {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  return [];
};

// Save favorites to localStorage
const saveFavoritesToLocalStorage = (favorites: Product[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
  }
};

export const createFavoritesStore = (
  initState: FavoritesState = { favorites: loadFavoritesFromLocalStorage() }
) => {
  return createStore<FavoritesStore>()((set) => ({
    ...initState,
    validateFavorite: (item) => {
      const isFavorite = loadFavoritesFromLocalStorage().some(
        (fav) => fav.id === item.id
      );

      return isFavorite;
    },

    addToFavorites: (item) => {
      set(() => {
        const updatedFavorites = [item];
        saveFavoritesToLocalStorage(updatedFavorites);
        return { favorites: updatedFavorites };
      });
    },

    removeFromFavorites: (item) => {
      set((state) => {
        const updatedFavorites = state.favorites.filter(
          (favorite) => favorite.id !== item.id
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
