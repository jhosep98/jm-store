import * as React from "react";
import type { Metadata } from "next";

import { CartContainer } from "@/ui";

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart",
};

export default async function CartPage() {
  return (
    <main className="max-w-screen-lg container mx-auto px-4 py-[35px] my-[35px] sm:py-[45px] sm:my-[45px]">
      <CartContainer />
    </main>
  );
}
