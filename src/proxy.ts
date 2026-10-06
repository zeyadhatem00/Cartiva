import { NextRequest, NextResponse } from "next/server";
import { getToken } from "./app/Services/GetMyToken";

export async function proxy(request: NextRequest) {
  const token = await getToken();
  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/LogIn", request.url));
  }
}

export const config = {
  matcher: [
    "/cart",
    "/Wishlist",
    "/allorders",
    "/Profile",
    "/Profile/Settings",
    "/Profile/Address",
  ],
};
