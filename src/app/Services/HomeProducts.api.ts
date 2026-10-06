import { Product } from "../interface/Products";

export async function GetHomeProducts(): Promise<Product[]> {
  let req = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?limit=12`,
  );
  let res = await req.json();
  return res.data;
}
