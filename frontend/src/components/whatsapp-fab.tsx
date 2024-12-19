"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

import { MdiWhatsapp } from "@/lib/icons-name";

export const WhatsAppFab: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Popover placement="left-end" isOpen={isOpen} showArrow>
      <PopoverTrigger onMouseEnter={handleOpen} onMouseLeave={handleClose}>
        <div className="fixed bottom-4 right-4 z-20">
          <Button
            size="lg"
            isIconOnly
            variant="light"
            as={Link}
            className="rounded-full shadow-lg hover:bg-gray-50 focus:outline-none animate-bounce"
            target="_blank"
            aria-label="contáctanos por Whatsapp"
            href="https://api.whatsapp.com/send?phone=51907931948&text=Hola,%20deseo%20hacer%20una%20consulta.%20%C2%BFPodr%C3%ADas%20ayudarme%3F"
          >
            <MdiWhatsapp color="#25d366" width={28} height={28} />
          </Button>
        </div>
      </PopoverTrigger>

      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">¿Nececitas ayuda?</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
