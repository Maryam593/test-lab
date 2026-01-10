# Test Next Lab

A modern Next.js application showcasing various UI components and authentication features, built with TypeScript and styled using Kokonut UI components.

## Features

- **Authentication**: Login and signup pages with custom auth buttons
- **Interactive Components**: Card flip, morphic navbar, particle buttons, mouse effect cards, and more
- **Pages**: Home, About, Contact, Legal Documents, Works
- **Responsive Design**: Built with Tailwind CSS and Framer Motion for animations
- **TypeScript**: Fully typed for better development experience

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Kokonut UI components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Library**: Radix UI primitives

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test-next-lab
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
test-next-lab/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   │   ├── login/         # Login page
│   │   └── signup/        # Signup page
│   ├── (main)/            # Main application routes
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── LegalDocs/     # Legal documents page
│   │   └── works/         # Works/portfolio page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── kokonutui/        # Kokonut UI components
│   └── ui/               # Base UI components
├── lib/                   # Utility functions
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Kokonut UI](https://kokonutui.com) - Component library used
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

## Deploy on Vercel

Deploy your Next.js app easily with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying). 