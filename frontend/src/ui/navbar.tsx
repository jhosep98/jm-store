import * as React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";

import { Cart } from "@/components";
import { JmStoreLogo } from "@/lib/icons-name";

export const MainNavbar: React.FC = () => (
  <Navbar isBordered maxWidth="lg" className="[&>header]:px-4">
    <Link href="/" aria-label="Home">
      <NavbarBrand>
        <JmStoreLogo width="60.000000pt" height="60.000000pt" />
      </NavbarBrand>
    </Link>

    <NavbarContent justify="end">
      <Cart />
    </NavbarContent>
  </Navbar>
);
