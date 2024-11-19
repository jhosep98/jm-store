import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";

import { IonArrowBackOutline } from "@/lib/icons-name";

export const BuySuccess: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-8 px-8">
    <div className="flex flex-col items-center justify-center">
      <Image
        src="https://res.cloudinary.com/diusjfaoe/image/upload/v1731376704/jm-store/undraw_super_thank_axrjie.svg"
        alt="super thanks"
        width={320}
        height={220}
      />

      <p className="text-center text-xl font-bold mt-6">
        ¡Gracias por tu compra!
      </p>
      <p className="text-center text-md text-gray-500">
        Tu compra ha sido registrada con éxito, te contactaremos para completar la orden.
      </p>
    </div>

    <Button
      as={Link}
      variant="ghost"
      color="primary"
      className="mt-2 w-fit mx-auto"
      startContent={<IonArrowBackOutline fontSize={22} />}
      href="/"
    >
      Ir al inicio
    </Button>
  </div>
);
