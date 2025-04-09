🧵 Summary (What You're Picking)
You’re essentially going with:

Link to site: https://react-job-search-swart.vercel.app/

Layer	Your Choice	Why
Framework	Next.js	Most adopted, full-stack, SSR
Styling	Tailwind CSS	Fast, utility-first CSS
Components	ShadCN/UI (optional)	Prebuilt Tailwind components
Data Fetching	React Query + Axios	Caching + REST or API flexibility
Forms	React Hook Form	Fast, native, typed
State	useState / Context (basic) or Zustand/Query	Simple and scalable
Testing	Jest + React Testing Library	Standard toolset
Lint + Format	ESLint + Prettier	Industry standard


🧠 What Does “State Management” Even Mean?
In React apps, state lives in:

Local component state (useState, useReducer)

App-wide UI state (theme toggle, modal open/close, filters)

Server state (data fetched from APIs — managed via React Query)

Form state (handled by RHF or Formik)

We’re focusing here on #2 — App-wide UI state, aka client state.

🔍 Let’s Classify Your App's States
Example	Type of State	Where to Store
Search query	UI / URL state	✅ In the URL query params or global store
Filter toggles (e.g., location)	Shared UI state	✅ Zustand / Context
Modal open/close state	Local UI state	✅ useState (inside the component)
Fetched job list	Server state	✅ React Query (with caching)
Form input state	Form state	✅ React Hook Form
Authenticated user info	Global business state	✅ Zustand / Redux / Context
Theme (dark/light)	Global UI state	✅ Zustand / Context / useLocalStorage
Scroll position	Transient UI state	✅ useRef / useEffect (don’t store in state!)

🧠 Summary of When to Use What
Purpose	Tool(s) to Use
Run unit tests	✅ Jest / Vitest
Test components + DOM	✅ React Testing Library (with Jest/Vitest)
Test whole app flows	✅ Playwright or Cypress

🛠️ Most Common Setup in React Apps
ESLint

With these plugins:

eslint-plugin-react

eslint-plugin-jsx-a11y

@typescript-eslint/eslint-plugin

eslint-plugin-react-hooks

Optionally: eslint-plugin-tailwindcss

Prettier

Auto-formats on save (via VS Code or Husky pre-commit hook)

Works alongside ESLint via eslint-config-prettier and eslint-plugin-prettier

🏗️ Project Stack Summary
You chose:

✅ Next.js
✅ TypeScript
✅ Tailwind CSS
✅ React Hook Form
✅ React Query (TanStack) + Axios
✅ Zustand (state)
✅ ESLint + Prettier
✅ Testing (Vitest + React Testing Library + Playwright)

