# Modern Nuxt 4 Starter Template

A modern, feature-rich Nuxt.js starter template with TypeScript, ESLint, Testing, and SEO optimization pre-configured. Built for Nuxt 4 compatibility.

## ✨ Features

- 🎯 [Nuxt 4](https://nuxt.com/) ready
- ⚡️ Modern development setup with [TypeScript](https://www.typescriptlang.org/)
- 📝 Strict ESLint configuration
- 🧪 Testing setup with [Vitest](https://vitest.dev/) and [Playwright](https://playwright.dev/)
- 🖼️ Built-in image optimization with [@nuxt/image](https://image.nuxt.com/)
- 🔍 SEO optimization with [@nuxtjs/seo](https://nuxtseo.com/)
- 🎨 Icon support with [@nuxt/icon](https://nuxt.com/modules/icon)
- 📱 Custom fonts handling with [@nuxt/fonts](https://nuxt.com/modules/fonts)
- 👨‍💻 VSCode configuration included
- 📦 PNPM package manager for fast, disk space efficient package management

## Prerequisites

- Node.js (v18.0.0 or newer)
- PNPM (v9.0.0 or newer)

## 🚀 Quick Start

1. Clone this repository:

```bash
	git clone https://github.com/rogreyroom/nuxt-pre-config-starter.git
	cd nuxt-pre-config-starter
```

2.	Install dependencies:

```bash
	pnpm install
```
3.	Start development server:

```bash
	pnpm dev
```

Visit http://localhost:3000 to see your application.

## 📁 Project Structure

```
├── app/                # Application source code
│   ├── assets/         # Application assets
│   ├── components/     # Vue components
│   ├── composables/    # Composable functions
│   ├── middleware/     # Application middleware
│   ├── layouts/        # Layout components
│   ├── pages/          # Application pages
│   ├── plugins/        # Nuxt plugins
├──  public/            # Public static assets
├── server/             # Server-side code
├── __tests__/          # Test files
│   ├── e2e/            # End-to-end tests
│   └── unit/           # Unit tests
├── .vscode/            # VSCode configuration
├── nuxt.config.ts      # Nuxt configuration
├── tsconfig.json       # TypeScript configuration
└── vitest.config.ts    # Vitest global configuration
```

## 🛠️ Development

```bash
# Start development server
pnpm dev

# Lint
pnpm lint

# Lint with auto-fix
pnpm lint:fix
```

## 🚀 Production

```bash
# Build for production
pnpm build

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🧪 Testing
This template includes both unit and e2e testing configurations:

```bash
# Run tests
pnpm test

# Run e2e tests
pnpm test:e2e

# Generate coverage
pnpm test:coverage
```

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
