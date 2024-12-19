"use client";

import * as React from "react";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";

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
  const { addToFavorites, removeFromFavorites, validateFavorite } =
    useFavoritesStore((state) => state);

  const [mounted, setMounted] = React.useState(false);

  const isFavorite = validateFavorite(product);

  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (isFavorite) {
        removeFromFavorites(product);
      } else {
        addToFavorites(product);
      }
    },
    [isFavorite]
  );

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="flex rounded-full w-6 h-6" />;

  return (
    <Button
      className="absolute top-2 right-2 z-10"
      isIconOnly
      radius="full"
      variant="light"
      size="sm"
      aria-label="Favorite"
      onClick={onClick}
    >
      {!isFavorite && (
        <MaterialSymbolsLightFavoriteOutline
          className="text-white"
          fontSize={24}
          key="MaterialSymbolsLightFavoriteOutline"
        />
      )}

      {isFavorite && (
        <MaterialSymbolsLightFavorite
          className="text-red-500"
          fontSize={24}
          key="MaterialSymbolsLightFavoriteOutline"
        />
      )}
    </Button>
  );
};
