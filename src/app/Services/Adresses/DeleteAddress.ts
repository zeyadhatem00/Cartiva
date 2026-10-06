import { getToken } from "../GetMyToken";
import { Address } from "./../../interface/Address";

export async function DeleteAdress(id:string): Promise<Address> {
  const token = await getToken();

  let req = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${id}`, {
    method: "DELETE",

    headers: {
      token: `${token ? token : ""}`,
    },
  });

  let res = await req.json();

  return res;
}
