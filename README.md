# CorpData - Company Profile Landing Page

A modern, high-performance company profile landing page built with Next.js 16, React 19, and Tailwind CSS 4. This project is designed to be easily customizable, with content driven by a central JSON configuration file.

## ✨ Features

- **⚡️ Modern Tech Stack**: Built with the latest Next.js 16 (App Router) and React 19.
- **🎨 Tailwind CSS 4**: Utilizing the newest version of Tailwind for efficient styling.
- **🎭 Smooth Animations**: Enhanced user experience with Framer Motion animations.
- **⚙️ Configurable Content**: Easily update company information, mission, vision, and more via `company.json`.
- **📱 Fully Responsive**: Optimized layout for mobile, tablet, and desktop devices.
- **🧩 Component-Based**: Modular architecture using reusable UI components.
- **🔍 SEO Friendly**: Server-side rendering and semantic HTML structure.

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Fetching**: [Tanstack Query](https://tanstack.com/query/latest)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 20 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/company-profile-landing-page.git
    cd company-profile-landing-page
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## ⚙️ Configuration

The content of the website is primarily driven by the `company.json` file located in the root directory. This allows for easy updates without touching the code.

**`company.json` Structure:**

```json
{
    "name": "Company Name",
    "tagline": {
        "prefix": "Tagline Prefix",
        "suffix": "Tagline Suffix"
    },
    "heroDescription": "Short description for the hero section.",
    "about": { ... },
    "vision": { ... },
    "mission": { ... },
    "employeesPage": { ... },
    "projectsPage": { ... },
    "metadata": {
        "title": "SEO Title",
        "description": "SEO Description"
    },
    "footer": { ... }
}
```

Simply modify this file to update the text content across the site.

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
│   ├── home/             # Components specific to the home page
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── ui/               # Generic UI components (Buttons, Cards, etc.)
├── lib/                  # Utility functions and helpers
├── public/               # Static assets (images, fonts, etc.)
├── company.json          # Central configuration for site content
├── tailwind.config.ts    # Tailwind CSS configuration
└── next.config.ts        # Next.js configuration
```

## 📄 License

This project is licensed under the MIT License.

## 🔴 Live Testing

Test the project live on https://company-profile-landing-page-tawny.vercel.app/
