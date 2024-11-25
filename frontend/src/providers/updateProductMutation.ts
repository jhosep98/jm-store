import { mutation } from "@/lib/strapi";
import { ProductModel } from "@/types/product";

export async function updateProductMutation(
  product: Partial<ProductModel>,
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
