import { Address } from "@/app/interface/Address";
import { getToken } from "../GetMyToken";

export async function GetAddresses():Promise<Address> {
  const token = await getToken();
  let req = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
    headers: {
      token: `${token ? token : ""}`,
    },
  });

  let res = await req.json();

  return res;
}
