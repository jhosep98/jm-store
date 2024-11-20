import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";

import { Cart } from "@/components";

export const MainNavbar: React.FC = () => (
  <Navbar isBordered maxWidth="lg" className="[&>header]:px-4">
    <Link href="/">
      <NavbarBrand>
        <Image src="/vercel.svg" alt="JM Store" width={42} height={42} />
        <span className="ml-2 text-lg font-bold foreground">JM Store</span>
      </NavbarBrand>
    </Link>

    <NavbarContent justify="end">
      <Cart />
    </NavbarContent>
  </Navbar>
);
