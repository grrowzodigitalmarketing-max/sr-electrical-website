import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname;

  if (
    path.startsWith("/admin") &&
    path !== "/admin/login"
  ) {
    // Temporary protection
    // later Supabase session check karenge

    const referer =
      request.headers.get("referer");

    if (!referer?.includes("/admin/login")) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};