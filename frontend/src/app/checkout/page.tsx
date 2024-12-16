import * as React from "react";
import type { Metadata } from "next";

import { CheckoutContent } from "@/components";

export const metadata: Metadata = {
  title: "Confirmar compra",
  description: "Formulario de compra",
};

const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export default function CheckoutPage() {
  return (
    <main className="max-w-screen-lg container mx-auto px-4 my-[75px] pb-[75px]">
      <CheckoutContent
        strapiHost={STRAPI_HOST ?? ""}
        strapiToken={STRAPI_TOKEN ?? ""}
      />
    </main>
  );
}
