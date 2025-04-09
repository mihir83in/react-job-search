🏗️ Step-by-Step: Manual Next.js + TypeScript Setup from Scratch
You’ve already done git init. Let’s build it layer by layer.

🔹 1. Initialize Project
bash
Copy
Edit
npm init -y
This creates a package.json.

🔹 2. Install Core Dependencies
bash
Copy
Edit
npm install react react-dom next
Then install TypeScript + types:

bash
Copy
Edit
npm install -D typescript @types/react @types/node
Now run:

bash
Copy
Edit
npx tsc --init
Next.js will auto-generate defaults when you run it, so just proceed.

🔹 3. Add Required Project Structure
bash
Copy
Edit
mkdir pages public styles
touch pages/index.tsx styles/globals.css
Your pages/index.tsx can start like this:

tsx
Copy
Edit
export default function Home() {
  return <h1>Hello, React Stack from Scratch!</h1>
}
🔹 4. Add Next.js Script Commands
Update package.json:

json
Copy
Edit
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
🔹 5. Configure tsconfig.json
You can use this minimal setup:

json
Copy
Edit
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "noEmit": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
Then create the auto-generated file Next.js expects:

bash
Copy
Edit
touch next-env.d.ts
And add:

ts
Copy
Edit
/// <reference types="next" />
/// <reference types="next/types/global" />
🔹 6. Set Up Tailwind CSS
bash
Copy
Edit
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Then update tailwind.config.js:

js
Copy
Edit
content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
]
In styles/globals.css:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
Then import it in _app.tsx:

tsx
Copy
Edit
// pages/_app.tsx
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
🔹 7. Install Axios + React Query
bash
Copy
Edit
npm install axios @tanstack/react-query
Wrap app in QueryClientProvider (_app.tsx):

tsx
Copy
Edit
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
🔹 8. Add Zustand for State
bash
Copy
Edit
npm install zustand
Example store:

ts
Copy
Edit
// stores/filterStore.ts
import { create } from 'zustand'

export const useFilterStore = create((set) => ({
  keyword: '',
  setKeyword: (keyword) => set({ keyword })
}))
🔹 9. Install React Hook Form
bash
Copy
Edit
npm install react-hook-form
Use it inside any component:

tsx
Copy
Edit
const { register, handleSubmit } = useForm()
<input {...register("title")} />
🔹 10. ESLint + Prettier Config
bash
Copy
Edit
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
Create .eslintrc.js and .prettierrc as shown earlier.

🔹 11. Testing (Vitest + RTL)
bash
Copy
Edit
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
Set up vitest.config.ts, test/setup.ts, etc. (or I can generate that next).

Let me know and I’ll generate the actual folder structure with all base files and contents — or start scaffolding the job listing features!