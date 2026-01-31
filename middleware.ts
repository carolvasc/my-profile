import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const match = pathname.match(/^\/(pt|en)(\/|$)/);
  const cookieLang = request.cookies.get("lang")?.value;

  if (match) {
    const response = NextResponse.next();
    if (cookieLang !== match[1]) {
      response.cookies.set("lang", match[1], { path: "/" });
    }
    return response;
  }

  const lang = cookieLang === "en" ? "en" : "pt";
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
