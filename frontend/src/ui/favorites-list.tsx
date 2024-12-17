"use client";

import * as React from "react";

import { EmptyCart, ProductCard } from "@/components";
import { useFavoritesStore } from "@/context/favorites-store-provider";

interface FavoritesListModel {
  strapiHost: string;
}

export const FavoritesList: React.FC<FavoritesListModel> = ({ strapiHost }) => {
  const { favorites } = useFavoritesStore((state) => state);

  if (favorites.length === 0) {
    return (
      <div className="my-16 py-16">
        <EmptyCart
          title="No tienes favoritos"
          description="Añade algunos productos a tus favoritos para verlos aquí."
        />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 my-16 py-16">
      {favorites.map((fav) => (
        <ProductCard
          key={fav.data.id}
          product={{ ...fav }}
          strapiHost={strapiHost ?? ""}
        />
      ))}
    </section>
  );
};
