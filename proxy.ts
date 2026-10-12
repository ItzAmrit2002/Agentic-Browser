import { clerkMiddleware } from "@clerk/nextjs/server"

// Auth checks live in the pages, layouts, route handlers and Server Functions
// that access protected data (via `await auth.protect()`), not in path matching here.
export default clerkMiddleware()

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
}
