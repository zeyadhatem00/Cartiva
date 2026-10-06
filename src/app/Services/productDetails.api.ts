import { ProductDetails } from "../interface/ProductDetails";

export async function GetProductDetails(id: string): Promise<ProductDetails> {
  let req = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`,
  );
  let res = await req.json();
  return res.data;
}
