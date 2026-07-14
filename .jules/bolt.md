## 2024-07-14 - Lazy load view components in single-page dashboard apps

**Learning:** When building a single-page dashboard application that relies on state-based routing within a single Next.js file (e.g. switching between heavy components like charts in `app/page.tsx`), Next.js will bundle all those views into the initial JavaScript payload by default if they are statically imported. This bloats the initial bundle and slows down the first paint.

**Action:** Always use `next/dynamic` to lazily load the view components when implementing state-based routing. This way, Next.js generates a smaller initial bundle and fetches the other views (chunks) on demand as the user navigates between them.
