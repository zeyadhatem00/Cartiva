import { Product } from "../interface/Products";

export async function GetHomeProducts(): Promise<Product[]> {
  let req = await fetch(`${process.env.Base_URL}products?limit=12`);
  let res = await req.json();
  return res.data;
}
