"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

import { useCartStore } from "@/context";
import { useGetProductDetails } from "@/hooks";
import { MaterialSymbolsDeleteOutline, SiWalletLine } from "@/lib/icons-name";
import Image from "next/image";

export const ProductsTable: React.FC = () => {
  const { clearCart } = useCartStore((state) => state);
  const { totalPrice, uniqueProducts } = useGetProductDetails();

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <div className="flex justify-between gap-4 p-4">
        <h2 className="text-3xl font-bold mb-8 text-left">Tus productos</h2>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            variant="flat"
            color="danger"
            className="mr-2"
            endContent={<MaterialSymbolsDeleteOutline fontSize={20} />}
            onClick={handleClearCart}
          >
            Limpiar carrito
          </Button>

          <Button
            as={Link}
            variant="flat"
            color="primary"
            endContent={<SiWalletLine fontSize={20} />}
            href="/checkout"
          >
            Ir a pagar
          </Button>
        </div>
      </div>

      <Table isStriped shadow="none" aria-label="Products List table">
        <TableHeader>
          <TableColumn className="text-sm">Producto</TableColumn>
          <TableColumn className="text-sm">Cantidad</TableColumn>
          <TableColumn className="text-sm">Precio</TableColumn>
        </TableHeader>

        <TableBody>
          {uniqueProducts.map((item) => {
            const total = item.quantity * item.price;

            return (
              <TableRow key={item.documentId}>
                <TableCell>
                  <Link
                    href={`/${item.category.slug}/${item.slug}`}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}/${item.images[2].url}`}
                      alt={item.productName}
                      className="w-10 h-10 rounded-full"
                      width={100}
                      height={100}
                    />

                    <span>{item.productName}</span>
                  </Link>
                </TableCell>

                <TableCell>
                  <div className="relative flex items-center gap-2">
                    <span className="">{item.quantity}</span>
                  </div>
                </TableCell>

                <TableCell>${total}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="flex justify-end rounded-lg bg-default-100 p-4 mt-4">
        <p className="text-xl font-bold">
          Total:{" "}
          {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "PEN",
            minimumFractionDigits: 2,
          }).format(totalPrice)}
        </p>
      </div>
    </div>
  );
};
