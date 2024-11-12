import * as React from "react";
import { Input } from "@nextui-org/input";
import { Controller } from "react-hook-form";

import { CustomerFormFieldProps } from "@/types/customer-form";

export const FormField: React.FC<CustomerFormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  control,
  valueAsNumber,
  ...rest
}) => (
  <div className="form-field">
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          {...field}
          {...rest}
          type={type}
          placeholder={placeholder}
          name={name}
          register={register}
          valueAsNumber={valueAsNumber}
        />
      )}
    />

    {error && <span className="text-sm text-red-500">{error.message}</span>}
  </div>
);
