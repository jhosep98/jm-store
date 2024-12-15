"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

interface ProductCardModel {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  slug: string;
  stock: number;
  documentId: string;
}

export const ProductCard: React.FC<ProductCardModel> = (item) => (
  <Link href={`${item.category}/${item.documentId}`}>
    <Card shadow="none" className="border-none rounded-none bg-transparent">
      {item.image ? (
        <CardBody className="p-0">
          <div className="relative min-h-96 overflow-hidden inline-block">
            <Image
              alt={item.name}
              className="object-cover rounded-sm min-h-96"
              src={item.image}
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

      <CardFooter className="flex justify-between items-end p-0 mt-3">
        <div className="flex-col items-start">
          <h3 className="text-xl font-light mb-2">{item.name}</h3>

          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <span className="line-through text-md text-gray-500">
                {new Intl.NumberFormat("es-ES", {
                  style: "currency",
                  currency: "PEN",
                  minimumFractionDigits: 2,
                }).format(item.price + 25)}
              </span>

              <p className="text-md font-semibold">
                {new Intl.NumberFormat("es-ES", {
                  style: "currency",
                  currency: "PEN",
                  minimumFractionDigits: 2,
                }).format(item.price)}
              </p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <p className="text-md font-semibold">{item.stock}/u</p>
        </div>
      </CardFooter>
    </Card>
  </Link>
);
