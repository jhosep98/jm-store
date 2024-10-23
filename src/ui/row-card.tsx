"use client";

import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import { DEFAULT_ICONS_NAME } from "@/lib/icons-name";

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
];

export const RowCard: React.FC = () => (
  <section>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {MOCK_DATA.map((item) => (
        <Card key={item.id}>
          <CardBody>
            <div className="relative min-h-56">
              <Image
                alt="Card background"
                className="object-cover rounded-xl min-h-56"
                src={item.image}
                fill
              />

              <Button
                isIconOnly
                className="rounded-full absolute top-2 right-2 text-black"
                variant="shadow"
              >
                <Icon icon={DEFAULT_ICONS_NAME.cart} width={24} height={24} />
              </Button>
            </div>
          </CardBody>

          <CardFooter className="p-4 flex-col items-start">
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>

            <p className="text-lg text-gray-400">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  </section>
);
