import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/react";

import "./globals.css";
import { MainFooter, MainNavbar } from "@/ui";
import { CartStoreProvider } from "@/context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

function AppProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <CartStoreProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </CartStoreProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProviders>
          <div className="flex flex-col min-h-screen">
            <MainNavbar />

            <div className="flex-1">{children}</div>

            <MainFooter />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
