import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import { Product } from "@/types";
import { FavoriteButton } from "./favorite-button";

interface ProductCardModel {
  product: Product;
  strapiHost: string;
}

export const ProductCard: React.FC<ProductCardModel> = ({
  product,
  strapiHost,
}) => {
  const { category, documentId, images, productName, stock, price, isNew } =
    product;

  const photos = images.map((img) => ({
    url: `${strapiHost}/${img.url}`,
    name: img.name,
  }));

  const priceWithDiscount = price - price * (20 / 100);

  return (
    <Card
      shadow="none"
      className="border-none rounded-none bg-transparent flex flex-col gap-y-2"
    >
      <Link href={`${category.slug}/${documentId}`}>
        {photos.length > 0 ? (
          <CardBody className="relative rounded-lg overflow-hidden h-[280px] p-0">
            <div className="absolute top-0 left-0 h-full w-full z-[1]">
              <Image
                alt={photos[2].name}
                src={photos[2].url}
                priority
                width="900"
                height="1125"
                className="lazy-image h-full w-full object-cover is-loaded"
                sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 25vw, 420px"
              />
            </div>
          </CardBody>
        ) : (
          <Skeleton className="rounded-lg">
            <div className="h-56 rounded-lg bg-default-300"></div>
          </Skeleton>
        )}
      </Link>

      <FavoriteButton product={product} />

      <Link href={`${category.slug}/${documentId}`}>
        <CardFooter className="flex justify-between items-end p-0">
          <div className="flex-col items-start">
            <h3 className="text-xl font-light mb-2">{productName}</h3>

            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <span className="line-through text-sm text-gray-500">
                  {new Intl.NumberFormat("es-ES", {
                    style: "currency",
                    currency: "PEN",
                    minimumFractionDigits: 2,
                  }).format(price)}
                </span>

                <p className="text-sm font-semibold">
                  {new Intl.NumberFormat("es-ES", {
                    style: "currency",
                    currency: "PEN",
                    minimumFractionDigits: 2,
                  }).format(isNew ? priceWithDiscount : price)}
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
