import { query } from "../lib/strapi";

export async function findManyProductsQuery() {
  const res = await query("products?populate=*");

  return res.data;
}
