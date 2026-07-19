## 2024-07-19 - Initial Page Load Bloat with State-Based Routing
**Learning:** The dashboard architecture uses state-based routing within `app/page.tsx` instead of Next.js file-system routing. Statically importing all views into this single page caused the entire application (including Recharts and other dependencies for all views) to be bundled in the First Load JS.
**Action:** Use `next/dynamic` to lazily load view components based on the active state. This drops the First Load JS from 221 kB to 97 kB.
