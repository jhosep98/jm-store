const { STRAPI_TOKEN, STRAPI_HOST } = process.env;

export async function query(path: string) {
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

export async function mutation<T>(path: string, dataDto: T) {
  try {
    const res = await fetch(`${STRAPI_HOST}/api/${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataDto),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
