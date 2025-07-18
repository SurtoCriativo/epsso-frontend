# EPSSO Frontend

This repository contains the code for **EPSSO's** marketing website. The project is built with React and TypeScript using the Vite bundler. It provides several pages, contact forms and a small blog that fetches posts from a WordPress API.

## Features

- **React + Vite** setup with Hot Module Reloading for a fast development experience.
- **TypeScript** across the entire project.
- **Tailwind CSS** for styling.
- **React Router** for client side navigation with lazy loaded pages.
- **React Hook Form** + **Zod** for form management and validation.
- **React Query** to request blog posts from the API and cache them.
- **Vitest** with Testing Library for unit tests.

## Getting Started

1. **Install dependencies** (uses [pnpm](https://pnpm.io/)):
   ```bash
   pnpm install
   ```
2. **Start the development server**:
   ```bash
   pnpm dev
   ```
   The site is served with Vite and will be available on `http://localhost:5173`.
3. **Lint the code**:
   ```bash
   pnpm lint
   ```
4. **Run tests**:
   ```bash
   pnpm test
   ```
   For a single run without watch mode you can use `pnpm test:run`.
5. **Build for production**:
   ```bash
   pnpm build
   ```
6. **Preview a production build**:
   ```bash
   pnpm preview
   ```

## Project Structure

```
src/
├─ components/        # Reusable UI components and layout
│  ├─ Layout/         # Application layout with header and footer
│  ├─ _shared/        # Smaller pieces such as buttons or cards
│  └─ __tests__/      # Component tests
├─ pages/             # Route based pages (Home, About, Blog, etc.)
├─ routes/            # Router configuration
├─ hooks/             # Custom React hooks (e.g. usePosts)
├─ contants/          # Static data used across the app
├─ schemas/           # Zod schemas for forms
├─ services/          # Axios instances for API requests
├─ types/             # TypeScript type definitions
└─ test/              # Test setup utilities
```

- **Entry Point:** `src/main.tsx` renders the `<App />` component.
- **Routing:** defined in `src/routes/AppRoutes.tsx`, where pages are loaded lazily using `React.lazy` and `Suspense`.
- **Global Styles:** `src/index.css` imports Tailwind CSS and declares custom fonts.
- **API Client:** `src/services/api.ts` defines an Axios instance pointing to the WordPress API used for blog posts.

## Useful Tips for New Contributors

- When adding new pages, register them in `src/routes/AppRoutes.tsx`.
- Use the existing form components (`ContactForm`, `TrainingPage` forms, etc.) as references for handling validation with React Hook Form and Zod.
- Tailwind configuration relies on defaults through the `@tailwindcss/vite` plugin. If you need custom utilities or themes, you can add a `tailwind.config.js` file.
- The `src/test/test-utils.tsx` file exports a custom `render` function that wraps components with `BrowserRouter`, making it easier to test components that rely on routing.

## Further Learning

The stack is intentionally simple. If you are new to any of these tools, the following topics will help you navigate the codebase:

- [React Router](https://reactrouter.com/) for client-side navigation.
- [React Query](https://tanstack.com/query/v5) for data fetching and caching.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/) for forms.
- [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for tests.

---

Happy coding!
