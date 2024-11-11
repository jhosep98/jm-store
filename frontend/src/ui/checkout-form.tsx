import * as React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export const CheckoutForm: React.FC = () => {
  return (
    <form className="max-w-96 mx-auto">
      <div className="flex flex-col gap-6">
        <Input
          type="text"
          label="Nombre y apellido"
          placeholder="John Doe"
          labelPlacement="outside"
        />

        <Input
          type="email"
          label="Correo electrónico"
          placeholder="you@example.com"
          labelPlacement="outside"
        />

        <Input
          type="tel"
          label="Celular"
          placeholder="+51 987654321"
          labelPlacement="outside"
        />

        <Input
          type="text"
          label="Dirección"
          placeholder="Mz A, Primera de Pro, Los Olivos"
          labelPlacement="outside"
        />

        <Input
          type="text"
          label="Referencia"
          placeholder="Entre Avenida de la República y Av. los Próceres"
          labelPlacement="outside"
        />
      </div>

      <Button fullWidth color="primary" className="mt-8">
        Enviar
      </Button>
    </form>
  );
};
