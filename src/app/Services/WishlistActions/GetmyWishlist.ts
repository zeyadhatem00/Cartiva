import { getToken } from "../GetMyToken";

export async function GetmyWishlist(): Promise<wishlist> {
  const token = await getToken();

  let req = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    headers: {
      token: `${token ? token : ""}`,
    },
  });

  let res = await req.json();

  return res;
}
