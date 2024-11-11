import * as React from "react";
import type { Metadata } from "next";

import { CheckoutForm } from "@/ui";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout",
};

export default function CheckoutPage() {
  return (
    <main className="max-w-screen-lg container mx-auto px-4 py-[75px] my-[75px]">
      <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>

      <CheckoutForm />
    </main>
  );
}
