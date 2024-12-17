"use client";

import { Toaster } from "sonner";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { CartStoreProvider } from "./cart-store-provider";
import { FavoritesStoreProvider } from "./favorites-store-provider";

export function AppProviders({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <CartStoreProvider>
      <FavoritesStoreProvider>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            {children}
          </NextThemesProvider>
        </NextUIProvider>

        <Toaster
          position="top-right"
          toastOptions={{
            unstyled: true,
            classNames: {
              success:
                "flex items-center flex-grow flex-row w-full gap-2 py-3 px-4 gap-x-1 rounded-medium items-start text-success-700 dark:text-success bg-success-50 dark:bg-success-50/50",
              error:
                "flex flex-grow flex-row w-full py-3 px-4 gap-x-1 rounded-medium items-start text-danger-600 dark:text-danger-500 bg-danger-50 dark:bg-danger-50/50",
              warning:
                "flex flex-grow flex-row w-full py-3 px-4 gap-x-1 rounded-medium items-start text-warning-700 dark:text-warning bg-warning-50 dark:bg-warning-50/50",
              info: "flex flex-grow flex-row w-full py-3 px-4 gap-x-1 rounded-medium items-start text-primary-600 bg-primary-50 dark:bg-primary-50/50",
            },
          }}
        />
      </FavoritesStoreProvider>
    </CartStoreProvider>
  );
}
