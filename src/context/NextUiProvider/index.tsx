"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

export const NextUiProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => <NextUIProvider>{children}</NextUIProvider>;
