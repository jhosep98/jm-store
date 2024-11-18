import { mutation } from "@/lib/strapi";
import { PurchaseFormData } from "@/types/customer-form";

export async function createPurchaseMutation(
  purchase: PurchaseFormData,
  {
    strapiHost,
    strapiToken,
  }: { strapiHost?: string; strapiToken?: string } = {}
) {
  try {
    const res = await mutation("purchases", purchase, {
      strapiHost,
      strapiToken,
    });

    return res.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
