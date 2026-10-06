import { Category } from "../interface/Products";

export async function GetBrands(): Promise<Category[]> {
  let req = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
  let res = await req.json();
  return res.data;
}
