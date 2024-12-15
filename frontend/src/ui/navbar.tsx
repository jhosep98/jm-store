import * as React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import { Cart } from "@/components";
import { JmStoreLogo } from "@/lib/icons-name";
import { FavoriteProducts } from "@/components/favorite-products";
import { ThemeSwitcher } from "./theme-switcher";

export const MainNavbar: React.FC = () => (
  <Navbar
    isBordered
    maxWidth="lg"
    className="[&>header]:px-4 [&>header]:justify-between [&>header]:items-center"
  >
    <NavbarBrand>
      <Link href="/" aria-label="Home">
        <JmStoreLogo width="60.000000pt" height="60.000000pt" />
      </Link>
    </NavbarBrand>

    <NavbarContent className="hidden sm:flex gap-4 flex-1" justify="center">
      <NavbarItem>
        <Link href="#" className="hover:underline">Inicio</Link>
      </NavbarItem>

      <NavbarItem>
        <Link href="#" className="hover:underline">Tienda</Link>
      </NavbarItem>
    </NavbarContent>

    <NavbarContent justify="end" className="w-fit">
      <FavoriteProducts />

      <ThemeSwitcher />

      <Cart />
    </NavbarContent>
  </Navbar>
);
