"use client";

import * as React from "react";
import { Button } from "@nextui-org/button";

import { Product } from "@/types";
import { useFavoritesStore } from "@/context/favorites-store-provider";
import {
  MaterialSymbolsLightFavorite,
  MaterialSymbolsLightFavoriteOutline,
} from "@/lib/icons-name";

interface FavoriteButtonModel {
  product: Product;
}

export const FavoriteButton: React.FC<FavoriteButtonModel> = ({ product }) => {
  const { addToFavorites, removeFromFavorites, favorites } = useFavoritesStore(
    (state) => state
  );
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const isFavorite = favorites.some(
        (fav) => fav.documentId === product.documentId
      );

      setIsFavorite(isFavorite);
    }
  }, [favorites, product, window]);

  return (
    <Button
      className="absolute top-2 right-2 z-10"
      isIconOnly
      radius="full"
      variant="light"
      size="sm"
      onClick={(e) => {
        e.stopPropagation();

        if (isFavorite) {
          removeFromFavorites(product);
        } else {
          addToFavorites(product);
        }
      }}
    >
      {isFavorite ? (
        <MaterialSymbolsLightFavorite
          className="text-red-500"
          fontSize={24}
          key="MaterialSymbolsLightFavorite"
        />
      ) : (
        <MaterialSymbolsLightFavoriteOutline
          className="text-white"
          fontSize={24}
          key="MaterialSymbolsLightFavoriteOutline"
        />
      )}
    </Button>
  );
};
