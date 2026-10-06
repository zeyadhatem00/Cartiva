import { getToken } from "../GetMyToken";

export async function DeleteTheWholeCart() {
  const token = await getToken();

  let req = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      token: `${token ? token : ""}`,
    },
  });

  let res = await req.json();

  return res;
}
