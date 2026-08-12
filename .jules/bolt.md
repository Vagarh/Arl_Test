
## 2024-05-18 - [Next.js View Component Lazy Loading]
**Learning:** The dashboard heavily relies on conditionally rendering large view components based on a state variable (`activeView`) instead of Next.js file-system routing. By default, static imports cause Next.js to bundle all view components into the initial JavaScript payload, increasing load time and reducing Time To Interactive (TTI).
**Action:** Always verify if state-driven component rendering for major views can be deferred using `next/dynamic` to shrink the initial JS bundle size.
