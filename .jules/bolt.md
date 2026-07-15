## 2024-07-15 - State-Based Routing Bundle Size Optimization
**Learning:** The dashboard uses state-based routing in `dashboard/app/page.tsx` instead of Next.js file-system routing. This means all view components are synchronously imported and bundled together, causing a significant initial JavaScript payload even though only one view is shown at a time.
**Action:** Always lazy load view components using `next/dynamic` when using state-based routing to ensure code splitting and optimize the initial bundle size.
