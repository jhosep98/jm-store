"use client";

import * as React from "react";

import { useFavoritesStore } from "@/context/favorites-store-provider";

export const FavoritesList: React.FC = () => {
  const { favorites } = useFavoritesStore((state) => state);

  return <div>{JSON.stringify(favorites)}</div>;
};
