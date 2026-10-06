import { useSession } from "next-auth/react";
import { Order } from "../interface/Orders";

export async function GetOrders(id: string): Promise<Order[]> {
  let req = await fetch(`${process.env.Base_URL}orders/user/${id}`);
  let res = await req.json();
  return res;
}
