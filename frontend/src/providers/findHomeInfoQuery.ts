import { query } from "@/lib/strapi";
import { APIHomeInfo } from "@/types/generated/home-info.interface";

const { STRAPI_HOST } = process.env;

export async function findHomeInfoQuery() {
  try {
    const res = await query<APIHomeInfo>("home?populate=cover");

    const { title, description, cover, firstSubtitle } = res.data;

    const images = cover.map(
      (img: { url: string }) => `${STRAPI_HOST}/${img.url}`
    );

    return { title, description, images, firstSubtitle };
  } catch (error) {
    throw new Error(`${error}`);
  }
}
