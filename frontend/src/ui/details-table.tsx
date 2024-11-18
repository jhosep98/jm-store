"use client";

import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

import { useCartStore } from "@/context";
import { EmptyCart } from "@/components";
import { useGetProductDetails } from "@/hooks";

export const DetailsTable: React.FC = () => {
  const { cart } = useCartStore((state) => state);
  const { totalPrice, uniqueProducts } = useGetProductDetails();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <p className="mb-2 font-bold">Detalle de la compra:</p>

      <Table removeWrapper aria-label="Products List table">
        <TableHeader>
          <TableColumn>Producto</TableColumn>
          <TableColumn>Cantidad</TableColumn>
          <TableColumn>Precio</TableColumn>
        </TableHeader>
        <TableBody>
          {uniqueProducts.map((item) => {
            const total = item.quantity * item.price;

            return (
              <TableRow key={item.documentId}>
                <TableCell>
                  <span>{item.productName}</span>
                </TableCell>

                <TableCell>
                  <div className="relative flex items-center gap-2">
                    <span className="text-lg">{item.quantity}</span>
                  </div>
                </TableCell>

                <TableCell>${total}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="flex justify-end rounded-lg bg-default-100 p-2 mt-4">
        <p className="text-lg font-bold">Total: ${totalPrice}</p>
      </div>
    </>
  );
};
