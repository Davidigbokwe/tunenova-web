# Tunenova

A modern music streaming web application built with Next.js, React, and Tailwind CSS.

## Features

- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **Responsive Design**: Optimized for all screen sizes
- **TypeScript**: Full type safety for better development experience
- **Component Library**: Extensive UI components for rapid development
- **Dark Mode**: Built-in theme switching support

## Tech Stack

- **Framework**: Next.js 16.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Davidigbokwe/tunenova-web.git
cd tunenova-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
  app/              # Next.js app router
    components/     # Page-specific components
    fans/           # Fans page
    privacy/        # Privacy policy
    terms/          # Terms of service
  components/       # Reusable UI components
    ui/            # Base UI components
  hooks/           # Custom React hooks
  lib/             # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
