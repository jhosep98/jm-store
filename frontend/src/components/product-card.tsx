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
    <Card shadow="none" className="border-none rounded-md bg-gray-50">
      {item.image ? (
        <CardBody>
          <div className="relative min-h-72">
            <Image
              alt={item.name}
              className="object-cover rounded-sm min-h-72"
              src={item.image}
              priority
              fill
            />
          </div>
        </CardBody>
      ) : (
        <Skeleton className="rounded-lg">
          <div className="h-56 rounded-lg bg-default-300"></div>
        </Skeleton>
      )}

      <CardFooter className="flex justify-between items-end p-4 pt-0">
        <div className="flex-col items-start">
          <h3 className="text-xl font-bold mb-2">{item.name}</h3>

          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <p className="text-lg">
                {new Intl.NumberFormat("es-ES", {
                  style: "currency",
                  currency: "PEN",
                  minimumFractionDigits: 2,
                }).format(item.price)}
              </p>

              <span className="line-through text-md text-gray-400">
                {new Intl.NumberFormat("es-ES", {
                  style: "currency",
                  currency: "PEN",
                  minimumFractionDigits: 2,
                }).format(item.price + 25)}
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-md font-semibold">{item.stock}/u</p>
        </div>
      </CardFooter>
    </Card>
  </Link>
);
