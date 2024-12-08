import { APIProduct } from "@/types";
import { mutation } from "@/lib/strapi";

export async function updateProductMutation(
  product: Partial<APIProduct>,
  {
    strapiHost,
    strapiToken,
  }: { strapiHost?: string; strapiToken?: string } = {}
) {
  try {
    const res = await mutation("products", product, {
      strapiHost,
      strapiToken,
    });

    return res.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
