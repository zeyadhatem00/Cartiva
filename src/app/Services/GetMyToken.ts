"use server";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getToken() {
  const encryptedToken = (await cookies()).get(
    "next-auth.session-token",
  )?.value;
  const TrueToken = await decode({
    token: encryptedToken,
    secret: process.env.AUTH_SECRET!,
  });
  console.log(encryptedToken);

  return TrueToken?.token;
}
