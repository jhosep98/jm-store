"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";

import { useCartStore } from "@/context";
import { APP_ROUTES } from "@/lib/constants";
import { MdiLightCart } from "@/lib/icons-name";

export const Cart: React.FC = () => {
  const { cart } = useCartStore((state) => state);

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="flex rounded-full w-6 h-6" />;

  return (
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
        <MdiLightCart className="text-foreground" />
      </Button>
    </Badge>
  );
};
