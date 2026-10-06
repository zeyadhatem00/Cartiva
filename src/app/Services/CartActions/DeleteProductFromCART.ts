"use server";
import { getToken } from "../GetMyToken";

export async function DeleteProductFromCART(id: string) {
  const token = await getToken();

  let req = await fetch(`${process.env.Base_URL}cart/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      token: `${token ? token : ""}`,
    },
  });

  let res = await req.json();

  return res;
}
