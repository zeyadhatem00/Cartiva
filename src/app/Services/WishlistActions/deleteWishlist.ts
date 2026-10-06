"use server";
import { getToken } from "../GetMyToken";

export async function DeleteAWishlist(id: string) {
  const token = await getToken();

  let req = await fetch(`${process.env.Base_URL}wishlist/${id}`, {
    method: "DELETE",
    headers: {
      token: `${token ? token : ""}`,
    },
  });

  let res = await req.json();

  return res;
}
