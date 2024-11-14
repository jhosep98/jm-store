"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";

import { useCartStore } from "@/context";
import { MdiCartOutline } from "@/lib/icons-name";

export const Cart: React.FC = () => {
  const { cart } = useCartStore((state) => state);

  return (
    <NavbarItem>
      <Badge
        color="primary"
        isInvisible={cart.length === 0}
        content={cart.length}
        shape="circle"
      >
        <Button
          as={Link}
          href="/cart"
          isIconOnly
          variant="light"
          aria-label="cart"
          className="rounded-full"
        >
          <MdiCartOutline />
        </Button>
      </Badge>
    </NavbarItem>
  );
};
