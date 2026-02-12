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

  const match = pathname.match(/^\/(pt|en)\/t\/(classic|minimalist)(\/|$)/);
  const cookieLang = request.cookies.get("lang")?.value;
  const cookieTheme = request.cookies.get("theme")?.value;

  if (match) {
    const response = NextResponse.next();
    if (cookieLang !== match[1]) {
      response.cookies.set("lang", match[1], { path: "/" });
    }
    if (cookieTheme !== match[2]) {
      response.cookies.set("theme", match[2], { path: "/" });
    }
    return response;
  }

  const lang = cookieLang === "en" ? "en" : "pt";
  const theme = cookieTheme === "classic" ? "classic" : "minimalist";
  const url = request.nextUrl.clone();
  const suffix = pathname === "/" ? "" : pathname;
  url.pathname = `/${lang}/t/${theme}${suffix}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
