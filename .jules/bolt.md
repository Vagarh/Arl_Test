
## 2024-05-18 - Code Splitting for Tab-like Single Page Apps
**Learning:** In Next.js architectures where a single page acts as a tab container for multiple heavy view components, static imports cause the entire bundle to load upfront regardless of the active tab. This is a common performance anti-pattern.
**Action:** Use `next/dynamic` to dynamically import heavy child components conditionally rendered by state. This splits the code into smaller chunks and drastically reduces the initial JS load time.
