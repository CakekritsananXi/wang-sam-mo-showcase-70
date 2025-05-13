
# Project Scripts Documentation

This document provides information about the available npm/bun scripts in the project's `package.json` file and how to use them.

## Available Scripts

### `dev`

**Purpose**: Starts the development server.

**Usage**:
```bash
npm run dev
# or
bun run dev
```

**Details**: This script runs Vite in development mode, starting a local development server at http://localhost:8080. It includes hot module replacement (HMR) for fast refresh during development. The server automatically rebuilds when files are changed.

### `build`

**Purpose**: Creates a production-ready build of the application.

**Usage**:
```bash
npm run build
# or
bun run build
```

**Details**: This script compiles the TypeScript code, bundles the application with Vite, and outputs the optimized assets to the `dist` directory. It includes minification, code splitting, and other optimizations.

### `lint`

**Purpose**: Runs ESLint to check for code quality issues.

**Usage**:
```bash
npm run lint
# or
bun run lint
```

**Details**: Checks the project's JavaScript/TypeScript code for potential errors, style issues, and enforces coding standards. It uses the configuration from `eslint.config.js`.

### `preview`

**Purpose**: Serves the production build locally for preview.

**Usage**:
```bash
npm run preview
# or
bun run preview
```

**Details**: After running `build`, this script serves the production build from the `dist` directory for local testing. This is useful to verify the production build before deployment.

### `type-check`

**Purpose**: Runs TypeScript type checking without emitting files.

**Usage**:
```bash
npm run type-check
# or
bun run type-check
```

**Details**: Performs static type checking to identify type errors without generating output files. This is useful for quickly verifying type safety.

### `format` (if available)

**Purpose**: Formats code using Prettier.

**Usage**:
```bash
npm run format
# or
bun run format
```

**Details**: Automatically formats all project files according to Prettier configuration to maintain consistent code style.

## Script Combinations

### Complete Check Before Committing

To ensure your code meets all quality standards before committing:

```bash
npm run type-check && npm run lint && npm run build
```

### Development with Type Checking

For more rigorous development with real-time type checking:

```bash
npm run type-check --watch
```

In another terminal:

```bash
npm run dev
```

## CI/CD Usage

These scripts are typically used in continuous integration pipelines to ensure code quality:

```bash
# Example CI pipeline steps
- npm ci
- npm run type-check
- npm run lint
- npm run build
```

## Customizing Scripts

To modify or add scripts, edit the `scripts` section in `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .ts,.tsx",
    "type-check": "tsc --noEmit"
  }
}
```
