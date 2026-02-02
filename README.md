# Top 5 Toenail Fungus Treatments - React App

A React + TypeScript application showcasing the best toenail fungus treatment alternatives.
Converted from a static httrack clone to a modern, maintainable React application.

## Features

- **React + TypeScript**: Modern, type-safe React application
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework (configured)
- **Responsive Design**: Mobile-friendly layout with preserved original styles
- **Centralized Configuration**: All CTA links and assets centralized for easy updates
- **No Tracking Scripts**: All tracking and analytics scripts removed
- **SEO Optimized**: Proper meta tags and semantic HTML

## Project Structure

```
├── public/
│   └── images/          # Organized image assets
│       ├── hero/        # Hero images
│       ├── icons/       # Icons (checkmarks, etc.)
│       ├── logos/       # Site logo
│       ├── products/    # Product images
│       └── testimonials/ # Customer testimonial images
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx   # Site header
│   │   ├── Footer.tsx   # Site footer
│   │   ├── Sidebar.tsx  # Testimonials sidebar
│   │   └── ProductSection.tsx # Reusable product review component
│   ├── config/          # Configuration files
│   │   ├── ctaLinks.ts  # Call-to-action link configuration
│   │   └── assets.ts    # Centralized asset paths
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── styles.css       # Preserved original styles
```

## Configuration

### CTA Links
All call-to-action links are centralized in `src/config/ctaLinks.ts`:
- `SWISSKER_PRODUCT`: Primary CTA for Swissker Anti-Fungal Stick
- `FORTIFYX_PRODUCT`: Secondary CTA for Fortifyx Oil of Oregano

To update links, simply modify the values in this configuration file.

### Assets
All image paths are centralized in `src/config/assets.ts` for easy maintenance.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The dev server runs at `http://localhost:5173/` with hot module replacement (HMR).

## Building

```bash
npm run build
```

The build output is in the `dist/` directory, ready for deployment.

## Styles

All original styles from the httrack clone have been preserved exactly in `src/styles.css`.
DO NOT MODIFY these styles to maintain visual consistency with the original site.

## Removed Features

The following tracking scripts have been removed:
- Google Tag Manager
- PageSense analytics
- Varify.io tracking
- Adtribute tracking

## License

All Rights Reserved © 2026
