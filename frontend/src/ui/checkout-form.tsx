"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { BuySuccess, FormField } from "@/components";
import { CustomerFormData, CustomerScheme } from "@/types/customer-form";

export const CheckoutForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(CustomerScheme),
    defaultValues: {},
  });

  const onSubmit = async (data: CustomerFormData) => {
    console.log(data);
    console.log(errors);
  };

  const commonProps = {
    control,
    register,
    variant: "bordered",
    size: "lg",
    required: true,
  } as const;

  const isSuccess = false;

  if (isSuccess) {
    return <BuySuccess />;
  }

  return (
    <>
      <h3 className="text-3xl font-bold mb-8 text-center">Confirmar Compra</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <FormField
            type="text"
            label="Nombre y apellido"
            placeholder="John Doe"
            labelPlacement="outside"
            name="fullName"
            error={errors.fullName}
            {...commonProps}
          />

          <FormField
            type="email"
            label="Correo electrónico"
            placeholder="john.doe@gmail.com"
            labelPlacement="outside"
            name="email"
            error={errors.email}
            {...commonProps}
          />

          <FormField
            type="tel"
            label="Celular"
            placeholder="+51 987654321"
            labelPlacement="outside"
            name="phone"
            error={errors.phone}
            {...commonProps}
          />

          <FormField
            type="text"
            label="Dirección"
            placeholder="Mz A, Primera de Pro, Los Olivos"
            labelPlacement="outside"
            name="address"
            error={errors.address}
            {...commonProps}
          />

          <FormField
            type="text"
            label="Referencia"
            placeholder="Entre Avenida de la República y Av. los Próceres"
            labelPlacement="outside"
            name="reference"
            error={errors.reference}
            {...commonProps}
          />
        </div>

        <Button
          fullWidth
          color="primary"
          type="submit"
          className="mt-8"
          isDisabled={!isValid}
        >
          Enviar
        </Button>
      </form>
    </>
  );
};
