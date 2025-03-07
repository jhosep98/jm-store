import * as React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";

import { APP_ROUTES } from "@/lib/constants";
import { MaterialSymbolsLightFavoriteOutline } from "@/lib/icons-name";

export const FavoriteProducts: React.FC = () => {
  return (
    <Button
      as={Link}
      href={APP_ROUTES.FAVORITES}
      isIconOnly
      variant="light"
      aria-label="favorites products"
      className="rounded-full"
    >
      <MaterialSymbolsLightFavoriteOutline className="text-foreground" />
    </Button>
  );
};
