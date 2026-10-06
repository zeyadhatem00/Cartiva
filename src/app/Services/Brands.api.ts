import { Category } from "../interface/Products";

export async function GetBrands(): Promise<Category[]> {
  let req = await fetch(`${process.env.Base_URL}brands`);
  let res = await req.json();
  return res.data;
}
