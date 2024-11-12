import * as React from "react";
import type { Metadata } from "next";

import { ProductsTable } from "@/ui";
// import { EmptyCart } from "@/components";

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart",
};

export default function CartPage() {
  return (
    <main className="max-w-screen-lg container mx-auto px-4 py-[75px] my-[75px]">
      {/* <EmptyCart /> */}

      <ProductsTable />
    </main>
  );
}
