import * as React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";

import { MaterialSymbolsLightFavoriteOutline } from "@/lib/icons-name";

export const FavoriteProducts: React.FC = () => {
  return (
    <NavbarItem>
      <Button
        as={Link}
        href="/favorites"
        isIconOnly
        variant="light"
        aria-label="cart"
        className="rounded-full"
      >
        <MaterialSymbolsLightFavoriteOutline className="text-foreground" />
      </Button>
    </NavbarItem>
  );
};
