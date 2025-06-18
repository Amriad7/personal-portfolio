# Personal Portfolio

A modern personal portfolio web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Features

- ⚡️ Fast development with [Vite](https://vitejs.dev/)
- 🎨 Styled using [Tailwind CSS](https://tailwindcss.com/) and custom themes
- 🧩 Modular, reusable React components
- 🌙 Dark mode support
- 🛠️ Type-safe with TypeScript
- 🧹 Linting with ESLint and recommended configs
- 📦 Easy component and utility aliasing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

To build for production:

```sh
npm run build
```

### Preview

To preview the production build:

```sh
npm run preview
```

### Lint

To check for lint errors:

```sh
npm run lint
```

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and icons
│   ├── components/       # Reusable UI components
│   │   └── ui/           # Atomic UI components (Button, Logo, etc.)
│   ├── lib/              # Utilities (e.g., className helpers)
│   ├── pages/            # Route components (e.g., Home)
│   ├── App.tsx           # Main app layout
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles and Tailwind config
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Aliases

You can use the following import aliases:

- `@/components` → `src/components`
- `@/components/ui` → `src/components/ui`
- `@/lib` → `src/lib`
- `@/lib/utils` → `src/lib/utils`

## Customization

- **Theme:** Edit `src/index.css` for color and font customization.
- **Components:** Add or modify components in `src/components/` and `src/components/ui/`.
- **Pages:** Add new pages in `src/pages/` and update routing in `src/main.tsx`.

## License

[MIT](LICENSE)

---

Built with ❤️ using React, TypeScript, and Tailwind
