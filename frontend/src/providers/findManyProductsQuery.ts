import { query } from "@/lib/strapi";
import { APIProductList } from "@/types/generated/product-list.interface";

export async function findManyProductsQuery() {
  try {
    const res = await query<APIProductList>("products?populate=*");

    return res;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
