import { getToken } from "../GetMyToken";

export async function Addtocart(id: string) {
  const token = await getToken();

  let req = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    method: "POST",
    body: JSON.stringify({
      productId: id,
    }),
    headers: {
      "content-type": "application/json",
      token: `${token ? token : ""}`,
    },
  });

  let res = await req.json();

  return res;
}
