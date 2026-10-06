"use server";

import { SignUpINterface } from "../interface/Auth";

export async function signup(data: SignUpINterface) {
  let req = await fetch(`${process.env.Base_URL}auth/signup`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });

  let res = await req.json();
  let results = {
    req: req.ok,
    respond: res,
  };
  return results;
}
