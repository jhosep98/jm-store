import { query } from "@/lib/strapi";
import { APIProduct } from "@/types";

export async function findOneProductQuery(productId: string) {
  try {
    const res = await query<APIProduct>(`products/${productId}?populate=*`);

    return res;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
