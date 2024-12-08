const { STRAPI_TOKEN, STRAPI_HOST } = process.env;

export async function query<T>(path: string): Promise<T> {
  try {
    const res = await fetch(`${STRAPI_HOST}/api/${path}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function mutation<T>(
  path: string,
  dataDto: T,
  {
    strapiHost,
    strapiToken,
  }: { strapiHost?: string; strapiToken?: string } = {}
) {
  try {
    const res = await fetch(`${STRAPI_HOST ?? strapiHost}/api/${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN ?? strapiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { ...dataDto } }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
