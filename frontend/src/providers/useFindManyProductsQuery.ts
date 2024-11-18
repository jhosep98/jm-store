import { query } from "@/lib/strapi";

export async function useFindManyProductsQuery() {
  try {
    const res = await query("products?populate=*");

    return res.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
