import { query } from "@/lib/strapi";

export async function useFindOneProductQuery(productId: string) {
  try {
    const res = await query(`products/${productId}?populate=*`);

    return res.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
