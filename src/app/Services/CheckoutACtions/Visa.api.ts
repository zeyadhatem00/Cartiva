import { getToken } from "../GetMyToken";

 export async function VisaPayment(data: any , cartid:string) {
  const token = await getToken();
  let req = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:3000`,
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
