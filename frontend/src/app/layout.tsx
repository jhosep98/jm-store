import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { NextUiProvider } from "@/context";
import { MainFooter, MainNavbar } from "@/ui";

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

export const metadata: Metadata = {
  title: "JM Store",
  description: "JM Store",
};

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
        <NextUiProvider>
          <MainNavbar />
          {children}

          <MainFooter />
        </NextUiProvider>
      </body>
    </html>
  );
}
