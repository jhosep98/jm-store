import * as React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";

import { Cart } from "@/components";
import { APP_ROUTES } from "@/lib/constants";
import { JmStoreLogo } from "@/lib/icons-name";
import { ThemeSwitcher } from "./theme-switcher";
import { FavoriteProducts } from "@/components/favorite-products";

export const MainNavbar: React.FC = () => (
  <Navbar
    isBordered
    maxWidth="lg"
    className="[&>header]:px-4 [&>header]:justify-between [&>header]:items-center top-0"
    shouldHideOnScroll
  >
    <NavbarBrand>
      <Link href={APP_ROUTES.HOME} aria-label="Home">
        <JmStoreLogo width="60.000000pt" height="60.000000pt" />
      </Link>
    </NavbarBrand>

    {/* <NavbarContent className="hidden sm:flex gap-4 flex-1" justify="center">
      <NavbarItem>
        <Link href={APP_ROUTES.HOME} className="hover:underline">
          Inicio
        </Link>
      </NavbarItem>

      <NavbarItem>
        <Link href={APP_ROUTES.CATEGORIES} className="hover:underline">
          Categorías
        </Link>
      </NavbarItem>

      <NavbarItem>
        <Link href={APP_ROUTES.STORE} className="hover:underline">
          Tienda
        </Link>
      </NavbarItem>
    </NavbarContent> */}

    <NavbarContent justify="end" className="w-fit">
      <FavoriteProducts />

      <ThemeSwitcher />

      <Cart />
    </NavbarContent>
  </Navbar>
);
