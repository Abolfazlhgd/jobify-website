import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// مسیرهایی که بدون لاگین قابل دسترس هستند
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
}