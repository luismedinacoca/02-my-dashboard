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
} */ // 👈🏽 ✅

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
export default function CounterPage() {
  return (
    <div>
      <h1>Page Counter</h1>
    </div>
  );
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

## 📚 Lecture 038: My Dashboard Structure

### 1. Get the dashboard component code

[Dark dashboard navigation system made using Tailwind CSS](https://www.creative-tim.com/twcomponents/component/dashboard-navigation)

### 2. Add the **`src/app/dashboard/layout.tsx`** file:

```tsx
/* src/app/dashboard/layout.tsx */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout Dashboard</h1>
    </div>
  );
}
```

### 3. Add the Dashboard code from the Tailwind URL into this Layout:

```tsx
/* src/app/dashboard/layout.tsx */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex flex-col relative w-screen">
        <div
          id="menu"
          className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll"
        >
          <div id="logo" className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-white">
              Dash<span className="text-blue-500">8</span>.
            </h1>
            <p className="text-slate-500 text-sm">
              Manage your actions and activities
            </p>
          </div>
          <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
              <span>
                <img
                  className="rounded-full w-8 h-8"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                  alt=""
                />
              </span>
              <span className="text-sm md:text-base font-bold">
                Edward Tompson
              </span>
            </a>
          </div>
          <div id="nav" className="w-full px-6">
            <a
              href="#"
              className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">
                  Dashboard
                </span>
                <span className="text-sm text-white/50 hidden md:block">
                  Data Overview
                </span>
              </div>
            </a>
            <a
              href="#"
              className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">
                  Database
                </span>
                <span className="text-sm text-slate-500 hidden md:block">
                  Database Manager
                </span>
              </div>
            </a>
            <a
              href="#"
              className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">
                  Cloud Storage
                </span>
                <span className="text-sm text-slate-500 hidden md:block">
                  Manage Cloud Storage
                </span>
              </div>
            </a>
            <a
              href="#"
              className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">
                  Reports
                </span>
                <span className="text-sm text-slate-500 hidden md:block">
                  Manage Reports
                </span>
              </div>
            </a>
            <a
              href="#"
              className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">
                  Security
                </span>
                <span className="text-sm text-slate-500 hidden md:block">
                  Generate Security Keys
                </span>
              </div>
            </a>
            <a
              href="#"
              className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">
                  Extensions
                </span>
                <span className="text-sm text-slate-500 hidden md:block">
                  Manage Extensions
                </span>
              </div>
            </a>
            <a
              href="#"
              className="w-full px-2 inline-flex space-x-2 items-center py-3 hover:bg-white/5 transition ease-linear duration-150"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">
                  Settings
                </span>
                <span className="text-sm text-slate-500 hidden md:block">
                  Edit App Settings
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
```

> Notes:

- Replace all `class` by `className`.
- Selft-close the <img> tag: `<img ... />`
- Replace each `stroke-linecap` by `strokeLinecap`.
- Replace each `stroke-linejoin` by `strokeLinejoin`.
- Replace each `stroke-width` by `strokeWidth`.

## 📚 Lecture 039: Sidebar & main content

### 1. Add the `{ children }` prop in this `layout.tsx`:

- Replace `<div className="flex flex-col relative w-screen">` by `<div className="flex">`
- Delete `fixed` in `<div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">`
- Style `{ children }`

```tsx
/* src/app/dashboard/layout.tsx */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        {" "}
        // 👈🏽 ✅<div
          id="menu"
          className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
        >
          ...
        </div>
        {children}
      </div>
    </div>
  );
}
```

### 2. Creaate **`Sidebar.tsx`** component:

#### 1. From **`Layout.tsx`**, Cut/Remove the content between:

- `<div className="flex">` and
- `<div className="p-2 w-full text-slate-900">`

#### 2. Paste this content in **`Sidebar`** component:

```tsx
/* src/app/components/Sidebar.tsx */
export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <img
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-white">
              Dashboard
            </span>
            <span className="text-sm text-white/50 hidden md:block">
              Data Overview
            </span>
          </div>
        </a>
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Database
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Database Manager
            </span>
          </div>
        </a>
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Cloud Storage
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Manage Cloud Storage
            </span>
          </div>
        </a>
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Reports
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Manage Reports
            </span>
          </div>
        </a>
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Security
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Generate Security Keys
            </span>
          </div>
        </a>
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Extensions
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Manage Extensions
            </span>
          </div>
        </a>
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Settings
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Edit App Settings
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
```

#### 3. Create **`index.ts`** file:

```ts
/* src/app/components/index.ts */
export { Sidebar } from "./Sidebar";
```

### 3. Import **`Sidebar`** component in **`Layout`**:

```tsx
/* src/app/dashboard/layout.tsx */
import { Sidebar } from "../components"; // 👈🏽 ✅
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar /> // 👈🏽 ✅
        <div className="p-2 w-full text-slate-900">{children}</div>
      </div>
    </div>
  );
}
```

### 4. Update the **`Sidebar`** component:

- Add `style={{ width: '400px' }}` in `<div id="menu" className="...">`
- Keep 2 `<a href="#"...>` from `<div id="nav" className="w-full px-6">` only and isolate them.
- Change the name profile with yours.

```tsx
/*  */
export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <img
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Luis Medina Coca
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-white">
              Dashboard
            </span>
            <span className="text-sm text-white/50 hidden md:block">
              Data Overview
            </span>
          </div>
        </a>

        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Database
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Database Manager
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
```

## 📚 Lecture 040: Next/Image

Check it out this URL: [Components | Image Componnt | Next.js](https://nextjs.org/docs/app/api-reference/components/image)

### 1. Import `Image` from next/image`

```tsx
/* src/app/components/Sidebar.tsx */
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image // 👈🏽 ✅
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="User avatar" // 👈🏽 ✅
              width={50} // 👈🏽 ✅
              height={50} // 👈🏽 ✅
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Luis Medina Coca
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-white">
              Dashboard
            </span>
            <span className="text-sm text-white/50 hidden md:block">
              Data Overview
            </span>
          </div>
        </a>

        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Database
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Database Manager
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
```

> 🔥 Issue:

- Hostname not allowed.

### 2. Open **`next.config.ts`**

```ts
/* next.config.ts */
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // 👈🏽 ✅ <Image src="https://... />
        hostname: "images.unsplash.com", // 👈🏽 ✅ <Image src="...images.unsplash.com/..." />
      },
    ],
  },
};
export default nextConfig;
```

## 📚 Lecture 041: Icons and active route

### 1. Install [React-icons](https://react-icons.github.io/react-icons/):

```bash
npm install react-icons --save
```

> reference Link [Ionicons: Premium Open Source Icon Pack for Ionic Framework](https://ionic.io/ionicons/)

### 2. Import `IoLogoReact` in logo section:

```tsx
/* src/app/components/Sidebar.tsx */
import Image from "next/image";
import { IoLogoReact } from "react-icons/io5"; // 👈🏽 ✅ (2)
export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" /> // 👈🏽 ✅ (1)
          <span>Dash-67</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          ....
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
        >
          ....
        </a>

        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          ....
        </a>
      </div>
    </div>
  );
};
```

### 3. Create `SidebarMenuItem.tsx` file:

```tsx
/* src/app/components/SidebarMenuItem.tsx */
import { JSX } from "react";

interface Props {
  //👈🏽 ✅
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  //👈🏽 ✅
  return (
    <a
      href="#"
      className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">
          Dashboard
        </span>
        <span className="text-sm text-white/50 hidden md:block">
          Data Overview
        </span>
      </div>
    </a>
  );
};

export default SidebarMenuItem;
```

### 4. Import `SidebarMenuItem` from `Sidebar.tsx`:

```tsx
/* src/app/components/Sidebar.tsx */
import Image from "next/image";
import { IoLogoReact } from "react-icons/io5";
import SidebarMenuItem from "./SidebarMenuItem"; // 👈🏽 ✅

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash-67</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Luis Medina Coca
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        <SidebarMenuItem path={""} icon={undefined} title={""} subTitle={""} />{" "}
        // 👈🏽 ✅
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Database
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Database Manager
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
```

#### 4.1 Add the `menuItems` array:

```tsx
/* src/app/components/Sidebar.tsx */
import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  // 👈🏽 ✅ (1)
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualization",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Counter Client Side",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash-67</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Luis Medina Coca
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} /> // 👈🏽 ✅ (2)
        ))}
      </div>
    </div>
  );
};
```

## 📚 Lecture 042 Task solution

### 1. Apply `usePathname()` hook:

```tsx
/* src/app/components/SidebarMenuItem.tsx */
import { usePathname } from "next/navigation"; // 👈🏽 ✅
import { JSX } from "react";
interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}
const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  const currentPath = usePathname(); // 👈🏽 ✅
  return (
    <a
      href="#"
      className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">
          Dashboard
        </span>
        <span className="text-sm text-white/50 hidden md:block">
          Data Overview
        </span>
      </div>
    </a>
  );
};
export default SidebarMenuItem;
```

<img src="../img/section04-lecture042-001.png">

#### Fixing:

```tsx
/* src/app/components/SidebarMenuItem.tsx */
"use client"; // 👈🏽 ✅
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  const currentPath = usePathname();
  return (
    <a
      href="#"
      className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">
          Dashboard
        </span>
        <span className="text-sm text-white/50 hidden md:block">
          Data Overview
        </span>
      </div>
    </a>
  );
};
export default SidebarMenuItem;
```

### 2. Update `SidebarMenuItem.tsx`:

```tsx
/* src/app/components/SidebarMenuItem.tsx */
"use client";
import Link from "next/link"; // 👈🏽 ✅ (2)
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  const currentPath = usePathname();
  return (
    <Link // 👈🏽 ✅ (1)
      href={path} // 👈🏽 ✅ (3)
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${
        currentPath === path ? "bg-blue-800" : ""
      }`} // 👈🏽 ✅ (4)
    >
      <div>{icon}</div> // 👈🏽 ✅ (5)
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>{" "}
        // 👈🏽 ✅ (6)
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span> // 👈🏽 ✅ (7)
      </div>
    </Link>
  );
};
export default SidebarMenuItem;
```

## 📚 Lecture 043: state management - useState

### 1. Adding style in CounterPage component:

```tsx
/* src/app/dashboard/counter/page.tsx */
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in shopping cart</span>
      <span className="text-9xl">10</span>
      <div>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
      </div>
    </div>
  );
}
```

<img src="../img/section04-lecture042-002.png">

### 2. Apply **`useState`** in this page:

```tsx
/* src/app/dashboard/counter/page.tsx */
"use client"; // 👈🏽 ✅ (2)
import { useState } from "react"; // 👈🏽 ✅ (2)
export default function CounterPage() {
  const [count, setCounts] = useState(0); // 👈🏽 ✅ (1)
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in shopping cart</span>
      <span className="text-9xl">{count}</span> // 👈🏽 ✅ (3)
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count - 1)} // 👈🏽 ✅ (4)
          disabled={count === 0} // 👈🏽 ✅ (4)
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count + 1)} // 👈🏽 ✅ (5)
        >
          +1
        </button>
      </div>
    </div>
  );
}
```

### 3. Add `metadata` in `Counter` component:

```tsx
/*  */
"use client";
import { Metadata } from "next/types"; // 👈🏽 ✅ (2)
import { useState } from "react";

export const metadata: Metadata = {
  // 👈🏽 ✅ (1)
  title: "Counter Page",
  description: "Simple Counter Page",
};
export default function CounterPage() {
  const [count, setCounts] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in shopping cart</span>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count - 1)}
          disabled={count === 0}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}
```

> 🔥 Issue:

<img src="../img/section04-lecture042-003.png">

## 📚 Lecture 044: Let's think in terms of folders and small components

### 1. Create **`shopping-cart/components/CartCounter.jsx`**:

```
02-my-dashboard
├── docs
│   └── LECTURE_STEPS.md
├── img/
├── public/
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── SidebarMenuItem.tsx
│   │   │   └── index.ts
│   │   ├── dashboard
│   │   │   ├── counter
│   │   │   │   └── page.tsx
│   │   │   ├── main
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── shopping-cart             # 👈🏽 ✅
│   │   │   ├── components            # 👈🏽 ✅
│   │   │   │   └── CartCounter.jsx   # 👈🏽 ✅
│   │   │   └── index.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── test.txt
├── eslint.config.mjs
```

### 2. Update **`src/app/dashboard/counter/page.tsx`**:
```tsx
/* src/app/dashboard/counter/page.tsx */
//"use-client"
import { Metadata } from "next/types";
//import { useState } from "react";
import { CartCounter } from "../../shopping-cart";

export const metadata: Metadata = {
  title: "𝌰 Shopping Cart",
  description: "Simple Counter Page",
};

export default function CounterPage() {
  //const [count, setCounts] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in shopping cart</span>
      <CartCounter />
      {/*
        <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count - 1)}
          disabled={count === 0}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count + 1)}
        >
          +1
        </button>
      </div>
      */}
    </div>
  );
}
```

### 3. Update **`src/app/shopping-cart/components/CartCounter.jsx`** file:
```tsx
/* src/app/shopping-cart/components/CartCounter.jsx */
'use client';
import { useState } from "react";

const CartCounter = () => {
  const [count, setCounts] = useState(0);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count - 1)}
          disabled={count === 0}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count + 1)}
        >
          +1
        </button>
      </div>
    </>
  )
}

export default CartCounter;
```

#### Update **`src/app/shopping-cart/index.ts`** file as barril:
```tsx
export { default as CartCounter } from './components/CartCounter';
```

With more than one component:

export in barril file:
```js
export { default as CartCounter } from './components/CartCounter';
export { default as CartItem }    from './components/CartItem';
export { default as CartGrid }    from './components/CartGrid';
```

Import:
```tsx
import { CartCounter, CartItem, CartGrid } from '../../shopping-cart';
```

### 4. Server side vs client side:

#### 1 Sever side from **`src/app/dashboard/counter/page.tsx`**:
```tsx
import { CartCounter } from "../../shopping-cart";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "𝌰 Shopping Cart",
  description: "Simple Counter Page",
};

// i.e a value generated from the server or reading from an API or any other server.  // 👈🏽 ✅
const value = 20;  // 👈🏽 ✅||||||

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in shopping cart</span>
      <CartCounter value={value} />
    </div>
  );
}
```

#### 2. Client side **`src/app/shopping-cart/components/CartCounter.tsx`**:
```tsx
"use client";
import { useState } from "react";

//Interface for Props:
interface Props {  // 👈🏽 ✅
  value?: number;
}

const CartCounter = ({ value = 10 }: Props) => {  // 👈🏽 ✅
  const [count, setCounts] = useState(value);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count - 1)}
          disabled={count === 0}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count + 1)}
        >
          +1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
```

---

# 👨🏾‍💻 Section 05: Dynamic Generation – SSR

## 📚 Lecture 050: Following with the section

### 1. Create **`src/app/dashboard/pokemons/page.tsx`** file:
```
02-my-dashboard
├── docs
│   └── LECTURE_STEPS.md
├── img/
├── public/
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── SidebarMenuItem.tsx
│   │   │   └── index.ts
│   │   ├── dashboard
│   │   │   ├── counter
│   │   │   │   └── page.tsx
│   │   │   ├── main
│   │   │   │   └── page.tsx
│   │   │   ├── pokemons              # 👈🏽 ✅
│   │   │   │   └── page.tsx          # 👈🏽 ✅
│   │   │   └── layout.tsx
│   │   ├── shopping-cart             
│   │   │   ├── components            
│   │   │   │   └── CartCounter.jsx   
│   │   │   └── index.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── test.txt
├── eslint.config.mjs
```

```tsx
/* src/app/dashboard/pokemons/page.tsx */
export default function PokemonsPage() {
  return (
    <div>
      <h1>Hello Page Pokemons</h1>
    </div>
  );
}
```

### 2. Add the **`Pokemon`** in sidebar menuItems:
```tsx
/*  */
import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5";
import SidebarMenuItem from "./SidebarMenuItem";
const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualization",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Counter Client Side",
  },
  {  // 👈🏽 ✅
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Static Generation",
  },  // 👈🏽 ✅
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash-67</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Luis Medina Coca</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
```

![Pokemons page in sidebar](../img/section05-lecture050-001.png)


## 📚 Lecture 051: Data Fetching - Next13+

### 1. Test in POSTMAN:
#### **GET /**  
**URL:** `http://pokeapi.co/api/v2/pokemon?limit=151&offset=0`  
**Description:** Check that the server is running.
```json
{
    "count": 1328,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
            "name": "charizard",
            "url": "https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon/9/"
        },
        {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon/10/"
        },
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon/20/"
        },
        {
            "name": "spearow",
            "url": "https://pokeapi.co/api/v2/pokemon/21/"
        },
        {
            "name": "fearow",
            "url": "https://pokeapi.co/api/v2/pokemon/22/"
        },
        {
            "name": "ekans",
            "url": "https://pokeapi.co/api/v2/pokemon/23/"
        },
        {
            "name": "arbok",
            "url": "https://pokeapi.co/api/v2/pokemon/24/"
        },
        {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon/25/"
        },
        {
            "name": "raichu",
            "url": "https://pokeapi.co/api/v2/pokemon/26/"
        },
        {
            "name": "sandshrew",
            "url": "https://pokeapi.co/api/v2/pokemon/27/"
        },
        {
            "name": "sandslash",
            "url": "https://pokeapi.co/api/v2/pokemon/28/"
        },
        {
            "name": "nidoran-f",
            "url": "https://pokeapi.co/api/v2/pokemon/29/"
        },
        {
            "name": "nidorina",
            "url": "https://pokeapi.co/api/v2/pokemon/30/"
        },
        {
            "name": "nidoqueen",
            "url": "https://pokeapi.co/api/v2/pokemon/31/"
        },
        {
            "name": "nidoran-m",
            "url": "https://pokeapi.co/api/v2/pokemon/32/"
        },
        {
            "name": "nidorino",
            "url": "https://pokeapi.co/api/v2/pokemon/33/"
        },
        {
            "name": "nidoking",
            "url": "https://pokeapi.co/api/v2/pokemon/34/"
        },
        {
            "name": "clefairy",
            "url": "https://pokeapi.co/api/v2/pokemon/35/"
        },
        {
            "name": "clefable",
            "url": "https://pokeapi.co/api/v2/pokemon/36/"
        },
        {
            "name": "vulpix",
            "url": "https://pokeapi.co/api/v2/pokemon/37/"
        },
        {
            "name": "ninetales",
            "url": "https://pokeapi.co/api/v2/pokemon/38/"
        },
        {
            "name": "jigglypuff",
            "url": "https://pokeapi.co/api/v2/pokemon/39/"
        },
        {
            "name": "wigglytuff",
            "url": "https://pokeapi.co/api/v2/pokemon/40/"
        },
        {
            "name": "zubat",
            "url": "https://pokeapi.co/api/v2/pokemon/41/"
        },
        {
            "name": "golbat",
            "url": "https://pokeapi.co/api/v2/pokemon/42/"
        },
        {
            "name": "oddish",
            "url": "https://pokeapi.co/api/v2/pokemon/43/"
        },
        {
            "name": "gloom",
            "url": "https://pokeapi.co/api/v2/pokemon/44/"
        },
        {
            "name": "vileplume",
            "url": "https://pokeapi.co/api/v2/pokemon/45/"
        },
        {
            "name": "paras",
            "url": "https://pokeapi.co/api/v2/pokemon/46/"
        },
        {
            "name": "parasect",
            "url": "https://pokeapi.co/api/v2/pokemon/47/"
        },
        {
            "name": "venonat",
            "url": "https://pokeapi.co/api/v2/pokemon/48/"
        },
        {
            "name": "venomoth",
            "url": "https://pokeapi.co/api/v2/pokemon/49/"
        },
        {
            "name": "diglett",
            "url": "https://pokeapi.co/api/v2/pokemon/50/"
        },
        {
            "name": "dugtrio",
            "url": "https://pokeapi.co/api/v2/pokemon/51/"
        },
        {
            "name": "meowth",
            "url": "https://pokeapi.co/api/v2/pokemon/52/"
        },
        {
            "name": "persian",
            "url": "https://pokeapi.co/api/v2/pokemon/53/"
        },
        {
            "name": "psyduck",
            "url": "https://pokeapi.co/api/v2/pokemon/54/"
        },
        {
            "name": "golduck",
            "url": "https://pokeapi.co/api/v2/pokemon/55/"
        },
        {
            "name": "mankey",
            "url": "https://pokeapi.co/api/v2/pokemon/56/"
        },
        {
            "name": "primeape",
            "url": "https://pokeapi.co/api/v2/pokemon/57/"
        },
        {
            "name": "growlithe",
            "url": "https://pokeapi.co/api/v2/pokemon/58/"
        },
        {
            "name": "arcanine",
            "url": "https://pokeapi.co/api/v2/pokemon/59/"
        },
        {
            "name": "poliwag",
            "url": "https://pokeapi.co/api/v2/pokemon/60/"
        },
        {
            "name": "poliwhirl",
            "url": "https://pokeapi.co/api/v2/pokemon/61/"
        },
        {
            "name": "poliwrath",
            "url": "https://pokeapi.co/api/v2/pokemon/62/"
        },
        {
            "name": "abra",
            "url": "https://pokeapi.co/api/v2/pokemon/63/"
        },
        {
            "name": "kadabra",
            "url": "https://pokeapi.co/api/v2/pokemon/64/"
        },
        {
            "name": "alakazam",
            "url": "https://pokeapi.co/api/v2/pokemon/65/"
        },
        {
            "name": "machop",
            "url": "https://pokeapi.co/api/v2/pokemon/66/"
        },
        {
            "name": "machoke",
            "url": "https://pokeapi.co/api/v2/pokemon/67/"
        },
        {
            "name": "machamp",
            "url": "https://pokeapi.co/api/v2/pokemon/68/"
        },
        {
            "name": "bellsprout",
            "url": "https://pokeapi.co/api/v2/pokemon/69/"
        },
        {
            "name": "weepinbell",
            "url": "https://pokeapi.co/api/v2/pokemon/70/"
        },
        {
            "name": "victreebel",
            "url": "https://pokeapi.co/api/v2/pokemon/71/"
        },
        {
            "name": "tentacool",
            "url": "https://pokeapi.co/api/v2/pokemon/72/"
        },
        {
            "name": "tentacruel",
            "url": "https://pokeapi.co/api/v2/pokemon/73/"
        },
        {
            "name": "geodude",
            "url": "https://pokeapi.co/api/v2/pokemon/74/"
        },
        {
            "name": "graveler",
            "url": "https://pokeapi.co/api/v2/pokemon/75/"
        },
        {
            "name": "golem",
            "url": "https://pokeapi.co/api/v2/pokemon/76/"
        },
        {
            "name": "ponyta",
            "url": "https://pokeapi.co/api/v2/pokemon/77/"
        },
        {
            "name": "rapidash",
            "url": "https://pokeapi.co/api/v2/pokemon/78/"
        },
        {
            "name": "slowpoke",
            "url": "https://pokeapi.co/api/v2/pokemon/79/"
        },
        {
            "name": "slowbro",
            "url": "https://pokeapi.co/api/v2/pokemon/80/"
        },
        {
            "name": "magnemite",
            "url": "https://pokeapi.co/api/v2/pokemon/81/"
        },
        {
            "name": "magneton",
            "url": "https://pokeapi.co/api/v2/pokemon/82/"
        },
        {
            "name": "farfetchd",
            "url": "https://pokeapi.co/api/v2/pokemon/83/"
        },
        {
            "name": "doduo",
            "url": "https://pokeapi.co/api/v2/pokemon/84/"
        },
        {
            "name": "dodrio",
            "url": "https://pokeapi.co/api/v2/pokemon/85/"
        },
        {
            "name": "seel",
            "url": "https://pokeapi.co/api/v2/pokemon/86/"
        },
        {
            "name": "dewgong",
            "url": "https://pokeapi.co/api/v2/pokemon/87/"
        },
        {
            "name": "grimer",
            "url": "https://pokeapi.co/api/v2/pokemon/88/"
        },
        {
            "name": "muk",
            "url": "https://pokeapi.co/api/v2/pokemon/89/"
        },
        {
            "name": "shellder",
            "url": "https://pokeapi.co/api/v2/pokemon/90/"
        },
        {
            "name": "cloyster",
            "url": "https://pokeapi.co/api/v2/pokemon/91/"
        },
        {
            "name": "gastly",
            "url": "https://pokeapi.co/api/v2/pokemon/92/"
        },
        {
            "name": "haunter",
            "url": "https://pokeapi.co/api/v2/pokemon/93/"
        },
        {
            "name": "gengar",
            "url": "https://pokeapi.co/api/v2/pokemon/94/"
        },
        {
            "name": "onix",
            "url": "https://pokeapi.co/api/v2/pokemon/95/"
        },
        {
            "name": "drowzee",
            "url": "https://pokeapi.co/api/v2/pokemon/96/"
        },
        {
            "name": "hypno",
            "url": "https://pokeapi.co/api/v2/pokemon/97/"
        },
        {
            "name": "krabby",
            "url": "https://pokeapi.co/api/v2/pokemon/98/"
        },
        {
            "name": "kingler",
            "url": "https://pokeapi.co/api/v2/pokemon/99/"
        },
        {
            "name": "voltorb",
            "url": "https://pokeapi.co/api/v2/pokemon/100/"
        },
        {
            "name": "electrode",
            "url": "https://pokeapi.co/api/v2/pokemon/101/"
        },
        {
            "name": "exeggcute",
            "url": "https://pokeapi.co/api/v2/pokemon/102/"
        },
        {
            "name": "exeggutor",
            "url": "https://pokeapi.co/api/v2/pokemon/103/"
        },
        {
            "name": "cubone",
            "url": "https://pokeapi.co/api/v2/pokemon/104/"
        },
        {
            "name": "marowak",
            "url": "https://pokeapi.co/api/v2/pokemon/105/"
        },
        {
            "name": "hitmonlee",
            "url": "https://pokeapi.co/api/v2/pokemon/106/"
        },
        {
            "name": "hitmonchan",
            "url": "https://pokeapi.co/api/v2/pokemon/107/"
        },
        {
            "name": "lickitung",
            "url": "https://pokeapi.co/api/v2/pokemon/108/"
        },
        {
            "name": "koffing",
            "url": "https://pokeapi.co/api/v2/pokemon/109/"
        },
        {
            "name": "weezing",
            "url": "https://pokeapi.co/api/v2/pokemon/110/"
        },
        {
            "name": "rhyhorn",
            "url": "https://pokeapi.co/api/v2/pokemon/111/"
        },
        {
            "name": "rhydon",
            "url": "https://pokeapi.co/api/v2/pokemon/112/"
        },
        {
            "name": "chansey",
            "url": "https://pokeapi.co/api/v2/pokemon/113/"
        },
        {
            "name": "tangela",
            "url": "https://pokeapi.co/api/v2/pokemon/114/"
        },
        {
            "name": "kangaskhan",
            "url": "https://pokeapi.co/api/v2/pokemon/115/"
        },
        {
            "name": "horsea",
            "url": "https://pokeapi.co/api/v2/pokemon/116/"
        },
        {
            "name": "seadra",
            "url": "https://pokeapi.co/api/v2/pokemon/117/"
        },
        {
            "name": "goldeen",
            "url": "https://pokeapi.co/api/v2/pokemon/118/"
        },
        {
            "name": "seaking",
            "url": "https://pokeapi.co/api/v2/pokemon/119/"
        },
        {
            "name": "staryu",
            "url": "https://pokeapi.co/api/v2/pokemon/120/"
        },
        {
            "name": "starmie",
            "url": "https://pokeapi.co/api/v2/pokemon/121/"
        },
        {
            "name": "mr-mime",
            "url": "https://pokeapi.co/api/v2/pokemon/122/"
        },
        {
            "name": "scyther",
            "url": "https://pokeapi.co/api/v2/pokemon/123/"
        },
        {
            "name": "jynx",
            "url": "https://pokeapi.co/api/v2/pokemon/124/"
        },
        {
            "name": "electabuzz",
            "url": "https://pokeapi.co/api/v2/pokemon/125/"
        },
        {
            "name": "magmar",
            "url": "https://pokeapi.co/api/v2/pokemon/126/"
        },
        {
            "name": "pinsir",
            "url": "https://pokeapi.co/api/v2/pokemon/127/"
        },
        {
            "name": "tauros",
            "url": "https://pokeapi.co/api/v2/pokemon/128/"
        },
        {
            "name": "magikarp",
            "url": "https://pokeapi.co/api/v2/pokemon/129/"
        },
        {
            "name": "gyarados",
            "url": "https://pokeapi.co/api/v2/pokemon/130/"
        },
        {
            "name": "lapras",
            "url": "https://pokeapi.co/api/v2/pokemon/131/"
        },
        {
            "name": "ditto",
            "url": "https://pokeapi.co/api/v2/pokemon/132/"
        },
        {
            "name": "eevee",
            "url": "https://pokeapi.co/api/v2/pokemon/133/"
        },
        {
            "name": "vaporeon",
            "url": "https://pokeapi.co/api/v2/pokemon/134/"
        },
        {
            "name": "jolteon",
            "url": "https://pokeapi.co/api/v2/pokemon/135/"
        },
        {
            "name": "flareon",
            "url": "https://pokeapi.co/api/v2/pokemon/136/"
        },
        {
            "name": "porygon",
            "url": "https://pokeapi.co/api/v2/pokemon/137/"
        },
        {
            "name": "omanyte",
            "url": "https://pokeapi.co/api/v2/pokemon/138/"
        },
        {
            "name": "omastar",
            "url": "https://pokeapi.co/api/v2/pokemon/139/"
        },
        {
            "name": "kabuto",
            "url": "https://pokeapi.co/api/v2/pokemon/140/"
        },
        {
            "name": "kabutops",
            "url": "https://pokeapi.co/api/v2/pokemon/141/"
        },
        {
            "name": "aerodactyl",
            "url": "https://pokeapi.co/api/v2/pokemon/142/"
        },
        {
            "name": "snorlax",
            "url": "https://pokeapi.co/api/v2/pokemon/143/"
        },
        {
            "name": "articuno",
            "url": "https://pokeapi.co/api/v2/pokemon/144/"
        },
        {
            "name": "zapdos",
            "url": "https://pokeapi.co/api/v2/pokemon/145/"
        },
        {
            "name": "moltres",
            "url": "https://pokeapi.co/api/v2/pokemon/146/"
        },
        {
            "name": "dratini",
            "url": "https://pokeapi.co/api/v2/pokemon/147/"
        },
        {
            "name": "dragonair",
            "url": "https://pokeapi.co/api/v2/pokemon/148/"
        },
        {
            "name": "dragonite",
            "url": "https://pokeapi.co/api/v2/pokemon/149/"
        },
        {
            "name": "mewtwo",
            "url": "https://pokeapi.co/api/v2/pokemon/150/"
        },
        {
            "name": "mew",
            "url": "https://pokeapi.co/api/v2/pokemon/151/"
        }
    ]
}
```

### 2. Update the `src/app/dashboard/pokemons/page.tsx` with the `fetch("http://pokeapi.co/api/v2/pokemon?limit=151&offset=0")`:

```tsx
/* src/app/dashboard/pokemons/page.tsx */
const getPokemons = async (limit = 20, offset = 0) => {  // 👈🏽 ✅
  const data = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const pokemon = await data.json();
  return pokemon;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();  // 👈🏽 ✅
  return (
    <div>
      <h1>{JSON.stringify(pokemons)}</h1>  // 👈🏽 ✅
    </div>
  );
}
```

![Pokemons list display in string](../img/section05-lecture051-001.png)


## 📚 Lecture 052: Assign data type and displays images

### 1. Go to Postman and copy pokemon response:

![Pokemon response button](..//img/section05-lecture052-001.png)

### 2. Create **`src/app/dashboard/pokemons/interfaces/pokemon-response.ts`** file:
1. Open `Visual Studio Code`
2. Open pokemon-response.ts file
3. Click on `View` then select on `Command Palette`.
4. Write `>Paste JSON as Code`
5. enter `PokemonsResponse` then hit enter.

```ts
/* src/app/dashboard/pokemons/interfaces/pokemon-response.ts */
export interface PokemonsResponse {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  name: string;
  url:  string;
}
```

### 3. Create/Add `simple-pokemon` file:
```ts
/* src/app/dashboard/pokemons/interfaces/simple-pokemon.ts */
export interface SimplePokemon {
  id: string;
  name: string;
}
```

### 4. Go back to **`src/app/dashboard/pokemons/page.tsx`** and update it:
```tsx
/* src/app/dashboard/pokemons/page.tsx */
import Image from "next/image";
import { PokemonsResponse } from "./interfaces/pokemon-response";  // 👈🏽 ✅
import { SimplePokemon } from "./interfaces/simple-pokemon";  // 👈🏽 ✅
const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)  // 👈🏽 ✅
  .then(
    (res) => res.json()
  );
  const pokemons = data.results.map((pokemon) => ({  // 👈🏽 ✅
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);  // 👈🏽 ✅
  return (
    <div className="flex flex-col">  // 👈🏽 ✅
      {/*<h1>{JSON.stringify(pokemons)}</h1>*/}
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg`}
          width={100}
          height={100}
          alt="name"
        />
      </div>
    </div>
  );
}
```

### 5. Update `next.config.ts` file:
```ts
/* next.config.ts */
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",  // 👈🏽 ✅
        hostname: "raw.githubusercontent.com",  // 👈🏽 ✅
      },
    ],
  },
};
export default nextConfig;
```


## 📚 Lecture 053: Task Solution:

### 1. Apply the `map` method in `pokemons` array:

```tsx
/* src/app/dashboard/pokemons/page.tsx */
import Image from "next/image";
import { PokemonsResponse } from "./interfaces/pokemon-response";
import { SimplePokemon } from "./interfaces/simple-pokemon";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json()
  );

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">

      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (  // 👈🏽 ✅
          <Image  // 👈🏽 ✅
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
          />
        ))}

      </div>
    </div>
  );
}
```

![Pokemon Images dispayed](../img/section05-lecture053-001.png)



## 📚 Lecture 054: Let's think in small components

### 1. Add Pokemon List title:
```tsx
/* src/app/dashboard/pokemons/page.tsx */
import Image from "next/image";
import { PokemonsResponse } from "./interfaces/pokemon-response";
import { SimplePokemon } from "./interfaces/simple-pokemon";
const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json()
  );
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2 text-center">
        Pokémons List & <span>Static</span>  // 👈🏽 ✅
      </span>

      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
          />
        ))}
      </div>
    </div>
  );
}
```


### 2. Create **`components/PokemonGrid.tsx`** file and cut/paste  pokeemons.map section in here:

#### 2.1 Comment in **`src/app/dashboard/pokemons/page.tsx`** the pokemon.maps(...) code:
```tsx
/* src/app/dashboard/pokemons/page.tsx */
import Image from "next/image";
import { PokemonsResponse } from "./interfaces/pokemon-response";
import { SimplePokemon } from "./interfaces/simple-pokemon";
const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json()
  );
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-center">
        Pokémons List & <span>Static</span>
      </span>

      {/* <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
          />
        ))}
      </div> */}

    </div>
  );
}
```

#### 2.2 Move this commented code into `PokemonGrid` file:
```tsx
/* src/app/dashboard/pokemons/components/PokemonGrid.tsx */
import { SimplePokemon } from "../interfaces/simple-pokemon";  // 👈🏽 ✅ (2)

interface Props {  // 👈🏽 ✅ (1)
  pokemons: SimplePokemon[];
}

const PokemonGrid = ({ pokemons }: Props) => {  // 👈🏽 ✅ (1)
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        // <Image
        //   key={pokemon.id}
        //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        //   width={100}
        //   height={100}
        //   alt={pokemon.name}
        // />  // 👈🏽 ✅ (3)
        <span key={pokemon.id}>abcdefghijkl</span>  // 👈🏽 ✅ (4)
      ))}
    </div>
  );
};

export default PokemonGrid;
```

[Tailwind CSS User card](https://www.creative-tim.com/twcomponents/component/user-card-7)

#### 2.3 Complete/Update the barrell `index` file with `PokemonGrid`:
```ts
/* src/app/dashboard/pokemons/index.ts */
export type { PokemonsResponse } from "./interfaces/pokemon-response";
export type { SimplePokemon } from "./interfaces/simple-pokemon";

export { default as PokemonGrid } from "./components/PokemonGrid";  // 👈🏽 ✅
```

#### 2.3 Import `PokemonGrid` into `Pokemons`:
```tsx
/* src/app/dashboard/pokemons/page.tsx */
//import Image from "next/image";
import { PokemonsResponse } from "./interfaces/pokemon-response";
import { SimplePokemon } from "./interfaces/simple-pokemon";
import PokemonGrid from "./components/PokemonGrid";
const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json()
  );
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-center">
        Pokémons List & <span>Static</span>
      </span>

      <PokemonGrid pokemons={pokemons} />  // 👈🏽 ✅

    </div>
  );
}
```

#### 2.4 Update `PokemonCard` with card code from [Tailwind CSS User card](https://www.creative-tim.com/twcomponents/component/user-card-7):
```tsx
/* src/app/dashboard/pokemons/components/PokemonCard.tsx */
import Link from "next/link";
const PokemonCard = () => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <svg
            aria-hidden="true"
            role="img"
            className="h-24 w-24 text-white rounded-full mx-auto"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
            ></path>
          </svg>
          <p className="pt-2 text-lg font-semibold text-gray-50">John Doe</p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <a className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">Manage your Account</a>
          </div>
        </div>
        <div className="border-b">
          <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex"> {/* 👈🏽 ✅ 🤔 */}
            <div className="text-green-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">Campaigns</p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
          <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex"> {/* 👈🏽 ✅ 🤔 */}
            <div className="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">Donations</p>
              <p className="text-xs text-gray-500">View your last donations</p>
            </div>
          </Link>
        </div>

        <div className="">
          <a href="#" className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p className="text-sm font-medium text-gray-800 leading-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="h-4 w-4 text-gray-800 fill-current animate-spin"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"
                ></path>
              </svg>{" "}
              Logout
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
```

From now and on
```tsx
<Link>
  <a className="...">something...</a>
</Link>
```
is not allowed. 🚀

So you must change:
```tsx
<Link className="...">
  something..
</Link>
```

### 3. Working on `PokemonGrid`:
```tsx
/* src/app/dashboard/pokemons/components/PokemonGrid.tsx */
import { SimplePokemon } from "../interfaces/simple-pokemon";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} /> {/* 👈🏽 ✅ */}
      ))}
    </div>
  );
};

export default PokemonGrid;
```

### 4. Update `PokemonCard` component:
```tsx
/*  */
import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}
const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  if (!id) return null;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image key={id} src={imageUrl} width={100} height={100} alt={name} />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More Info
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center">
            <div className="text-red-600">
              <IoHeartOutline size={20} />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">It&apos;s not favourite</p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PokemonCard;
```


---
## 🔥 🔥 🔥

## 📚 Lecture 0

### 1.

```tsx
/*  */
```
