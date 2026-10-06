"use server";

import { Product } from "../interface/Products";

export async function GetAllProducts(): Promise<Product[]> {
  let req = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
  let res = await req.json();
  return res.data;
}
