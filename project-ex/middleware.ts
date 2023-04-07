import { NextRequest, NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  if (signedinPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.get("ACCESS_TOKEN");

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }
}
