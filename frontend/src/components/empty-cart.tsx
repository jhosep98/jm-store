import * as React from "react";

import { LineMdEmojiFrown } from "@/lib/icons-name";

export const EmptyCart: React.FC = () => {
  return (
    <div className="text-center w-fit mx-auto">
      <LineMdEmojiFrown fontSize={72} className="mx-auto" />
      <h2 className="font-bold text-xl mt-4">Your cart is empty</h2>
      <p className="text-gray-400">You can add items to your cart from the home page or from the product page.</p>
    </div>
  );
};
