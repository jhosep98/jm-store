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

import {
  FluentSubtract12Regular,
  LetsIconsAddRound,
  MaterialSymbolsDeleteOutline,
  SiWalletLine,
} from "@/lib/icons-name";

export const ProductsTable: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between p-4">
        <h2 className="text-3xl font-bold mb-8 text-left">Your products</h2>

        <div>
          <Button
            variant="flat"
            color="danger"
            className="mr-2"
            endContent={<MaterialSymbolsDeleteOutline fontSize={20} />}
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

      <Table removeWrapper aria-label="Products List table">
        <TableHeader>
          <TableColumn>Producto</TableColumn>
          <TableColumn>Cantidad</TableColumn>
          <TableColumn>Precio</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>
              <div className="relative flex items-center gap-2">
                <Button
                  isIconOnly
                  variant="light"
                  color="default"
                  size="sm"
                  className="rounded-full"
                >
                  <FluentSubtract12Regular fontSize={16} />
                </Button>{" "}
                <span className="text-lg">0</span>
                <Button
                  isIconOnly
                  variant="light"
                  color="default"
                  size="sm"
                  className="rounded-full"
                >
                  <LetsIconsAddRound fontSize={16} />
                </Button>
              </div>
            </TableCell>
            <TableCell>$20</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>
              <div className="relative flex items-center gap-2">
                <Button
                  isIconOnly
                  variant="light"
                  color="default"
                  size="sm"
                  className="rounded-full"
                >
                  <FluentSubtract12Regular fontSize={16} />
                </Button>{" "}
                <span className="text-lg">0</span>
                <Button
                  isIconOnly
                  variant="light"
                  color="default"
                  size="sm"
                  className="rounded-full"
                >
                  <LetsIconsAddRound fontSize={16} />
                </Button>
              </div>
            </TableCell>
            <TableCell>$40</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-end rounded-lg bg-default-100 p-4 mt-4">
        <p className="text-xl font-bold">Total: $0</p>
      </div>
    </div>
  );
};
