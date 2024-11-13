"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";

import { useCartStore } from "@/hooks";
import { MdiCartOutline } from "@/lib/icons-name";

export const Cart: React.FC = () => {
  const products = useCartStore((state) => state.cart);

  return (
    <Link href="/cart">
      <NavbarItem>
        <Badge color="primary" content={products.length} shape="circle">
          <Button
            isIconOnly
            variant="light"
            aria-label="cart"
            className="rounded-full"
          >
            <MdiCartOutline />
          </Button>
        </Badge>
      </NavbarItem>
    </Link>
  );
};
