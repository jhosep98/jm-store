"use client";

import * as React from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCartStore } from "@/context";
import { FormField } from "@/components";
import { useGetProductDetails } from "@/hooks";
import { DEFAULT_NOTIFY_MESSAGES } from "@/lib/constants";
import { CustomerFormData, CustomerScheme } from "@/types/customer-form";
import { createCustomerMutation, createPurchaseMutation } from "@/providers";

interface CheckoutFormModel {
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  strapiHost: string;
  strapiToken: string;
}

export const CheckoutForm: React.FC<CheckoutFormModel> = ({
  setIsSuccess,
  strapiHost,
  strapiToken,
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
      // Step 1: Create the customer
      const customer = await createCustomerMutation(
        {
          ...data,
          totalPurchase: totalPrice,
        },
        {
          strapiHost,
          strapiToken,
        }
      );

      if (!customer?.id) {
        toast.error(DEFAULT_NOTIFY_MESSAGES.error_customer);
      }

      // Step 2: Create purchases for all unique products
      const purchasePromises = uniqueProducts.map((product) =>
        createPurchaseMutation(
          {
            price: product?.price ?? 0,
            product: product?.productName ?? "",
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
          {
            strapiHost,
            strapiToken,
          }
        )
      );

      await Promise.all(purchasePromises);

      // Step 3: Clear the cart and reset form state
      clearCart();
      setIsSuccess(true);
      toast.success(DEFAULT_NOTIFY_MESSAGES.success_purchase);
    } catch (error) {
      toast.error(DEFAULT_NOTIFY_MESSAGES.error_purchase);
      setIsSuccess(false);
      throw new Error(`Error al crear la compra: ${error}`);
    } finally {
      // Always reset the form
      reset();
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
