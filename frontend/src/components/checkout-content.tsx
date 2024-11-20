"use client";

import * as React from "react";

import { BuySuccess } from "./buy-success";
import { CheckoutForm, DetailsTable } from "@/ui";

export const CheckoutContent: React.FC = () => {
  const [isSuccess, setIsSuccess] = React.useState(false);

  if (isSuccess)
    return (
      <div className="flex justify-center items-center">
        <BuySuccess />
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
      <div className="col-span-1">
        <DetailsTable />
      </div>

      <div className="rounded-xl p-6 col-span-1 bg-white">
        <CheckoutForm isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
      </div>
    </div>
  );
};
