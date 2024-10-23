import * as React from "react";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

import { MdiFacebook, MdiInstagram } from "@/lib/icons-name";

export const MainFooter: React.FC = () => (
  <footer className="text-foreground bg-gray-50">
    <div className="max-w-screen-lg container mx-auto px-4 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-3">
          <Link href="/" className="flex items-center mb-4">
            <span className="text-2xl font-bold">JM Store</span>
          </Link>
          <p className="text-muted-foreground mb-4">
            Your company description goes here.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contactanos</h3>
          <ul className="space-y-2">
            <li>123 Main Street</li>
            <li>City, State 12345</li>
            <li>Email: contact@example.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
      </div>

      <Divider />

      <div className="pt-10 pb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {new Date().getFullYear()} &copy; All rights reserved. &#129505; by{" "}
            <a
              href="https://www.jmdevstudio.com"
              target="_blank"
              className="text-muted-foreground underline hover:text-foreground"
            >
              jmdevstudio
            </a>
            .
          </p>
          <div className="flex space-x-2 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <MdiFacebook />
              <span className="sr-only">Facebook</span>
            </Link>

            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <MdiInstagram />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
