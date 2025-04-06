# AIBD Angular Template

This project provides a Angular boilerplate template based on Angular CLI version 19.2.

## Features

- **Angular 19.2**: Latest Angular with improved performance and features
- **PNPM Package Manager**: Fast, disk space efficient package manager
- **TailwindCSS 3 Integration**: Utility-first CSS framework for rapid UI development
- **Testing Setup**: Pre-configured with Jasmine and [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro/)

## Prerequisites

- Node.js (latest LTS version recommended)
- PNPM

## Getting Started

### Development Server

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

```bash
# Production build
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

```bash
# Run unit tests (single run)
pnpm test

# Run unit tests with watch mode
pnpm test:watch

# Run unit tests with code coverage
pnpm test:coverage
```

Unit tests are executed via [Karma](https://karma-runner.github.io) with Jasmine as the testing framework.

## Styling with TailwindCSS

This project includes TailwindCSS for styling components. The configuration file is located at `tailwind.config.js`.
