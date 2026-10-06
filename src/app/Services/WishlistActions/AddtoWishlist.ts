"use server";
import { getToken } from "../GetMyToken";

export async function AddAWishlist(id: string) {
  const token = await getToken();

  let req = await fetch(`${process.env.Base_URL}wishlist`, {
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
