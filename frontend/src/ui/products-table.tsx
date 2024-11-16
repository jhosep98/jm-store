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
import { MaterialSymbolsDeleteOutline, SiWalletLine } from "@/lib/icons-name";

export const ProductsTable: React.FC = () => {
  const { cart, clearCart, addToCart, removeFromCart } = useCartStore(
    (state) => state
  );

  const handleClearCart = () => {
    clearCart();
  };

  const removeRepeatedProducts = React.useCallback((products: any[]) => {
    const countProduct = (id: string) => {
      return products.filter((product) => product.id === id).length;
    };

    const uniqueProducts = [...new Set(products.map((product) => product.id))];

    return uniqueProducts.map((id) => {
      const count = countProduct(id);

      return {
        ...products.find((product) => product.id === id),
        quantity: count,
      };
    });
  }, []);

  const uniqueProducts = removeRepeatedProducts(cart);

  const totalPrice = uniqueProducts.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

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

      <Table removeWrapper aria-label="Products List table">
        <TableHeader>
          <TableColumn>Producto</TableColumn>
          <TableColumn>Cantidad</TableColumn>
          <TableColumn>Precio</TableColumn>
        </TableHeader>
        <TableBody>
          {uniqueProducts.map((item) => {
            console.log(
              "!!URL: ",
              `${process.env.NEXT_PUBLIC_STRAPI_HOST}/${item.images[0].url}`
            );

            return (
              <TableRow key={item.documentId}>
                <TableCell>
                  <Link
                    href={`/product/${item.id}`}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}/${item.images[2].url}`}
                      alt={item.productName}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{item.productName}</span>
                  </Link>
                </TableCell>

                <TableCell>
                  <div className="relative flex items-center gap-2">
                    <span className="text-lg">{item.quantity}</span>
                  </div>
                </TableCell>

                <TableCell>${item.price}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="flex justify-end rounded-lg bg-default-100 p-4 mt-4">
        <p className="text-xl font-bold">Total: ${totalPrice}</p>
      </div>
    </div>
  );
};
