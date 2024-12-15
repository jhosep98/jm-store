import * as React from "react";

import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import { EntypoLightUp } from "@/lib/icons-name";

export const ThemeSwitcher: React.FC = () => {
  return (
    <NavbarItem>
      <Button
        isIconOnly
        variant="light"
        aria-label="cart"
        className="rounded-full"
      >
        <EntypoLightUp className="text-foreground" />
      </Button>
    </NavbarItem>
  );
};
