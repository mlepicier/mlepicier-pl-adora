# PlayLabs.ai

A modern web application for AI Playbooks and GPT Assistants built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Vite** - Fast build tool with HMR
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev -- --host 0.0.0.0

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment. There are two deployment methods:

### Method 1: Automated Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

**Setup Steps:**

1. Go to your GitHub repository settings
2. Navigate to **Pages** under **Code and automation**
3. Under **Build and deployment**, select **Source: GitHub Actions**
4. Push your changes to the main branch
5. The site will be automatically deployed to `https://yourusername.github.io/mlepicier-pl-adora/`

### Method 2: Manual Deployment

To deploy manually using gh-pages:

```bash
# Install dependencies (if not already done)
npm install

# Deploy to GitHub Pages
npm run deploy
```

**Note:** For manual deployment, make sure GitHub Pages is set to deploy from the `gh-pages` branch in your repository settings.

## Configuration

The `vite.config.ts` is configured with:
- `base: '/mlepicier-pl-adora/'` - Update this if your repository name is different
- The router uses HashRouter for GitHub Pages compatibility

## Getting Started 

```
src/
  ├── components/
  │   ├── ui/           # shadcn-ui components
  │   └── layout/       # Layout components (Header, Footer)
  ├── pages/            # Page components
  ├── lib/              # Utilities and data
  ├── types/            # TypeScript type definitions
  ├── App.tsx           # Root component with routing
  ├── main.tsx          # Entry point
  └── index.css         # Global styles
```

## Features

- 🎨 Modern, responsive design
- 🚀 Fast page loads with Vite
- 💪 Type-safe with TypeScript
- 🎯 SEO-friendly structure
- 📱 Mobile-first approach
- ♿ Accessible components
- 🎭 Smooth animations

## Pages

- **Home** - Hero section, how it works, playbooks grid
- **Playbooks** - Full catalog of AI Playbooks
- **Playbook Detail** - Individual playbook information
- **Pricing** - Pricing and bundle offers
- **Free GPT** - Lead generation page
- **About** - Company story and vision
- **FAQ** - Frequently asked questions

## License

All rights reserved © 2024 PlayLabs.ai
