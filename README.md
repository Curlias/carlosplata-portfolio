# Carlos Plata - Professional Portfolio

Professional portfolio website for Carlos Alberto Plata Monroy, Network & Telecommunications Engineer.

## 🎯 Overview

This is a single-page professional portfolio designed for technical recruiters and long-term personal branding. The site showcases real ISP/production network experience, certifications, and technical capabilities.

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel/Netlify

### Key Features
- ✅ Single-page architecture with anchor navigation
- ✅ Automatic language detection (EN/ES) via browser cookies
- ✅ Fully responsive and accessible design
- ✅ Data-driven content (no hardcoded text)
- ✅ Component-based architecture
- ✅ Production-ready code

## 📁 Project Structure

```
carlosplata-web/
├── app/
│   ├── layout.tsx          # Root layout and metadata
│   ├── page.tsx            # Home page (single page)
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Fixed navigation with smooth scroll
│   ├── Hero.tsx            # Hero section
│   ├── Summary.tsx         # Professional summary
│   ├── Skills.tsx          # Core skills
│   ├── Experience.tsx      # Work experience
│   ├── Projects.tsx        # Technical projects
│   ├── Certifications.tsx  # Certifications
│   ├── Volunteering.tsx    # Volunteering experience
│   ├── Writing.tsx         # Blog/articles section
│   ├── Contact.tsx         # Contact information
│   └── Footer.tsx          # Footer
├── lib/
│   ├── data/
│   │   ├── types.ts        # TypeScript type definitions
│   │   └── profile.ts      # Centralized data model
│   └── i18n/
│       ├── config.ts       # i18n configuration
│       ├── dictionaries.ts # Dictionary loader
│       └── dictionaries/   # EN/ES translations
│           ├── en.json
│           └── es.json
├── middleware.ts           # Auto-detect language
└── README.md
```

## 🌐 Internationalization

The site automatically detects the user's preferred language from the `Accept-Language` header and sets a cookie (`NEXT_LOCALE`). No manual language switcher is needed.

### Supported Languages
- **English** (en)
- **Spanish** (es)

### Adding Content
All content is centralized in `/lib/data/profile.ts`. To add new projects, certifications, or articles:

1. Open [lib/data/profile.ts](lib/data/profile.ts)
2. Add entries to the respective arrays
3. Ensure both English and Spanish translations are provided

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Content Management

### Profile Data
All professional information is stored in [lib/data/profile.ts](lib/data/profile.ts):

- **profile**: Name, title, contact information
- **skills**: Technical skills organized by category
- **experiences**: Work experience with responsibilities
- **projects**: Technical projects (ready for expansion)
- **certifications**: Professional certifications
- **volunteering**: Community involvement
- **education**: Academic background
- **articles**: Blog posts (ready for expansion)

### UI Translations
UI labels and messages are in [lib/i18n/dictionaries/](lib/i18n/dictionaries/):
- `en.json` - English translations
- `es.json` - Spanish translations

## 🎨 Design System

### Colors
- **Background**: White (#ffffff)
- **Text**: Gray-900 (#111827)
- **Accents**: Gray-50, Gray-100, Gray-200 for sections
- **Links**: Blue-600 (#2563eb)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, clear hierarchy
- **Body**: Regular weight, comfortable line-height

### Layout
- **Max Width**: 4xl (896px) for content
- **Spacing**: Consistent 20px section padding
- **Navigation**: Fixed header with 80px offset

## 🔧 Customization

### Adding a New Section

1. Create component in `/components/NewSection.tsx`
2. Add section data to `/lib/data/profile.ts`
3. Import and render in `/app/page.tsx`
4. Add navigation item in `/components/Navigation.tsx`
5. Add translations to dictionary files

### Modifying Styles

All styles use Tailwind CSS utility classes. Global styles are in [app/globals.css](app/globals.css).

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The site is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Any platform supporting Node.js

## 📄 License

Private project. All rights reserved.

## 👤 Contact

**Carlos Alberto Plata Monroy**
- Email: info@carlosplata.dev
- LinkedIn: [linkedin.com/in/carlohpl](https://linkedin.com/in/carlohpl/)
- Location: Querétaro, Mexico

---

**Note**: This site is designed as a professional network engineering portfolio, focusing on technical accuracy and recruiter-friendly presentation. No marketing fluff, no buzzwords—just clear, factual information about real production experience.
