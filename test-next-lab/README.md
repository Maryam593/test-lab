# Test Next Lab

A modern Next.js application showcasing various UI components and authentication features with backend database integration, built with TypeScript and styled using Kokonut UI components.

## Features

- **Authentication**: Login and signup pages with secure password hashing using bcrypt/bcryptjs
- **Database Integration**: PostgreSQL with Sequelize ORM for data modeling
- **Interactive Components**: Card flip, morphic navbar, particle buttons, mouse effect cards, type writer, shape hero, and more
- **Pages**: Home, About, Contact, Legal Documents, Works
- **Responsive Design**: Built with Tailwind CSS and Framer Motion for smooth animations
- **TypeScript**: Fully typed for better development experience
- **Particle Animations**: TSParticles integration for engaging visual effects
- **API Routes**: RESTful API endpoints for authentication

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: bcrypt/bcryptjs for password hashing
- **Styling**: Tailwind CSS with Kokonut UI components
- **Animations**: Framer Motion and TSParticles
- **Icons**: Lucide React
- **UI Library**: Radix UI primitives
- **Backend Services**: Supabase integration available
- **Build Tools**: ESLint for code quality

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
│   ├── api/               # API routes
│   │   ├── login/         # Login API endpoint
│   │   └── signup/        # Signup API endpoint
│   ├── (auth)/            # Authentication routes
│   │   ├── login/         # Login page
│   │   ├── signup/        # Signup page
│   │   └── forgetPassword/# Password recovery page
│   ├── (main)/            # Main application routes
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── LegalDocs/     # Legal documents page
│   │   └── works/         # Works/portfolio page
│   ├── models/            # Sequelize data models
│   │   ├── User.ts        # User model definition
│   │   └── Token.ts       # Token model for auth
│   ├── utlis/             # Utility functions
│   │   ├── dbConnect.ts   # Database connection with Sequelize
│   │   └── dbSync.ts      # Database synchronization
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── kokonutui/        # Kokonut UI components
│   │   ├── auth-buttons.tsx
│   │   ├── card-flip.tsx
│   │   ├── morphic-navbar.tsx
│   │   ├── mouse-effect-card.tsx
│   │   ├── particle-button.tsx
│   │   ├── shape-hero.tsx
│   │   ├── social-button.tsx
│   │   ├── tweet-card.tsx
│   │   └── type-writer.tsx
│   ├── ui/               # Base UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Footer.tsx        # Footer component
│   ├── LogoMain.tsx      # Logo component
│   ├── ParticleAnimation.tsx  # Particle animation component
│   └── step.tsx          # Step indicator component
├── supabase/             # Supabase configuration
│   └── supabaseClient.ts # Supabase client setup
├── lib/                   # Utility functions
│   └── utils.ts          # Helper utilities
├── public/               # Static assets
└── Configuration files
    ├── next.config.ts    # Next.js configuration
    ├── tsconfig.json     # TypeScript configuration
    ├── tailwind.config.mjs # Tailwind CSS config
    ├── postcss.config.mjs  # PostCSS configuration
    ├── eslint.config.mjs   # ESLint configuration
    ├── components.json     # Component library config
    └── proxy.ts          # Proxy configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database Configuration
DB_NAME=your_database_name
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_LOCALHOST=localhost

# Node Environment
NODE_ENV=development
```

## Database Setup

1. Ensure PostgreSQL is installed and running
2. Create a database with the name specified in `DB_NAME`
3. The Sequelize models will automatically sync with your database on connection

## Authentication

- User registration and login with bcrypt password hashing
- Secure password storage in the database
- Support for password recovery via the "Forgot Password" page
- Token-based authentication support

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Kokonut UI](https://kokonutui.com) - Component library used
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Sequelize ORM](https://sequelize.org/) - Database ORM for Node.js
- [PostgreSQL](https://www.postgresql.org/) - Database system
- [Supabase](https://supabase.com/) - Backend as a service option

## Deploy on Vercel

Deploy your Next.js app easily with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Ensure your PostgreSQL database is accessible from your deployment environment and all environment variables are set in Vercel's dashboard.

For more deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying). 