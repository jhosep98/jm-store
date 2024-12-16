"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";

import { useCartStore } from "@/context";
import { APP_ROUTES } from "@/lib/constants";
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
          href={APP_ROUTES.CART}
          isIconOnly
          variant="light"
          aria-label="cart"
          className="rounded-full"
        >
          <MdiCartOutline className="text-foreground" />
        </Button>
      </Badge>
    </NavbarItem>
  );
};
