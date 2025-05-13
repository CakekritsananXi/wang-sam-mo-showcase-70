
# ที่นี่วังสามหมอ (Wang Sam Mo Here)

A web application showcasing stories, projects, gallery, and information about the Wang Sam Mo community in Udon Thani province, Thailand.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Development](#development)
- [Project Structure](#project-structure)
- [Database](#database)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This web application serves as a digital platform for the Wang Sam Mo community in Udon Thani, Thailand. It showcases local projects, a photo gallery, team information, and provides a contact channel for visitors.

## Features

- **Home**: Introduction to Wang Sam Mo with key statistics
- **Projects**: Showcase of community initiatives and projects
- **Gallery**: Photo collection with category filtering
- **Team**: Information about community leaders and contributors
- **Contact**: Form for visitors to get in touch
- **Supabase Integration**: Real-time database connection with status monitoring

## Technologies

- **Frontend**:
  - [React](https://reactjs.org/) - UI library
  - [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
  - [Vite](https://vitejs.dev/) - Build tool and development server
  - [React Router DOM](https://reactrouter.com/) - Client-side routing
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [shadcn/ui](https://ui.shadcn.com/) - UI component library

- **Backend**:
  - [Supabase](https://supabase.io/) - Backend-as-a-Service including:
    - PostgreSQL database
    - Authentication
    - Storage
  - [Tanstack Query](https://tanstack.com/query/) - Data fetching and state management

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm or [Bun](https://bun.sh/) package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or with Bun
   bun install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables) section)

4. Start the development server:
   ```bash
   npm run dev
   # or with Bun
   bun run dev
   ```

5. Open your browser and visit `http://localhost:8080`

### Environment Variables

Create or modify `.env` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Development

- **Development server**:
  ```bash
  npm run dev
  ```

- **Build for production**:
  ```bash
  npm run build
  ```

- **Preview production build**:
  ```bash
  npm run preview
  ```

See [scripts.md](./scripts.md) for a complete list of available scripts.

## Project Structure

The project follows a feature-based structure:

```
src/
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── integrations/    # External service integrations (Supabase)
├── lib/            # Utility functions and helpers
├── pages/          # Page components (routes)
└── App.tsx         # Main application component and routing
```

For a detailed breakdown of all files, see [filesExplainer.md](./filesExplainer.md).

## Database

The application uses Supabase as its backend service. The database includes tables for:

- Contact submissions
- User profiles
- Gallery images
- Project information
- Team members

Connection status is monitored and displayed via the `useSupabaseStatus` hook.

## Deployment

The application can be deployed to any static hosting service:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist` directory to your hosting provider.

## Contributing

We welcome contributions to improve the application!

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to your branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

### Coding Standards

- Follow the existing code style and patterns
- Write descriptive commit messages
- Update documentation as needed
- Add tests for new features when applicable

## License

This project is licensed under the MIT License.
