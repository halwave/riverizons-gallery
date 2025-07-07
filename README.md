# Riverizons Gallery

A modern art gallery website showcasing traditional, digital, and photography artwork. Built with React, Vite, and Tailwind CSS, featuring responsive design and full-screen artwork previews.

## Features

- Responsive grid layout for artwork display
- Full-screen artwork preview functionality
- Category-based navigation (Traditional, Digital, Photography)
- Loading states and error handling
- TypeScript for type safety
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/halwave/riverizons-gallery.git

# Navigate to project directory
cd riverizons-gallery

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```plaintext
src/
├── assets/           # Processed assets (optimized by Vite)
├── components/       # Reusable React components
├── pages/           # Page components
├── public/          # Static assets (served directly)
│   └── test-images/ # Test artwork images
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Contributing

Contributions are welcome! Please submit a pull request with:

1. Clear description of changes
2. Updated tests if applicable
3. Documentation updates if needed

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- TypeScript for type safety
- React for component architecture
