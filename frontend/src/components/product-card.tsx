"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import { APIProduct } from "@/types";
import { useFavoritesStore } from "@/context/favorites-store-provider";
import {
  MaterialSymbolsLightFavorite,
  MaterialSymbolsLightFavoriteOutline,
} from "@/lib/icons-name";

interface ProductCardModel {
  product: APIProduct;
  strapiHost: string;
}

export const ProductCard: React.FC<ProductCardModel> = ({
  product,
  strapiHost,
}) => {
  const { addToFavorites, removeFromFavorites, favorites } = useFavoritesStore(
    (state) => state
  );

  const {
    data: { category, documentId, images, productName, stock, price },
  } = product;

  const photos = images.map((img) => ({
    url: `${strapiHost}/${img.url}`,
    name: img.name,
  }));

  const isFavorite = favorites.find(
    (fav) => fav.data.documentId === documentId
  );

  return (
    <Card shadow="none" className="border-none rounded-none bg-transparent">
      <Link href={`${category.slug}/${documentId}`}>
        {photos.length > 0 ? (
          <CardBody className="p-0">
            <div className="relative min-h-96 overflow-hidden inline-block">
              <Image
                alt={photos[2].name}
                className="object-cover rounded-sm min-h-96"
                src={photos[2].url}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                fill
              />
            </div>
          </CardBody>
        ) : (
          <Skeleton className="rounded-lg">
            <div className="h-56 rounded-lg bg-default-300"></div>
          </Skeleton>
        )}
      </Link>

      <Button
        className="absolute top-2 right-2 z-20"
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
          />
        ) : (
          <MaterialSymbolsLightFavoriteOutline
            className="text-white"
            fontSize={24}
          />
        )}
      </Button>

      <Link href={`${category.slug}/${documentId}`}>
        <CardFooter className="flex justify-between items-end p-0 mt-3">
          <div className="flex-col items-start">
            <h3 className="text-xl font-light mb-2">{productName}</h3>

            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <span className="line-through text-md text-gray-500">
                  {new Intl.NumberFormat("es-ES", {
                    style: "currency",
                    currency: "PEN",
                    minimumFractionDigits: 2,
                  }).format(price + 25)}
                </span>

                <p className="text-md font-semibold">
                  {new Intl.NumberFormat("es-ES", {
                    style: "currency",
                    currency: "PEN",
                    minimumFractionDigits: 2,
                  }).format(price)}
                </p>
              </div>
            </div>
          </div>

          <div className="px-2">
            <p className="text-md font-semibold">{stock}/u</p>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};
