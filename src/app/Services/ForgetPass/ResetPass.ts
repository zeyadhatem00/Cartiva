export async function Reset(data: { email: string; newPassword: string }) {
  let req = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  let res = await req.json();

  return res;
}
