import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export async function getHomeInfo() {
  const res = await query("home?populate=cover");

  const { title, description, cover, firstSubtitle } = res.data;

  const images = cover.map((img: any) => `${STRAPI_HOST}/${img.url}`);

  return { title, description, images, firstSubtitle };
}
