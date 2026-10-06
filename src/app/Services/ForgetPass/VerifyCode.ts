export async function Verify(data: { resetCode: string }) {
  let req = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  let res = await req.json();

  return res;
}