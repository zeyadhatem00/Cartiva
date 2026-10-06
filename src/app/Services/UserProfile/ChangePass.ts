import { getToken } from "../GetMyToken";
type data = {
  currentPassword: string;
  password: string;
  rePassword: string;
};
export async function ChangePassword(data: data) {
  const token = await getToken();
  let req = await fetch(`${process.env.Base_URL}users/changeMyPassword`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      token: `${token ? token : ""}`,
      "content-type": "application/json",
    },
  });

  let res = await req.json();
  return res;
}
