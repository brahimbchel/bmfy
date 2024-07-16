// import { authMiddleware, clerkMiddleware } from '@clerk/nextjs/server';


// export default clerkMiddleware()

// export default authMiddleware({
//   publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
// });

// export const config = {
//   // The following matcher runs middleware on all routes
//   // except static assets.
//     // matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
//     // matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
//     // matcher: [ '/((?!.+\\.[\\w]+$|_next).*', '/', '/(api|trpc)(.*)'],
//     matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],

// };

// import { authMiddleware } from "@clerk/nextjs";
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


