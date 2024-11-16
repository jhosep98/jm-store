import * as React from "react";

import { LineMdEmojiFrown } from "@/lib/icons-name";

export const EmptyCart: React.FC = () => {
  return (
    <div className="text-center w-fit mx-auto">
      <LineMdEmojiFrown fontSize={72} className="mx-auto" />
      <h2 className="font-bold text-xl mt-4">Su carrito está vacío</h2>
      <p className="text-gray-400">
        Puede añadir artículos a su carrito desde la página de inicio o desde la
        página de productos.
      </p>
    </div>
  );
};
