## 2024-05-17 - Explicit Code Splitting for State-Based Routing in Next.js
**Learning:** When using state-based routing within a single Next.js page (`page.tsx`) instead of file-system routing, Next.js will bundle all synchronously imported components into the initial load, drastically inflating the initial JS bundle size.
**Action:** Always use `next/dynamic` to lazily load components that are rendered conditionally based on state. This defers their loading until they are actually needed by the user.
