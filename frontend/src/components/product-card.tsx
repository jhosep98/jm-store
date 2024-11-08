"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import { MdiCartOutline } from "@/lib/icons-name";
import { parseTitleToURL } from "@/lib/parse-title-to-url";

interface ProductCardModel {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  slug: string;
}

export const ProductCard: React.FC<ProductCardModel> = (item) => (
  <Link href={`/${item.category}/${item.slug}`}>
    <Card>
      {item.image ? (
        <CardBody>
          <div className="relative min-h-72">
            <Image
              alt={item.name}
              className="object-cover rounded-xl min-h-72"
              src={item.image}
              fill
            />
          </div>
        </CardBody>
      ) : (
        <Skeleton className="rounded-lg">
          <div className="h-56 rounded-lg bg-default-300"></div>
        </Skeleton>
      )}

      <CardFooter className="p-4 flex-col items-start">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>

        <div className="flex justify-between items-center w-full">
          <p className="text-lg text-gray-400">
            {new Intl.NumberFormat("es-ES", {
              style: "currency",
              currency: "PEN",
              minimumFractionDigits: 2,
            }).format(item.price)}
          </p>

          {/* <Button
            variant="light"
            color="default"
            className="rounded-full"
            isIconOnly
          >
            <MdiCartOutline />
          </Button> */}
        </div>
      </CardFooter>
    </Card>
  </Link>
);
