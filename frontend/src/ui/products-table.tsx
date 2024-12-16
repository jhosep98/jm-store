"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
import { APP_ROUTES } from "@/lib/constants";

interface ProductsTableModel {
  strapiHost: string;
}

export const ProductsTable: React.FC<ProductsTableModel> = ({ strapiHost }) => {
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
            href={APP_ROUTES.CHECKOUT}
          >
            Ir a pagar
          </Button>
        </div>
      </div>

      <Table isStriped shadow="none" aria-label="Products List table">
        <TableHeader>
          <TableColumn className="text-medium">Producto</TableColumn>
          <TableColumn className="text-medium">Cantidad</TableColumn>
          <TableColumn className="text-medium">Precio</TableColumn>
        </TableHeader>

        <TableBody>
          {uniqueProducts.map((item) => {
            const total = item.quantity * (item?.data?.price ?? 0);

            return (
              <TableRow key={item?.data?.documentId}>
                <TableCell>
                  <Link
                    href={`/${item?.data?.category.slug}/${item?.data?.slug}`}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={`${strapiHost}/${item?.data?.images[3].url}`}
                      alt={item?.data?.productName ?? ""}
                      className="w-10 h-10 rounded-full"
                      width={100}
                      height={100}
                    />

                    <span className="text-medium">
                      {item?.data?.productName}
                    </span>
                  </Link>
                </TableCell>

                <TableCell>
                  <div className="relative flex items-center gap-2">
                    <span className="text-medium">{item.quantity}</span>
                  </div>
                </TableCell>

                <TableCell>
                  {" "}
                  <span className="text-medium"></span>
                  {new Intl.NumberFormat("es-ES", {
                    style: "currency",
                    currency: "PEN",
                    minimumFractionDigits: 2,
                  }).format(total)}
                </TableCell>
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
