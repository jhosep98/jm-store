"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import { MdiCartOutline } from "@/lib/icons-name";
import { parseTitleToURL } from "@/lib/parse-title-to-url";

const MOCK_DATA = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    category: "men",
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80",
    category: "women",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "men",
  },
] as const;

export const RowCard: React.FC = () => (
  <section>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {MOCK_DATA.map((item) => (
        <Link href={`/${item.category}/${parseTitleToURL(item.name)}`}  key={item.id}>
          <Card>
            {item.image ? (
              <CardBody>
                <div className="relative min-h-56">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl min-h-56"
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

                <Button
                  variant="light"
                  color="default"
                  className="rounded-full"
                  isIconOnly
                >
                  <MdiCartOutline />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  </section>
);
