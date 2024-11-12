import { z, ZodType } from "zod";
import { InputProps } from "@nextui-org/input";
import { Control, FieldError, UseFormRegister } from "react-hook-form";

export const CustomerScheme: ZodType<CustomerFormData> = z.object({
  fullName: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("El correo electrónico es inválido"),
  phone: z.string().min(10, "El teléfono es requerido"),
  address: z.string().min(2, "La dirección es requerida"),
  reference: z.string().min(2, "La referencia es requerida"),
});

export type CustomerFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  reference: string;
};

export interface CustomerFormFieldProps extends InputProps {
  name: ValidFieldNames;
  control: Control<CustomerFormData, any>;
  register: UseFormRegister<CustomerFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
}

export type ValidFieldNames =
  | "fullName"
  | "email"
  | "phone"
  | "address"
  | "reference";
