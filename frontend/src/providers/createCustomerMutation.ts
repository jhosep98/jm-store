import { mutation } from "@/lib/strapi";
import { CustomerFormData } from "@/types/customer-form";

export async function createCustomerMutation(
  customer: CustomerFormData,
  {
    strapiHost,
    strapiToken,
  }: { strapiHost?: string; strapiToken?: string } = {}
) {
  try {
    const res = await mutation("customers", customer, {
      strapiHost,
      strapiToken,
    });

    return res.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
