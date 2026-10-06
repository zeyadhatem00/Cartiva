import { getToken } from "../GetMyToken";

export async function DeleteAWishlist(id:string) {
  const token = await getToken();

  let req = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
    method:'DELETE' ,
    headers: {
      token: `${token ? token : ""}`,
    },
  });

  let res  = await req.json()

  return res
}