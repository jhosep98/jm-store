const { STRAPI_TOKEN, STRAPI_HOST } = process.env;

export async function query(path: string) {
  const res = await fetch(`${STRAPI_HOST}/api/${path}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });

  return await res.json();
}
