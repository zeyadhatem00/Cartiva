"use server";
import { ProductDetails } from "../interface/ProductDetails";

export async function GetProductDetails(id: string): Promise<ProductDetails> {
  let req = await fetch(`${process.env.Base_URL}products/${id}`);
  let res = await req.json();
  return res.data;
}
