"use server";

import { Product } from "../interface/Products";

export async function GetAllProducts(): Promise<Product[]> {
  let req = await fetch(`${process.env.Base_URL}products`);
  let res = await req.json();
  return res.data;
}
