# Refill Mobile App Landing Page

## Overview

This is a React-based landing page for the Refill mobile application, a fuel station queue management and virtual payment system. The application is built with a modern full-stack architecture using React frontend, Express.js backend, PostgreSQL database with Drizzle ORM, and styled with Tailwind CSS and shadcn/ui components.

## Recent Changes

### January 28, 2025
- Changed first feature section from "Qoidabuzarliklar va jarimalarni nazorat qilish" to "Onlayn tarzda navbatga oling" 
- Updated feature description to focus on "Vaqtingizni tejang hamda navbatingiz kelganda shahobchaga boring"
- Updated all feature bullet points to focus on online queue booking, push notifications, and QR code payments
- Applied changes across all supported languages (Uzbek, Russian, English)
- Fixed character encoding issues preventing proper display of feature section titles

### January 27, 2025
- Renamed "Ilova interfeysi" section to "Ilova qulayliklari" (App Conveniences) in all supported languages
- Removed three screenshot elements from the app screenshots section
- Added red gradient background with animated gradients to contact section
- Changed contact section text to white for better contrast on red background
- Increased textarea height in contact form to match adjacent cards (8 rows + 200px min-height)
- Updated footer to simple black background without animated gradients

## User Preferences

Preferred communication style: Simple, everyday language.
Image display preference: Clean PNG images without containers, shadows, or rounded corners.
Design inspiration: Dark theme with red-to-dark circular gradients inspired by road24.uz.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact forms, newsletter subscriptions, and download tracking
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development**: Hot reload with Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Fallback**: In-memory storage implementation for development

## Key Components

### Database Schema
The application defines three main entities:
- **Users**: For potential authentication (username/password)
- **Contacts**: For storing contact form submissions
- **Newsletters**: For email subscription management

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/contacts` - Retrieve contact messages (admin)
- `POST /api/track-download` - Track app download analytics

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Main landing area with app features
- **Features Section**: Detailed feature explanations with screenshots
- **App Screenshots**: Interactive showcase of mobile app interfaces
- **Download Section**: Call-to-action for app downloads
- **Contact Section**: Contact form with real-time submission
- **Footer**: Links and additional information

## Data Flow

1. **User Interaction**: Users interact with landing page components
2. **Form Submission**: Contact and newsletter forms use React Hook Form with Zod validation
3. **API Communication**: TanStack React Query handles HTTP requests to Express backend
4. **Data Validation**: Server validates input using Drizzle Zod schemas
5. **Database Operations**: Drizzle ORM performs type-safe database operations
6. **Response Handling**: Success/error states displayed via toast notifications

## External Dependencies

### Frontend Libraries
- **UI Framework**: React with TypeScript support
- **Styling**: Tailwind CSS, Radix UI, class-variance-authority
- **Forms**: React Hook Form with Hookform resolvers
- **HTTP Client**: TanStack React Query
- **Icons**: Lucide React icons
- **Date Handling**: date-fns library

### Backend Libraries
- **Server**: Express.js with TypeScript
- **Database**: Drizzle ORM with Neon serverless PostgreSQL
- **Validation**: Zod for runtime type checking
- **Session**: connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Build**: Vite with React plugin
- **Database**: Drizzle Kit for migrations and schema management
- **TypeScript**: Strict type checking across the stack
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Images and icons served from `attached_assets`

### Environment Configuration
- **Development**: NODE_ENV=development with hot reload
- **Production**: NODE_ENV=production with optimized builds
- **Database**: DATABASE_URL environment variable required

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database access
- Static file serving capability
- Environment variable support

The application is designed for easy deployment on platforms like Replit, Vercel, or traditional VPS hosting with proper environment configuration.