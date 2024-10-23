"use client";

import * as React from "react";

import { InitializerIcons } from "@/lib/icons-name";

InitializerIcons();

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};
