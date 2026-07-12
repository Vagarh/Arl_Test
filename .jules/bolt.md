## 2024-05-19 - Next.js State-Based Routing Bundle Size
**Learning:** In Next.js applications using state-based routing within a single page component (like `app/page.tsx`), static imports for all possible view components will cause them to be bundled into the initial JS payload, creating a massive initial load size.
**Action:** When encountering state-based view switching, always look for opportunities to replace static component imports with `next/dynamic` to lazily load the chunks only when the view is selected.
