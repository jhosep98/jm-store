import * as React from "react";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

import { WhatsAppFab } from "@/components/whatsapp-fab";
import { JmStoreLogo, MdiFacebook, MdiInstagram } from "@/lib/icons-name";

export const MainFooter: React.FC = () => (
  <footer className="text-foreground border-t border-divider">
    <div className="max-w-screen-lg container mx-auto px-4 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-3">
          <Link
            href="/"
            className="flex items-center text-xl w-fit"
            aria-label="Home"
          >
            <JmStoreLogo width="80.000000pt" height="80.000000pt" />
          </Link>

          <p className="text-muted-foreground mb-4 text-base max-w-[40ch]">
            Descubrí productos increíbles y recibilos en la puerta de tu casa.
            ¡Compra online y disfrutá la comodidad!
          </p>

          <div className="flex space-x-2 mt-4 sm:mt-0">
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

        <div>
          <h3 className="font-semibold text-lg mb-4">Contáctanos</h3>
          <ul className="space-y-2">
            <li>123 Avancay</li>
            <li>Lima, Lima</li>
            <li>
              <Link href="mailto:team@jmdevstudio.com">
                Email: team@jmdevstudio.com
              </Link>
            </li>
            <li>
              <Link href="tel:+51907931948">Phone: (+51) 907 931 948</Link>
            </li>
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
        </div>
      </div>
    </div>
  </footer>
);
