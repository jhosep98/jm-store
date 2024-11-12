import * as React from "react";
import type { Metadata } from "next";

import { CheckoutForm, DetailsTable } from "@/ui";

export const metadata: Metadata = {
  title: "Confirmar compra",
  description: "Formulario de compra",
};

export default function CheckoutPage() {
  return (
    <main className="max-w-screen-lg container mx-auto px-4 my-[75px] pb-[75px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="col-span-1">
          <p className="mb-2 font-bold">Detalle de la compra:</p>
          <DetailsTable />

          <div className="flex justify-end rounded-lg bg-default-100 p-2 mt-4">
            <p className="text-lg font-bold">Total: $0</p>
          </div>
        </div>

        <div className="rounded-xl border-2 border-gray-100 p-6 col-span-1">
          <CheckoutForm />
        </div>
      </div>
    </main>
  );
}
