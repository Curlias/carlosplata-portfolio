# UI Components

This directory contains reusable UI components following shadcn/ui structure.

## Components

### TubelightNavBar

Animated navigation bar with "tubelight" effect using Framer Motion.

**Features:**
- Smooth animations with spring physics
- Active tab indicator with glowing effect
- Responsive design (icons on mobile, text on desktop)
- Fixed positioning (top on desktop, bottom on mobile)
- Backdrop blur for modern glassmorphism effect

**Usage:**
```tsx
import { Home, User, Briefcase } from 'lucide-react'
import { NavBar } from '@/components/ui/tubelight-navbar'

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Projects', url: '#projects', icon: Briefcase },
]

export default function MyPage() {
  return <NavBar items={navItems} />
}
```

**Dependencies:**
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `@/lib/utils` - cn() utility function

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

## Utilities

### cn()

Utility function to merge Tailwind CSS classes with proper precedence.

**Location:** `/lib/utils.ts`

**Usage:**
```tsx
import { cn } from '@/lib/utils'

<div className={cn('base-class', condition && 'conditional-class', className)} />
```

## Development

When adding new UI components:
1. Place them in `/components/ui/`
2. Use TypeScript for type safety
3. Follow the existing naming conventions
4. Make components responsive by default
5. Support dark mode when applicable
6. Use `cn()` for class merging
7. Export component types when needed
