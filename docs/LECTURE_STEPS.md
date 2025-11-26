# 👨🏾‍💻 Section 04: Server Side + Client side rendenring

## Getting Started

First, create a `Next` project
```bash
npx create-next-app [project-name]
```

Choose:
```bash
✔ Would you like to use the recommended Next.js defaults? › No, customize settings
✔ Would you like to use TypeScript? … No / `Yes`
✔ Which linter would you like to use? › `ESLint`
✔ Would you like to use React Compiler? … `No` / Yes
✔ Would you like to use Tailwind CSS? … No / `Yes`
✔ Would you like your code inside a `src/` directory? … `No` / Yes
✔ Would you like to use App Router? (recommended) … No / `Yes`
✔ Would you like to customize the import alias (`@/*` by default)? … `No` / Yes
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 📚 Lecture 037: MyDashboard

### 1. Open **`globals.css`** file:
```css
/* src/app/globals.css */
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

/* @media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
} */  // 👈🏽 ✅

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

### 2. Open **`src/app/page.tsx`** file:
```tsx
export default function HomePage() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
```

### 3. Create **`dashboard/counter/page.tsx`** file:
```tsx
/* src/app/dashboard/counter/page.tsx */
export default function CounterPage(){
  return(
    <div>
      <h1>Page Counter</h1>
    </div>
  )
}
```

> Go to [counter page](http://localhost:3000/dashboard/counter)

### 4. Renavigate rom homepage directly to counter page:
```tsx
/* src/app/page.tsx */
import { redirect } from "next/navigation";
export default function HomePage() {
  redirect("/dashboard/counter");
}
```

> Go to [Home page](http://localhost:3000)





## 📚 Lecture 0

## 📚 Lecture 0

## 📚 Lecture 0

## 📚 Lecture 0
