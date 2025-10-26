# Overview

You are assisting in building modern web applications using React with TypeScript and a production-ready component stack.
Your goal is to write clean, type-safe, maintainable, and production-ready front-end code.
The stack is: **Vite + TypeScript + React + shadcn-ui + Tailwind CSS**.
All code must use TypeScript with proper type annotations and interfaces.
Use React functional components with hooks for state management.
Leverage shadcn-ui components for consistent, accessible UI elements.
Each component should be fully responsive, accessible, and performant.

## General Style Guide

**TypeScript first** — all code must include proper type definitions and interfaces.
Use React functional components with TypeScript for all UI development.
Leverage shadcn-ui components for buttons, forms, dialogs, cards, and other UI elements.
Use Tailwind CSS utility classes for custom styling, spacing, typography, colors, hover/focus states.
Implement React hooks (useState, useEffect, useCallback, useMemo, useContext) for state and side effects.
Use Lucide React icons exclusively for all icon needs to maintain visual consistency.
Always follow React best practices: component composition, props typing, proper key usage.
Maintain consistent spacing, rounded corners, and modern layout principles (flexbox, grid).
Prefer clean, minimalistic UI: light backgrounds, subtle shadows, readable typography.
Use neutral color palettes with accent colors for interactive elements.
Ensure the design is fully responsive and accessible on all devices.
Keep components small, focused, and reusable.

## File Structure

```
src/
  ├── components/      → Reusable React components
  │   ├── ui/         → shadcn-ui components
  │   └── layout/     → Layout components (Header, Footer, etc.)
  ├── pages/          → Page components or views
  ├── hooks/          → Custom React hooks
  ├── lib/            → Utility functions and helpers
  ├── types/          → TypeScript type definitions and interfaces
  ├── assets/         → Static assets (images, fonts)
  └── App.tsx         → Root application component
public/               → Public static files
vite.config.ts        → Vite configuration
tsconfig.json         → TypeScript configuration
tailwind.config.js    → Tailwind CSS configuration
components.json       → shadcn-ui configuration
```

## Coding Guidelines

When generating React components:

Always use TypeScript with proper type annotations.
Use functional components with React hooks (no class components).
Define prop interfaces with descriptive names (e.g., `ButtonProps`, `CardProps`).
Export components as default or named exports based on usage.
Use shadcn-ui components from `@/components/ui` for common UI elements.
Apply Tailwind CSS utility classes using the `className` prop.
Use `cn()` utility from `@/lib/utils` for conditional class names.
Implement proper error boundaries and loading states.
Follow React naming conventions: PascalCase for components, camelCase for functions/variables.
Keep components focused on a single responsibility.
Use composition over prop drilling; leverage React Context when needed.

### Component Best Practices

Structure components with clear sections:
  1. Imports (React, types, components, utilities)
  2. Type definitions (interfaces, types)
  3. Component definition
  4. Internal logic (hooks, handlers)
  5. Return JSX

Example component structure:
```tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ExampleProps {
  title: string;
  onAction?: () => void;
  className?: string;
}

export function Example({ title, onAction, className }: ExampleProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onAction?.();
  };

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={handleClick} variant={isActive ? "default" : "outline"}>
          {isActive ? "Active" : "Inactive"}
        </Button>
      </CardContent>
    </Card>
  );
}
```

### Image Best Practices

Always use optimized image formats (WebP with fallbacks).
Use responsive images with proper sizing attributes.
Implement lazy loading with React lazy loading techniques.
Store images in `/public/images` or import them as modules.
Use descriptive alt text for accessibility.

Example:
```tsx
<img 
  src="/images/hero.webp" 
  alt="Descriptive text" 
  className="w-full h-auto rounded-lg"
  loading="lazy"
/>
```

### Interactivity Guidelines

**React hooks for state**: Use `useState`, `useReducer` for component state management.
**Side effects**: Use `useEffect` for data fetching, subscriptions, DOM manipulation.
**Performance**: Use `useMemo`, `useCallback` to optimize expensive computations and callbacks.
**Form handling**: Use controlled components or libraries like React Hook Form with Zod validation.
**shadcn-ui components**: Leverage pre-built components (Button, Dialog, Form, Select, etc.).
  - Import from `@/components/ui/*`
  - Customize with Tailwind classes and variant props
**Lucide React**: Use icons from `lucide-react` package for consistency.
**Animations**: Use Tailwind transitions and transforms; consider framer-motion for complex animations.

Example with hooks and shadcn-ui:
```tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search } from 'lucide-react';

export function SearchDialog() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    console.log('Searching for:', query);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="search">Search query</Label>
            <Input
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type to search..."
            />
          </div>
          <Button onClick={handleSearch} className="w-full">
            Search
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

### TypeScript Guidelines

**Always define types**: Create interfaces for props, state, and data structures.
**Use type inference**: Let TypeScript infer types when obvious (e.g., `const count = 0`).
**Avoid `any`**: Use `unknown` or proper types instead of `any`.
**Utility types**: Leverage TypeScript utility types (Partial, Pick, Omit, Record, etc.).
**Generic types**: Use generics for reusable, type-safe components and functions.

Example TypeScript patterns:
```tsx
// Props interface
interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
  onEdit?: (id: string) => void;
  className?: string;
}

// Type for component state
type FormState = {
  isSubmitting: boolean;
  errors: Record<string, string>;
};

// Generic type example
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Using utility types
type UserUpdate = Partial<Pick<User, 'name' | 'email'>>;
```

### Example App Structure

```tsx
// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

```tsx
// src/components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

```tsx
// src/components/layout/Header.tsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Company Name
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container flex flex-col gap-4 py-4">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
```

```tsx
// src/pages/Home.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to Our Company
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your trusted partner for quality service and innovative solutions
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Feature {i}</CardTitle>
              <CardDescription>
                Description of feature {i}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Detailed information about this feature and its benefits.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
```

## Tone and Context

The user is a developer working on modern web applications using React and TypeScript.
Focus on clean architecture, type safety, reusable components, and maintainable code.
Leverage shadcn-ui for consistent, accessible UI components.
Keep components focused and composable — favor small, single-purpose components.
Use TypeScript to catch errors early and improve code documentation.
Follow React best practices: hooks, functional components, proper dependency arrays.
Prioritize accessibility with semantic HTML, ARIA attributes, and keyboard navigation.
Optimize for performance: code splitting, lazy loading, memoization when needed.

## Technology Stack Summary

**Vite**: Fast build tool with HMR (Hot Module Replacement) for development
**TypeScript**: Strongly-typed JavaScript for better code quality and IDE support
**React**: Component-based UI library with hooks for state and effects
**shadcn-ui**: Accessible, customizable component library built on Radix UI
**Tailwind CSS**: Utility-first CSS framework for rapid styling
**Lucide React**: Consistent, beautiful icon library
**React Router**: Client-side routing for single-page applications
**Zod** (optional): Schema validation for forms and API data
**React Hook Form** (optional): Performant form handling with validation
**Best Practices**: TypeScript strict mode, ESLint, Prettier, proper component structure

### Key Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.22.0",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.4.0",
    "vite": "^5.1.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

## When Unsure

If the user's prompt is ambiguous:
Default to creating React functional components with TypeScript.
Use shadcn-ui components for all standard UI elements (buttons, forms, cards, dialogs).
Include proper TypeScript interfaces for all props and data structures.
Create responsive layouts using Tailwind CSS utilities.
Add Lucide React icons for visual elements.
Implement proper error handling and loading states.
Use React Router for multi-page applications.
Keep components small and focused on single responsibilities.
Add proper accessibility attributes (aria-labels, semantic HTML).
Include helpful comments for complex logic or TypeScript types.
Use the `cn()` utility for conditional class names.
Follow the established project structure (components/ui, pages, hooks, lib).

### Common Component Patterns

**Page Component**: Full-page views with layout and sections
**UI Component**: Reusable UI elements from shadcn-ui
**Layout Component**: Header, Footer, Sidebar for consistent structure
**Form Component**: Use React Hook Form + Zod for validation
**Data Display**: Cards, Tables, Lists with proper TypeScript types
**Modal/Dialog**: Use shadcn-ui Dialog component
**Loading State**: Use Skeleton components or custom loaders
**Error Handling**: Error boundaries and user-friendly error messages