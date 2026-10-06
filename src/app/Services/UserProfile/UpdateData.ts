import { getToken } from "../GetMyToken";
type data = {
  name: string;
  email: string;
  phone: string;
};
export async function UpdateData(data: data) {
  const token = await getToken();
  let req = await fetch(
    `https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        token: `${token ? token : ""}`,
        "content-type": "application/json",
      },
    },
  );

  let res = await req.json();
  return res;
}
