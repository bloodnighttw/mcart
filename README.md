# MCart

A modern hybrid monorepo combining Rust and React applications with TypeScript, built with Turborepo for efficient development workflows.

## 🏗️ Project Structure

This is a Turborepo monorepo containing:

### Applications (`apps/`)

- **`runner/`** - Rust CLI application built with Cargo
- **`web/`** - React web application with Vite, TailwindCSS, and Tanstack Router

### Packages (`packages/`)

- **`ui/`** - Shared React component library with TypeScript
- **`eslint-config/`** - Shared ESLint configurations for the monorepo
- **`typescript-config/`** - Shared TypeScript configurations

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **pnpm** 9.0.0 (recommended package manager)
- **Rust** (latest stable version)
- **Cargo** (comes with Rust)

### Installation

```bash
pnpm install # Install all dependencies(include rust crate) for the monorepo, run this command from the root directory
```

## 🛠️ Development

### Available Scripts

From the root directory, you can run:

```bash
# Start all applications in development mode
pnpm dev

# Build all applications and packages
pnpm build

# Run linting across all packages
pnpm lint

# Format code across all packages
pnpm format

# Type check all TypeScript packages
pnpm check-types
```

## 📁 Workspace Configuration

This project uses:

- **Turborepo** for orchestrating builds and development workflows
- **pnpm workspaces** for Node.js package management
- **Cargo workspaces** for Rust package management
- Shared configurations for consistent code style and type checking

### Turborepo Tasks

The monorepo is configured with the following tasks:

- `build` - Builds all applications and packages
- `dev` - Starts development servers
- `lint` - Runs linting across all packages
- `check-types` - Type checks TypeScript packages

## 📦 Building for Production

```bash
pnpm build # Builds all applications and packages for production, run this command from the root directory 
```

## 🤝 Contributing

1. Fork the repository
2. Clone your fork (`git clone <URL>`)
3. Create your feature branch (`git checkout -b feature/YourFeature`)
4. Commit your changes (`git commit -m 'Add some feature'`) and ensure to follow the commit message conventions
5. Push to the branch (`git push origin feature/YourFeature`)
6. Ensure all tests pass and code is formatted
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
