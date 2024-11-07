import * as React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import { MdiCartOutline } from "@/lib/icons-name";

export const MainNavbar: React.FC = () => (
  <Navbar isBordered maxWidth="lg" className="[&>header]:px-4">
    <Link href="/">
      <NavbarBrand>
        <p className="font-bold text-xl uppercase text-inherit">JM-Store</p>
      </NavbarBrand>
    </Link>

    <NavbarContent justify="end">
      <NavbarItem>
        <Button
          isIconOnly
          variant="light"
          aria-label="cart"
          className="rounded-full"
        >
          <MdiCartOutline />
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);
