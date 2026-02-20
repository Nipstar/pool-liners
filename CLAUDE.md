# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **marketing website for Bespoke Pool Liners**, a Hampshire-based swimming pool liner installation company. The site is built as a modern, SEO-optimized, mobile-first web application designed to convert visitors into enquiries.

**Tech Stack:**
- Next.js 16 (App Router)
- TypeScript
- React 19
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)

**Business Context:**
- Company: Bespoke Pool Liners (bespoke-pool-liners.co.uk)
- Owner: Antony Lange
- Location: Romsey, Hampshire, UK
- Phone: 07442 986034
- Email: info@bespoke-pool-liners.co.uk
- Services: Pool liner installation, replacement, repair, on-site welding
- Materials: Renolit Alkorplan reinforced pool liners

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Architecture & Code Structure

### Directory Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Navbar/Footer
│   ├── page.tsx                 # Homepage
│   ├── actions/                 # Server Actions
│   │   └── contact.ts           # Form submission webhook
│   ├── [service-pages]/         # Service detail pages
│   ├── areas/                   # Areas we cover pages
│   │   └── [location]/         # Dynamic area pages
│   └── globals.css              # Tailwind CSS v4 config + base styles
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx          # Main navigation (client component)
│   │   └── Footer.tsx          # Site footer
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx           # Polymorphic button/link component
│       ├── Card.tsx             # Card wrapper component
│       └── Section.tsx          # Section wrapper component
└── lib/
    └── utils.ts                 # Utility functions (cn helper)

public/
└── images/                      # Static images (hero, portfolio, etc.)
```

### Design System

**Color Palette** (defined in `globals.css`):
- `primary` (#0C3B5E) - Deep navy blue, used for headers, trust, authority
- `secondary` (#1E88E5) - Bright blue, action color
- `accent` (#00BFA5) - Teal, primary CTA buttons, highlights
- `light-bg` (#F5F9FC) - Ice blue tint background
- `dark-text` (#1A2332) - Near-black with blue undertone for headings
- `body-text` (#4A5568) - Warm grey for body text

**Typography:**
- Primary font: Inter (Google Fonts)
- Font loading: Next.js `next/font/google` with `display: "swap"`
- Headings use `font-heading` (Inter)
- Body text uses `font-sans` (Inter)

**Spacing & Layout:**
- Max content width: 1200px (`max-w-7xl` container class)
- Responsive breakpoints: sm, md, lg (Tailwind defaults)
- Border radius: 12px on cards, 8px on buttons
- Shadows: `shadow-lg`, `shadow-xl` for depth

### Key Architectural Patterns

#### 1. Server vs Client Components
- **Server components by default** - Most pages are server components
- **Client components** use `"use client"` directive (e.g., Navbar.tsx for interactivity)
- Server Actions for form submissions (`actions/contact.ts`)

#### 2. Component Composition
- **Button component** is polymorphic - renders as `<Link>` when `href` prop is provided, otherwise `<button>`
- **Variants pattern** - Components like Button use variant props (`primary`, `secondary`, `ghost`, `accent`)
- **Compound props** - Size variants (`sm`, `md`, `lg`), optional features (`withArrow`)

#### 3. Styling Approach
- **Tailwind CSS v4** with `@theme` directive in `globals.css`
- **Utility-first** - Classes applied directly to elements
- **cn() helper** (`lib/utils.ts`) - Merges Tailwind classes with clsx + tailwind-merge to handle conflicts

#### 4. Path Aliasing
- `@/*` maps to `src/*` (configured in `tsconfig.json`)
- Import example: `import { Button } from '@/components/ui/Button'`

#### 5. Form Submissions
- Contact forms POST to n8n webhook: `https://antekauto.app.n8n.cloud/webhook/c20f44a3-1bf1-4ea0-9bcc-62875d389a4b`
- Server Action in `src/app/actions/contact.ts` handles submission
- Expected payload: `{ name, email, phone, postcode, service, poolType, message, source, page }`

#### 6. SEO & Schema.org
- Schema.org LocalBusiness structured data in root `layout.tsx`
- Meta tags defined per page using Next.js Metadata API
- FAQPage schema should be added to FAQ pages

#### 7. Images
- Use Next.js `<Image>` component from `next/image`
- Images stored in `/public/images/`
- Always provide `alt` text, `fill` for backgrounds, `sizes` for responsive images
- Use `priority` prop for above-the-fold images (hero)

## Important Development Notes

### Design & Brand Guidelines
Refer to `bespoke-pool-liners-builder-prompt.md` for comprehensive design specifications including:
- Complete color palette and usage
- Typography scale (H1-H6, body text sizes)
- Button styles and variants
- Layout principles and spacing
- Navigation structure
- Footer layout
- Trust signals and guarantee messaging

### Content Requirements
Every page should include:
- At least one CTA above the fold
- Trust signals (15+ years, 100+ pools, 10-year guarantee)
- Internal links to related services
- Contact information or quote CTA

### Mobile-First Development
- Design for mobile first, then scale up
- Over 60% of traffic is expected to be mobile
- Test all breakpoints (sm, md, lg, xl)
- Ensure touch targets are at least 44x44px

### Performance Considerations
- Lazy load images below the fold (Next.js Image does this automatically)
- Use `loading="lazy"` for iframes (Google Maps)
- Minimize JavaScript - prefer server components where possible
- Target PageSpeed score: 90+ mobile, 95+ desktop

### Accessibility
- Maintain proper heading hierarchy (H1 → H2 → H3, never skip)
- Provide descriptive alt text for all images
- Ensure color contrast meets WCAG 2.1 AA standards
- Support keyboard navigation (especially for Navbar dropdown)
- Use semantic HTML elements

## Tailwind CSS v4 Specifics

This project uses **Tailwind CSS v4** which has a different syntax than v3:

### Theme Configuration
- Theme is defined using `@theme` in `globals.css` (NOT `tailwind.config.js`)
- Custom colors are defined with CSS variables: `--color-primary`, `--color-accent`, etc.
- Access custom colors in classes: `bg-primary`, `text-accent`, etc.

### CSS Organization
```css
@import "tailwindcss";  // Import Tailwind (not @tailwind directives)

@theme {
  // Custom theme configuration
}

@layer base {
  // Base styles
}
```

## Common Workflows

### Adding a New Page
1. Create `src/app/[page-name]/page.tsx`
2. Define metadata (title, description) using Next.js Metadata API
3. Import shared components from `@/components`
4. Include CTA sections and trust signals
5. Add internal links to related pages
6. Update navigation in `src/components/layout/Navbar.tsx` if needed

### Creating a New Component
1. Place in `src/components/ui/` (for reusable) or `src/components/layout/` (for layout)
2. Use TypeScript for prop types
3. Apply Tailwind classes using `cn()` helper for conditional styling
4. Add `"use client"` directive only if component needs interactivity (useState, useEffect, event handlers)
5. Export as named export: `export { ComponentName }`

### Modifying Styles
1. Edit custom colors/theme in `src/app/globals.css` under `@theme`
2. Use Tailwind utility classes in components
3. For one-off styles, use arbitrary values: `bg-[#custom-color]`
4. For component-specific styles, use `cn()` to merge classes conditionally

### Form Handling
1. Create form component (mark with `"use client"` if using useState)
2. Import server action: `import { submitContactForm } from '@/app/actions/contact'`
3. Call server action with form data
4. Handle success/error states in UI

## Brand Voice & Messaging

- **Tone:** Professional, trustworthy, friendly but not casual
- **USPs to emphasize:**
  - 15+ years collective experience
  - 100+ pool installations
  - 10-year watertight guarantee
  - Renolit Alkorplan certified
  - Local Hampshire contractors (based in Romsey)
  - On-site welding for bespoke fit
- **Target audience:** Affluent homeowners in Hampshire/South England with swimming pools
- **Conversion goal:** Get visitors to request a free quote

## Navigation Structure

Primary navigation links (defined in `Navbar.tsx`):
- Home (/)
- Services (dropdown with 6 service pages)
- Colours (/pool-liner-colours)
- Portfolio (/portfolio)
- About (/about-us)
- Areas We Cover (/areas)
- Blog (/blog)
- FAQ (/faq)

CTA button always visible: "Get Free Quote" → /contact

## External Dependencies & Integrations

- **Form webhook:** n8n webhook for contact form submissions (see `actions/contact.ts`)
- **Google Maps:** Embedded iframe on homepage Areas section and contact page
- **Google Fonts:** Inter font family loaded via `next/font/google`
- **Icons:** Lucide React (tree-shakeable icon library)

## Testing Checklist

Before deploying changes:
- [ ] Test on mobile, tablet, desktop viewports
- [ ] Verify all internal links work
- [ ] Check form submission success/error states
- [ ] Validate schema.org structured data (use Google Rich Results Test)
- [ ] Ensure images have alt text
- [ ] Test keyboard navigation (especially dropdowns)
- [ ] Verify CTAs are visible and functional
- [ ] Check page load performance (Lighthouse)

## Content Reference

For detailed page structure, content blocks, and copy, refer to `bespoke-pool-liners-builder-prompt.md` which contains:
- Complete site structure (18 pages)
- Page-by-page content specifications
- SEO meta titles and descriptions
- Schema.org structured data templates
- Image prompt descriptions
- FAQ content with schema markup
- Testimonial placeholders
