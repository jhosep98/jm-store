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

      <FavoriteButton product={product} />

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
                  }).format(price)}
                </span>

                <p className="text-md font-semibold">
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
