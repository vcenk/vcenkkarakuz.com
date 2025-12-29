# Project Context: vcenkkarakuz.com

## Project Overview

This is a **React** web application built with **Vite**, **TypeScript**, and **Tailwind CSS**. It appears to be a personal portfolio or professional showcase website ("Cenk") featuring sections for products, resources, automation services, and animations. The project leverages **shadcn/ui** for UI components and **Framer Motion** for animations.

**Key Technologies:**

*   **Framework:** React 18
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Library:** shadcn/ui (Radix UI primitives)
*   **Animations:** Framer Motion
*   **Routing:** React Router DOM (v6)
*   **Icons:** Lucide React
*   **Data Fetching:** TanStack Query (React Query)

## Building and Running

The project uses `npm` for dependency management (though `bun.lockb` indicates Bun usage is also possible).

### Prerequisites

*   Node.js & npm (or Bun)

### Commands

*   **Install Dependencies:**
    ```bash
    npm install
    # or
    bun install
    ```

*   **Start Development Server:**
    ```bash
    npm run dev
    ```
    *   Starts the Vite dev server, typically accessible at `http://localhost:8080`.

*   **Build for Production:**
    ```bash
    npm run build
    ```
    *   Generates a production-ready build in the `dist` directory.

*   **Preview Production Build:**
    ```bash
    npm run preview
    ```

*   **Lint Code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Directory Structure:**
    *   `src/components`: Contains project-specific components.
    *   `src/components/ui`: Contains reusable UI components (shadcn/ui).
    *   `src/pages`: Contains page-level components corresponding to routes.
    *   `src/hooks`: Custom React hooks (e.g., `use-mobile.tsx`, `use-toast.ts`).
    *   `src/lib`: Utility functions (contains `utils.ts` for class name merging).
    *   `src/assets`: Static assets like images.

*   **Routing:**
    *   Routes are defined in `src/App.tsx` using `react-router-dom`.
    *   Main routes include `/` (Home), `/products/:slug`, and `/animations`.

*   **Styling:**
    *   Uses Tailwind CSS utility classes.
    *   Global styles are in `src/index.css`.
    *   The `cn` utility (in `src/lib/utils.ts`) is used for conditional class merging, especially with shadcn/ui components.

*   **Path Aliases:**
    *   `@/*` is configured to resolve to `./src/*`.

*   **State Management:**
    *   Uses `TanStack Query` for server state.
    *   Local state uses standard React `useState` / `useEffect`.
