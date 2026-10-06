"use server";

import { getToken } from "../GetMyToken";
import { Address, Data } from "./../../interface/Address";

export async function AddAdress(Address: Data): Promise<Address> {
  const token = await getToken();

  let req = await fetch(`${process.env.Base_URL}addresses`, {
    method: "POST",
    body: JSON.stringify(Address),
    headers: {
      "content-type": "application/json",
      token: `${token ? token : ""}`,
    },
  });

  let res = await req.json();

  return res;
}
