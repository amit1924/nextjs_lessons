// Always make middleware folder in root directory
import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname != "/about") {
    return NextResponse.redirect(new URL("/about", request.url));
  }
  console.log("middleware is running");

  return NextResponse.json({ success: "run successfully" });
}

export const config = {
  matcher: ["/userslist/:path*"],
};
