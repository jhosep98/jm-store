import * as React from "react";

import { LineMdEmojiFrown } from "@/lib/icons-name";

interface EmptyCartModel {
  title?: string;
  description?: string;
}

export const EmptyCart: React.FC<EmptyCartModel> = ({ title, description }) => {
  return (
    <div className="text-center w-fit mx-auto">
      <LineMdEmojiFrown fontSize={72} className="mx-auto" />
      <h2 className="font-bold text-xl mt-4">
        {title ?? "Tu carrito está vacío"}
      </h2>
      <p className="text-gray-400">
        {description ??
          "Puede añadir artículos a su carrito desde la página de inicio o desde la página de productos."}
      </p>
    </div>
  );
};
