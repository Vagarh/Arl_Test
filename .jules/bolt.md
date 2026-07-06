## 2024-05-18 - First Load JS Bundle Reduction
**Learning:** Found an opportunity to code-split views in `dashboard/app/page.tsx` using `next/dynamic`.
**Action:** Implemented dynamic imports for conditionally rendered views, which reduced the initial bundle size for First Load JS from 221 kB to 201 kB (133 kB to 113 kB for `/`).
