
# Project File Structure Explanation

This document provides an overview of all files in the project with a brief description and importance indicator:
- 🟢 Green: Core file with many imports or dependencies (high importance)
- 💛 Yellow: Moderately important file with some imports
- 🔴 Red: Utility or configuration file with few or no imports

## Root Directory

- `.env` 🟢 - Environment variables configuration for Supabase and other services
- `.gitignore` 🔴 - Specifies files to be ignored by Git
- `README.md` 🟢 - Project documentation and setup instructions
- `bun.lockb` 🔴 - Lock file for Bun package manager
- `components.json` 🔴 - Configuration for shadcn/ui components
- `eslint.config.js` 🔴 - ESLint configuration
- `index.html` 🟢 - Main HTML entry point for the application
- `package-lock.json` 🔴 - NPM package lock file
- `package.json` 🟢 - Project dependencies and scripts
- `postcss.config.js` 🔴 - PostCSS configuration for Tailwind
- `tailwind.config.ts` 💛 - Tailwind CSS configuration including custom theme
- `tsconfig.app.json` 🔴 - TypeScript configuration for the app
- `tsconfig.json` 🔴 - Main TypeScript configuration
- `tsconfig.node.json` 🔴 - TypeScript configuration for Node.js
- `vite.config.ts` 💛 - Vite build tool configuration

## src/

- `App.css` 🔴 - Global CSS styles
- `App.tsx` 🟢 - Main React component defining routes and providers
- `index.css` 💛 - Global CSS including Tailwind imports and custom variables
- `main.tsx` 🟢 - Application entry point that renders the App component
- `vite-env.d.ts` 🔴 - TypeScript declarations for Vite environment

### src/components/

- `AboutSection.tsx` 💛 - Component displaying the about information
- `ContactForm.tsx` 💛 - Form component for contact submissions
- `Footer.tsx` 💛 - Site-wide footer component
- `GalleryGrid.tsx` 💛 - Grid display for gallery images with filtering
- `HeroSection.tsx` 💛 - Main landing page hero section
- `Navbar.tsx` 🟢 - Navigation bar with mobile responsive design
- `ProjectCard.tsx` 💛 - Card component for displaying projects
- `SocialMediaBar.tsx` 💛 - Fixed social media links sidebar
- `StatsCard.tsx` 🔴 - Card component for displaying statistics
- `SupabaseStatus.tsx` 💛 - Component showing Supabase connection status
- `TeamMember.tsx` 💛 - Card component for team member profiles

#### src/components/ui/

All UI components from shadcn library 🔴:
- `accordion.tsx`, `alert-dialog.tsx`, `alert.tsx`, etc. - Shadcn UI component library

### src/hooks/

- `use-mobile.tsx` 🔴 - Hook for detecting mobile viewport
- `use-supabase-status.ts` 🟢 - Hook for monitoring Supabase connection status
- `use-toast.ts` 💛 - Hook for displaying toast notifications

### src/integrations/

#### src/integrations/supabase/

- `client.ts` 🟢 - Supabase client initialization and configuration
- `types.ts` 💛 - TypeScript types for Supabase database models

### src/lib/

- `utils.ts` 💛 - Utility functions used across the application

### src/pages/

- `Contact.tsx` 💛 - Contact page with form
- `Gallery.tsx` 💛 - Gallery page showing images
- `Index.tsx` 🟢 - Main landing page with hero section
- `NotFound.tsx` 🔴 - 404 page for handling non-existent routes
- `Projects.tsx` 💛 - Projects overview page
- `Team.tsx` 💛 - Team members display page

### public/

- `favicon.ico` 🔴 - Website favicon
- `placeholder.svg` 🔴 - Default placeholder image
- `robots.txt` 🔴 - Search engine crawling instructions

#### public/lovable-uploads/

- `80a7511a-6f08-4ed5-87dd-b0f10aa7ce51.png` 💛 - Site logo

### supabase/

- `config.toml` 🟢 - Supabase project configuration
