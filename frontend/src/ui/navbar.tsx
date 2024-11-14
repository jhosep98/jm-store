import * as React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";

import { Cart } from "@/components";

export const MainNavbar: React.FC = () => (
  <Navbar isBordered maxWidth="lg" className="[&>header]:px-4">
    <Link href="/">
      <NavbarBrand>
        <p className="font-bold text-xl uppercase text-inherit">JM-Store</p>
      </NavbarBrand>
    </Link>

    <NavbarContent justify="end">
      {/* <Link href="/cart"> */}
        <Cart />
      {/* </Link> */}
    </NavbarContent>
  </Navbar>
);
