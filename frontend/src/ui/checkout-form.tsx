"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCartStore } from "@/context";
import { FormField } from "@/components";
import { useGetProductDetails } from "@/hooks";
import { CustomerFormData, CustomerScheme } from "@/types/customer-form";
import { createCustomerMutation, createPurchaseMutation } from "@/providers";

const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;

const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

interface CheckoutFormModel {
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CheckoutForm: React.FC<CheckoutFormModel> = ({
  isSuccess,
  setIsSuccess,
}) => {
  const { clearCart } = useCartStore((state) => state);
  const { totalPrice, uniqueProducts } = useGetProductDetails();

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(CustomerScheme),
    defaultValues: {
      address: "",
      fullName: "",
      email: "",
      phone: "",
      reference: "",
      totalPurchase: +totalPrice,
    },
  });

  const onSubmit = async (data: CustomerFormData) => {
    try {
      await createCustomerMutation(
        {
          ...data,
          totalPurchase: totalPrice,
        },
        { strapiHost, strapiToken }
      )
        .then((customer) => {
          if (!customer.id) return;

          uniqueProducts.forEach(async (product) => {
            await createPurchaseMutation(
              {
                price: product.price,
                product: product.productName,
                quantity: product.quantity,
                totalPrice: +totalPrice,
                customerId: {
                  connect: [
                    {
                      id: customer.id,
                      documentId: customer.documentId,
                    },
                  ],
                },
              },
              { strapiHost, strapiToken }
            );
          });
        })
        .then(() => {
          clearCart();
          setIsSuccess(true);
        })
        .catch(() => {
          setIsSuccess(false);
        })
        .finally(() => {
          reset();
        });
    } catch (error) {
      setIsSuccess(false);
    }
  };

  const commonProps = {
    control,
    register,
    variant: "bordered",
    size: "lg",
    required: true,
  } as const;

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
            placeholder="987654321"
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

          <FormField
            type="number"
            label="Total"
            placeholder="100"
            labelPlacement="outside"
            name="totalPurchase"
            error={errors.totalPurchase}
            {...commonProps}
            required={false}
            isDisabled={true}
          />
        </div>

        <Button
          fullWidth
          color="primary"
          type="submit"
          className="mt-8"
          isDisabled={!isValid || !uniqueProducts.length}
        >
          Enviar
        </Button>
      </form>
    </>
  );
};
