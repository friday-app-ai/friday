import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProtected = !nextUrl.pathname.startsWith("/auth");
      const isOnUnprotecetd = nextUrl.pathname === "/";
      if (isOnUnprotecetd) {
        return true;
      } else if (isOnProtected) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/courses", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
