# CliniGlobal Research Institute - System Architecture

## Overview

This is a full-stack web application for CliniGlobal Research Institute, a clinical research training institute. The application serves as the primary digital presence for the institute, featuring course information, testimonials, placements data, and various educational resources. It's built using a modern React frontend with an Express.js backend, designed for deployment on Replit with PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom healthcare-themed design system
- **UI Components**: Shadcn/ui components with Radix UI primitives
- **State Management**: React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API design with `/api` prefix
- **Middleware**: Custom logging, JSON parsing, error handling
- **Development**: Hot module replacement with Vite integration

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for production)
- **Connection**: Neon Database serverless driver
- **Migrations**: Drizzle Kit for schema management
- **Development Storage**: In-memory storage implementation for testing

## Key Components

### Shared Schema (`shared/schema.ts`)
- Centralized database schema definitions
- Zod validation schemas for type safety
- User entity with username/password authentication structure

### Storage Interface (`server/storage.ts`)
- Abstract storage interface for CRUD operations
- Memory-based implementation for development
- Ready for PostgreSQL integration in production

### Component Structure
- **Layout Components**: Header, Footer, Hero sections
- **Page Components**: Individual course pages, listings, informational pages
- **UI Components**: Reusable components like testimonial sliders, contact modals
- **Interactive Elements**: Chatbot, contact forms, navigation

### Course System
- Individual course pages (CRM, Medical Coding, Clinical SAS, ADCR)
- Dynamic course listings with filtering
- Contact modal system for enrollment and inquiries
- Testimonial integration for social proof

## Data Flow

### Client-Side Flow
1. React components fetch data through React Query
2. Client-side routing handled by Wouter
3. Form submissions processed through contact modals
4. State management for UI interactions (modals, sidebars, carousels)

### Server-Side Flow
1. Express routes handle API endpoints (placeholder structure)
2. Storage interface abstracts database operations
3. Custom middleware for request logging and error handling
4. Vite integration for development hot reloading

### Development vs Production
- Development: In-memory storage, Vite dev server
- Production: PostgreSQL database, static file serving

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Framer Motion**: Animation library (limited usage)

### Database and ORM
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL
- **Drizzle Kit**: Migration and schema management

### Development Tools
- **Vite**: Build tool and dev server
- **ESBuild**: Production bundling
- **TypeScript**: Type safety across the stack
- **React Query**: Server state management

### Fonts and Assets
- **Google Fonts**: Poppins font family
- **Pexels Images**: Stock photography for testimonials and course content

## Deployment Strategy

### Build Process
1. Frontend builds to `dist/public` using Vite
2. Backend compiles to `dist/index.js` using ESBuild
3. Static assets served by Express in production

### Environment Configuration
- `NODE_ENV` determines development vs production mode
- `DATABASE_URL` required for PostgreSQL connection
- Replit-specific configurations for hosted environment

### Development Workflow
- `npm run dev`: Starts development server with hot reloading
- `npm run build`: Creates production build
- `npm run start`: Runs production server
- `npm run db:push`: Applies database schema changes

### Replit Integration
- Custom Vite plugins for Replit environment
- Runtime error overlay for development
- Cartographer plugin for enhanced debugging

## Architecture Decisions

### Monorepo Structure
**Problem**: Managing shared types and schemas between frontend and backend
**Solution**: Shared directory with common TypeScript definitions
**Benefits**: Type safety across the stack, reduced duplication

### Storage Abstraction
**Problem**: Need for flexible database implementation during development
**Solution**: Abstract storage interface with multiple implementations
**Benefits**: Easy testing, flexible deployment options

### Component-Based Architecture
**Problem**: Complex UI requirements with reusable elements
**Solution**: Modular React components with shared UI library
**Benefits**: Consistency, maintainability, rapid development

### Static + Dynamic Hybrid
**Problem**: Marketing site needs with potential for dynamic features
**Solution**: Static-first approach with API-ready backend structure
**Benefits**: Fast loading, SEO-friendly, scalable for future features