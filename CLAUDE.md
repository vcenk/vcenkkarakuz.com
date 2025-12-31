# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://0.0.0.0:5173)
npm run dev

# Build for production
npm run build

# Build in development mode (with source maps, etc.)
npm run build:dev

# Preview production build
npm preview

# Run linter
npm run lint
```

## Architecture Overview

This is a **React 18 + TypeScript + Vite** single-page application (SPA) using a static-first architecture. The app is a portfolio/agency site with sophisticated animation systems and a component-driven design.

### Technology Stack

- **Core**: React 18.3, TypeScript, Vite 5.4 with SWC
- **Routing**: React Router DOM v6 (client-side)
- **Styling**: Tailwind CSS with HSL-based design tokens
- **Animations**: Three systems coexist:
  - **Framer Motion** (primary) - UI interactions, page transitions, scroll reveals
  - **GSAP + ScrollTrigger** - Advanced scroll-based animations
  - **Rive** - Interactive state-machine-driven graphics
- **UI Components**: Radix UI primitives following shadcn/ui architecture
- **State Management**:
  - TanStack React Query (configured but minimally used)
  - Local state via React useState
  - No global state library - deliberately minimal

### Project Structure

```
src/
├── pages/              # Route-level components (8 pages)
│   ├── Index.tsx       # Homepage with all landing sections
│   ├── Shop.tsx        # Product catalog with filtering
│   ├── ProductDetail.tsx
│   ├── AnimationLibrary.tsx
│   ├── AutomationsPage.tsx
│   ├── ComponentsPage.tsx
│   ├── ResourcesPage.tsx
│   └── NotFound.tsx
├── components/         # Shared section components (14 files)
│   ├── Navigation.tsx  # Sticky header with smooth scroll anchors
│   ├── HeroSection.tsx
│   ├── TechStack.tsx   # Infinite marquee implementation
│   └── ...
├── components/ui/      # Design system (~60 components)
│   ├── button.tsx      # Radix-based primitives
│   ├── scroll-reveal.tsx  # GSAP version
│   └── ...
├── data/              # Static data layer
│   └── products.ts    # Product catalog with TypeScript interfaces
├── hooks/             # Custom React hooks
│   ├── use-toast.ts   # Toast notification state
│   └── use-mobile.tsx # Responsive breakpoint detection
└── lib/               # Utilities
    └── utils.ts       # cn() function for className merging
```

### Routing System

```
/ → Index (Homepage)
/shop → Shop (Product catalog)
/products/:slug → ProductDetail
/animations → AnimationLibrary
* → NotFound (404)
```

**Navigation Pattern:**
- Hash-based anchor scrolling for homepage sections (`/#services`, `/#about`)
- Smart routing detects current page and navigates home before scrolling to anchors
- Special handling: products with `isLibrary: true` redirect to `/animations`

### Path Aliasing

The `@/` alias maps to `src/`. Always use this for imports:

```typescript
// Good
import { Button } from "@/components/ui/button"
import { products } from "@/data/products"

// Bad
import { Button } from "../../components/ui/button"
```

### Animation Systems

**When to use each:**

1. **Framer Motion** - Use for most UI animations:
   - Page transitions and layout animations
   - Hover/tap interactions (`whileHover`, `whileTap`)
   - Scroll-triggered reveals (via `useInView`)
   - Stagger effects for lists
   - Example: `components/HeroSection.tsx`, `components/ScrollReveal.tsx`

2. **GSAP + ScrollTrigger** - Use for complex scroll effects:
   - Advanced scroll-based reveals with precise control
   - Container vs children animation modes
   - Automatically respects `prefers-reduced-motion`
   - Example: `components/ui/scroll-reveal.tsx`

3. **Rive** - Use for interactive, state-machine graphics:
   - Complex interactive animations
   - Hover and click inputs
   - Example: `components/ui/rive-component.tsx`

**Note:** Two `ScrollReveal` components exist - one using Framer Motion, one using GSAP. Choose based on complexity needs.

### Component Architecture

This project follows the **shadcn/ui pattern**:
- Components live in `components/ui/`
- Built on Radix UI primitives for accessibility
- Uses Class Variance Authority (CVA) for variants
- Copy-paste approach (not npm package)

**Component patterns:**
- Compound components (Card, CardHeader, CardContent)
- Forwarded refs for form elements
- Type-safe props with TypeScript interfaces
- Consistent className merging via `cn()` utility

### Styling System

**Tailwind CSS** with extensive customization:

- **Design Tokens**: HSL-based CSS variables in `src/index.css`
- **Fonts**: Instrument Sans (body), Syne (display)
- **Dark Mode**: Default mode using class-based strategy
- **Custom Animations**: Defined in `tailwind.config.ts`
  - `fade-in`, `fade-in-up`, `scale-in`, `shimmer`
- **Global Effects**: Noise texture overlay (`.bg-noise` with SVG filter)

**Color system:**
```css
background: hsl(var(--background))
foreground: hsl(var(--foreground))
primary: hsl(var(--primary))
accent: hsl(var(--accent))
```

### Data Flow

**Static-first architecture:**
- Product data hardcoded in `data/products.ts`
- Client-side filtering using Array methods
- No external API calls currently
- React Query configured for future API integration

**Product data structure:**
```typescript
interface Product {
  id: string
  slug: string
  title: string
  description: string
  category: string
  image: string
  isPremium: boolean
  price?: string
  link?: string
  isLibrary?: boolean  // Routes to /animations instead of product detail
  techStack?: string[]
}
```

### TypeScript Configuration

**Relaxed strictness** for rapid development:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`
- `noUnusedParameters: false`

This is intentional for the Lovable development workflow. Be mindful when adding type annotations.

### State Management Patterns

1. **Local State**: Use `useState` for component-specific state
2. **Toast Notifications**: Custom reducer pattern in `hooks/use-toast.ts`
   - Memory-based with listener subscription
   - Dual systems: Radix Toaster + Sonner
3. **Form State**: React Hook Form + Zod available (installed but minimally used)
4. **Server State**: React Query configured in `App.tsx` (ready for future API work)

### Build Configuration

- **Vite** with SWC for fast compilation
- **Dev Server**: Runs on `0.0.0.0:5173` (accessible on network)
- **Component Tagger**: Lovable-tagger runs in development mode only
- **Build Modes**:
  - `npm run build` - Production build
  - `npm run build:dev` - Development build with source maps

### Key Architectural Decisions

1. **No centralized state management** - Local state suffices for current needs
2. **Multiple animation libraries** - Different tools for different animation complexity
3. **Static data** - Products hardcoded, not fetched from API
4. **shadcn/ui pattern** - Components copied into codebase for customization
5. **Hash-based navigation** - Homepage sections use anchor links
6. **Accessibility-first** - Radix UI primitives, semantic HTML, reduced-motion support

### Common Patterns

**Adding a new page:**
1. Create component in `src/pages/`
2. Add route in `App.tsx`
3. Update navigation in `components/Navigation.tsx` if needed

**Adding a new product:**
1. Add to `data/products.ts` array
2. Ensure `slug` is unique and URL-safe
3. Set `isLibrary: true` if it should route to animation library

**Creating scroll animations:**
- Use `components/ScrollReveal.tsx` for simple Framer Motion reveals
- Use `components/ui/scroll-reveal.tsx` for complex GSAP animations

**Working with forms:**
- React Hook Form + Zod validation installed
- Example pattern in shadcn/ui form components

### Performance Considerations

- CSS transforms used (not layout properties) for animations
- Framer Motion's layout animations for smooth position changes
- Infinite marquee uses triple array duplication for seamless loops
- SWC compiler for fast builds
- Production builds include code splitting via Vite

### Lovable Integration

This project is managed via Lovable (lovable.dev):
- Changes via Lovable are auto-committed
- `lovable-tagger` plugin marks components in dev mode
- See README.md for Lovable-specific workflows
