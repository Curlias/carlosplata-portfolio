# Architecture Documentation

## Design Decisions

### Single Page Architecture
The entire site is implemented as a single page (`/`) with multiple sections. This design choice:

1. **Simplifies navigation**: Users can scroll or use anchor links to navigate
2. **Improves performance**: All content loads once, no route transitions
3. **Better for recruiters**: Easy to scan and review entire profile
4. **Future-proof**: Components are designed to be easily separated into routes if needed

### Internationalization Strategy

**Auto-detection approach:**
- Middleware reads `Accept-Language` header on first visit
- Sets `NEXT_LOCALE` cookie with detected language
- No manual language switcher (reduces UI complexity)
- Cookie persists for 1 year

**Why this approach:**
- Professional sites should respect browser preferences
- Reduces UI clutter (no language toggle)
- Works automatically for 99% of users
- Can be easily extended with manual override if needed

### Data-Driven Content

All content is centralized in `/lib/data/profile.ts` and separated from components:

**Benefits:**
- Easy to update without touching UI code
- Type-safe with TypeScript interfaces
- Single source of truth for all content
- Enables future CMS integration without component changes

**Structure:**
```typescript
// Type definitions in types.ts
interface Experience { ... }

// Data in profile.ts
export const experiences: Experience[] = [ ... ]

// Components receive data as props
<Experience data={experiences} />
```

### Component Structure

Each section is a standalone component following these principles:

1. **Receives dictionary and locale as props**
2. **No hardcoded strings** (all text from data or i18n)
3. **Responsive by default** (Tailwind utilities)
4. **Accessible** (semantic HTML, proper ARIA when needed)

Example:
```typescript
interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Hero({ dict, locale }: HeroProps) {
  // Component logic
}
```

### Navigation System

**Fixed header with smooth scroll:**
- Client component for interactive features
- Active section detection based on scroll position
- Smooth scroll behavior with proper offset for fixed header
- Responsive design (mobile menu can be added later)

**Why anchor-based navigation:**
- Simple and reliable
- Works without JavaScript (progressive enhancement)
- Standard web pattern
- Easy to bookmark sections

## Technical Choices

### TypeScript
- Full type safety across the application
- Better developer experience with autocomplete
- Catches errors at compile time
- Self-documenting code with interfaces

### Tailwind CSS
- Utility-first approach for rapid development
- No CSS conflicts or specificity issues
- Small production bundle (unused styles purged)
- Consistent design system via configuration

### Next.js App Router
- Latest Next.js architecture
- Server components by default (better performance)
- Simple file-based routing
- Built-in optimization (images, fonts, etc.)

## Performance Considerations

1. **Server Components**: Most components are server components (no JS shipped to client)
2. **Font Optimization**: Inter font loaded via next/font
3. **No External Dependencies**: Minimal package.json, fast builds
4. **Static Generation**: Can be exported as static site if needed

## Scalability

### Easy Additions

**Adding a project:**
```typescript
// lib/data/profile.ts
export const projects: Project[] = [
  {
    id: 'my-project',
    title: { en: 'Title', es: 'Título' },
    // ...
  }
];
```

**Adding a blog post:**
```typescript
// lib/data/profile.ts
export const articles: Article[] = [
  {
    id: 'article-slug',
    title: { en: 'Title', es: 'Título' },
    // ...
  }
];
```

### Future Enhancements

The architecture supports these additions without major refactoring:

1. **Multi-page site**: Extract sections to `/about`, `/projects`, etc.
2. **CMS Integration**: Replace static data with API calls
3. **Blog with MDX**: Add `/blog/[slug]` route, use MDX for articles
4. **Contact Form**: Add API route for form submissions
5. **Analytics**: Add Google Analytics or similar
6. **SEO Improvements**: Add structured data (JSON-LD)

## Security Considerations

1. **No sensitive data**: All information is public
2. **No user input**: Static site, no forms (yet)
3. **HTTPS only**: Should be deployed with SSL
4. **No third-party scripts**: Minimal attack surface

## Browser Support

Targeting modern browsers:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

No IE11 support needed (end-of-life).

## Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- Sufficient color contrast (WCAG AA)
- Keyboard navigation support
- Responsive design (mobile-friendly)

## Deployment Notes

**Environment Variables:** None required (static content)

**Build Command:** `npm run build`

**Output:** Static export possible with `output: 'export'` in next.config.js

**CDN Compatibility:** Full (no server-side features required)

---

This architecture prioritizes **simplicity**, **maintainability**, and **performance** while remaining flexible for future growth.
