"use server";

import { Category } from "../interface/Products";

export async function Getcategories(): Promise<Category[]> {
  let req = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
  let res = await req.json();
  return res.data;
}
