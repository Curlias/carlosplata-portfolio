# UI Components

This directory contains reusable UI components following shadcn/ui structure.

## Components

### DotScreenShader

Interactive shader background with mouse trail effect using React Three Fiber.

**Features:**
- WebGL-powered animated dot grid
- Mouse interaction with trail effect
- Theme-aware (light/dark mode support)
- Smooth animations and transitions
- High-performance rendering

**Usage:**
```tsx
import { DotScreenShader } from '@/components/ui/dot-shader-background'

export default function MyComponent() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <DotScreenShader />
      </div>
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </div>
  )
}
```

**Dependencies:**
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Helper components for R3F
- `three` - 3D library
- `next-themes` - Theme provider for dark mode

### ThemeProvider

Wrapper for next-themes to provide theme context throughout the app.

**Usage:**
Already integrated in the root layout.

## Development

When adding new UI components:
1. Place them in `/components/ui/`
2. Use TypeScript for type safety
3. Follow the existing naming conventions
4. Make components responsive by default
5. Support dark mode when applicable
