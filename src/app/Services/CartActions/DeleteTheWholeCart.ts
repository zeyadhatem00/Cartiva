"use server";
import { getToken } from "../GetMyToken";

export async function DeleteTheWholeCart() {
  const token = await getToken();

  let req = await fetch(`${process.env.Base_URL}cart`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      token: `${token ? token : ""}`,
    },
  });

  let res = await req.json();

  return res;
}
