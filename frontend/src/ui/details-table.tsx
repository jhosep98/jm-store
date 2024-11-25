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

import { EmptyCart } from "@/components";
import { useGetProductDetails } from "@/hooks";

export const DetailsTable: React.FC = () => {
  const { totalPrice, uniqueProducts } = useGetProductDetails();

  if (uniqueProducts.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <p className="mb-4 font-bold text-large">Detalle de la compra:</p>

      <Table
        aria-label="Products List table"
        className="shadow-none"
        isStriped
        shadow="none"
      >
        <TableHeader>
          <TableColumn className="text-medium">Producto</TableColumn>
          <TableColumn className="text-medium">Cantidad</TableColumn>
          <TableColumn className="text-medium">Precio</TableColumn>
        </TableHeader>

        <TableBody>
          {uniqueProducts.map((item) => {
            const total = item.quantity * item.price;

            return (
              <TableRow key={item.documentId}>
                <TableCell>
                  <span className="text-medium">{item.productName}</span>
                </TableCell>

                <TableCell>
                  <span className="text-medium">{item.quantity}</span>
                </TableCell>

                <TableCell>
                  <span className="text-medium">
                    {new Intl.NumberFormat("es-ES", {
                      style: "currency",
                      currency: "PEN",
                      minimumFractionDigits: 2,
                    }).format(total)}
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="flex justify-end rounded-lg bg-default-100 p-2 mt-4">
        <p className="text-lg font-bold">
          Total:{" "}
          {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "PEN",
            minimumFractionDigits: 2,
          }).format(totalPrice)}
        </p>
      </div>
    </>
  );
};
