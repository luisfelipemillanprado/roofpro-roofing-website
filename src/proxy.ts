import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/* Next.js 16 names the middleware entry proxy.ts */
export default createMiddleware(routing);

export const config = {
  /* every path except api, Next internals, static files and the og image route (next-intl docs) */
  matcher: "/((?!api|_next|_vercel|.*/opengraph-image|.*\\..*).*)",
};
