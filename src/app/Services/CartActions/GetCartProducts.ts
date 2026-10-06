import { getToken } from "../GetMyToken";
import { cart } from "@/app/interface/cart";

export async function GetCartProducts(): Promise<cart> {
  const token = await getToken();

  let req = await fetch(`${process.env.Base_URL}cart`, {
    headers: {
      "content-type": "application/json",
      token: `${token ? token : ""}`,
    },
  });

  let res = await req.json();

  return res;
}
