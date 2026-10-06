"use server";
export async function Verify(data: { resetCode: string }) {
  let req = await fetch(`${process.env.Base_URL}auth/verifyResetCode`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let res = await req.json();

  return res;
}
