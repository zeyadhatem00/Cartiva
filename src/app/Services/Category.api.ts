"use server";

import { Category } from "../interface/Products";

export async function Getcategories(): Promise<Category[]> {
  let req = await fetch(`${process.env.Base_URL}categories`);
  let res = await req.json();
  return res.data;
}
