import { getToken } from "../GetMyToken";

export async function VisaPayment(data: any, cartid: string) {
  const token = await getToken();
  let req = await fetch(
    `${process.env.Base_URL}orders/checkout-session/${cartid}?url=${process.env.Domain}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        token: `${token ? token : ""}`,
      },
      body: JSON.stringify({
        shippingAddress: {
          ...data,
        },
      }),
    },
  );

  let res = await req.json();

  return res;
}
