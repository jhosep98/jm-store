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

export const DetailsTable: React.FC = () => (
  <Table removeWrapper aria-label="Products List table">
    <TableHeader>
      <TableColumn>Producto</TableColumn>
      <TableColumn>Cantidad</TableColumn>
      <TableColumn>Precio</TableColumn>
    </TableHeader>
    <TableBody>
      <TableRow key="1">
        <TableCell>Esferas del dragón</TableCell>
        <TableCell>1</TableCell>
        <TableCell>$20</TableCell>
      </TableRow>
      <TableRow key="2">
        <TableCell>Esferas del dragón</TableCell>
        <TableCell>1</TableCell>
        <TableCell>$40</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
