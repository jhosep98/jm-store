import { query } from "@/lib/strapi";
import { APIHomeSeo } from "@/types/generated/home-seo.interface";

const { STRAPI_HOST } = process.env;

export async function findHomeSeoQuery() {
  try {
    const res = await query<APIHomeSeo>(
      "global?populate[0]=defaultSeo&populate[1]=defaultSeo.shareImage"
    );

    const { siteName, siteDescription, defaultSeo } = res.data;

    const image = `${STRAPI_HOST}/${defaultSeo.shareImage.url}`;

    return { siteName, siteDescription, defaultSeo, image };
  } catch (error) {
    throw new Error(`${error}`);
  }
}
