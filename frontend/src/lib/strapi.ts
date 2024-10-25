const { STRAPI_TOKEN, STRAPI_HOST } = process.env;

export async function query(path: string) {
  try {
    const res = await fetch(`${STRAPI_HOST}/api/${path}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      cache: "no-cache",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
