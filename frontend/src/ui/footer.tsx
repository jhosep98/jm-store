import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";

import { MdiFacebook, MdiInstagram, MdiWhatsapp } from "@/lib/icons-name";

export const MainFooter: React.FC = () => (
  <footer className="bg-white text-foreground border-t border-divider">
    <div className="max-w-screen-lg container mx-auto px-4 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-3">
          <Link href="/" className="flex items-center mb-2">
            <Image src="/vercel.svg" alt="JM Store" width={42} height={42} />
            <span className="ml-2 text-lg font-bold foreground">
              JM Store
            </span>
          </Link>

          <p className="text-muted-foreground mb-4 text-base max-w-[40ch]">
            Descubrí productos increíbles y recibilos en la puerta de tu casa.
            ¡Compra online y disfrutá la comodidad!
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contáctanos</h3>
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
            {new Date().getFullYear()} &copy; All rights reserved. By{" "}
            <Link
              href="https://www.jmdevstudio.com"
              target="_blank"
              className="font-bold hover:underline"
            >
              JMDevStudio
            </Link>
          </p>

          <div className="flex space-x-2 mt-4 sm:mt-0">
            <Link
              href="https://whatsapp.com"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
            >
              <MdiWhatsapp color="#25d366" />
              <span className="sr-only">Whatsapp</span>
            </Link>

            <Link
              href="https://facebook.com"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
            >
              <MdiFacebook color="#1877f2" />
              <span className="sr-only">Facebook</span>
            </Link>

            <Link
              href="https://instagram.com"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
            >
              <MdiInstagram color="#e1306c" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
