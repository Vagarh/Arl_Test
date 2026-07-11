## 2024-07-11 - Lazy Loading Dashboard Views
**Learning:** The dashboard architecture uses state-based routing for its views within `app/page.tsx` instead of Next.js file-system routing. This results in all views being loaded upfront.
**Action:** Use `next/dynamic` to lazily load view components when using state-based routing in Next.js to optimize the initial JavaScript bundle size.
