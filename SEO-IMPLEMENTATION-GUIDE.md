# SEO Implementation Guide

## ✅ What's Been Implemented

### 1. Schema Components (Complete)
- ✅ `LocalBusinessSchema` - For homepage
- ✅ `ServiceSchema` - For service pages
- ✅ `FAQSchema` - For FAQ page
- ✅ `BreadcrumbSchema` - For all pages
- ✅ Location: `/src/components/seo/SchemaOrg.tsx`

### 2. Metadata Helper (Complete)
- ✅ `generateMetadata()` function for consistent meta tags
- ✅ `PAGE_METADATA` object with all page definitions
- ✅ Includes Open Graph and Twitter Card tags
- ✅ Location: `/src/lib/metadata.ts`

### 3. Pages Already Updated
- ✅ Homepage (`/`) - LocalBusinessSchema + BreadcrumbSchema + Metadata
- ✅ Pool Liner Installation (`/pool-liner-installation`) - ServiceSchema + BreadcrumbSchema + Metadata
- ✅ FAQ Page (`/faq`) - FAQPage Schema + BreadcrumbSchema + Metadata

### 4. Infrastructure
- ✅ Sitemap with proper priorities (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Environment variables setup

---

## 📋 Pages Still Need Updating

### Service Pages (Need Service Schema + Breadcrumbs + Metadata)
- [ ] `/pool-liner-replacement`
- [ ] `/pool-liner-repair`
- [ ] `/reinforced-pool-liners`
- [ ] `/bagged-pool-liners`
- [ ] `/on-site-pool-liner-welding`
- [ ] `/pool-liner-colours`

### Other Pages (Need Breadcrumbs + Metadata)
- [ ] `/portfolio`
- [ ] `/about-us`
- [ ] `/areas`
- [ ] `/blog`
- [ ] `/contact`
- [ ] `/testimonials`
- [ ] `/privacy-policy`
- [ ] `/terms-and-conditions`

---

## 🚀 How to Update Each Page

### For Service Pages

**Step 1:** Add imports at the top of the file:
```typescript
import { generateMetadata as genMeta, PAGE_METADATA } from '@/lib/metadata';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/SchemaOrg';
```

**Step 2:** If there's existing metadata, replace it with:
```typescript
export const metadata = genMeta(PAGE_METADATA.poolLinerReplacement); // Use correct key
```

**Step 3:** Add schema components at the start of the return statement:
```typescript
export default function PoolLinerReplacementPage() {
  return (
    <>
      <ServiceSchema
        name="Pool Liner Replacement"
        description="Expert pool liner replacement across Hampshire and Surrey..."
        url="/pool-liner-replacement"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Pool Liner Replacement', url: '/pool-liner-replacement' }
      ]} />

      {/* Rest of your page content */}
    </>
  );
}
```

**Available metadata keys in PAGE_METADATA:**
- `poolLinerReplacement`
- `poolLinerRepair`
- `reinforcedPoolLiners`
- `baggedPoolLiners`
- `onSiteWelding`
- `poolLinerColours`

---

### For Other Pages (Portfolio, About, etc.)

**Step 1:** Add imports:
```typescript
import { generateMetadata as genMeta, PAGE_METADATA } from '@/lib/metadata';
import { BreadcrumbSchema } from '@/components/seo/SchemaOrg';
```

**Step 2:** Add metadata:
```typescript
export const metadata = genMeta(PAGE_METADATA.portfolio); // Use correct key
```

**Step 3:** Add breadcrumb schema:
```typescript
export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' }
      ]} />

      {/* Rest of your page content */}
    </>
  );
}
```

**Available metadata keys:**
- `portfolio`
- `aboutUs`
- `areas`
- `blog`
- `contact`
- `testimonials`
- `privacyPolicy`
- `termsConditions`

---

### For Client Components ("use client")

If a page has `"use client"` at the top, you need to create a separate `layout.tsx`:

**Create `/app/[route]/layout.tsx`:**
```typescript
import { generateMetadata as genMeta, PAGE_METADATA } from '@/lib/metadata';

export const metadata = genMeta(PAGE_METADATA.contact); // Use correct key

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

Then in the page.tsx, you can still use schema components:
```typescript
"use client"
import { BreadcrumbSchema } from '@/components/seo/SchemaOrg';

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[...]} />
      {/* Rest of component */}
    </>
  );
}
```

---

## 🎯 Quick Copy-Paste Templates

### Pool Liner Replacement Page
```typescript
// At top of file
import { generateMetadata as genMeta, PAGE_METADATA } from '@/lib/metadata';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/SchemaOrg';

export const metadata = genMeta(PAGE_METADATA.poolLinerReplacement);

// In component return
<>
  <ServiceSchema
    name="Pool Liner Replacement"
    description="Expert pool liner replacement across Hampshire and Surrey. Replace worn, faded or leaking liners with premium Renolit reinforced liners."
    url="/pool-liner-replacement"
  />
  <BreadcrumbSchema items={[
    { name: 'Home', url: '/' },
    { name: 'Pool Liner Replacement', url: '/pool-liner-replacement' }
  ]} />
  {/* Existing content */}
</>
```

### Portfolio Page
```typescript
// At top of file
import { generateMetadata as genMeta, PAGE_METADATA } from '@/lib/metadata';
import { BreadcrumbSchema } from '@/components/seo/SchemaOrg';

export const metadata = genMeta(PAGE_METADATA.portfolio);

// In component return
<>
  <BreadcrumbSchema items={[
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' }
  ]} />
  {/* Existing content */}
</>
```

---

## ✅ Verification Checklist

After updating each page:

1. **Check it compiles:**
   ```bash
   npm run build
   ```

2. **Verify metadata** - View page source and look for:
   - `<title>` tag with correct content
   - `<meta name="description">` with description
   - `<meta property="og:title">` for Open Graph
   - `<meta name="twitter:card">` for Twitter

3. **Verify schema** - View page source and look for:
   - `<script type="application/ld+json">` with schema markup
   - Validate at: https://validator.schema.org/

4. **Test sitemap:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/sitemap.xml
   ```

---

## 📊 Progress Tracker

### Service Pages (6 total)
- ✅ Pool Liner Installation
- ⬜ Pool Liner Replacement
- ⬜ Pool Liner Repair
- ⬜ Reinforced Pool Liners
- ⬜ Bagged Pool Liners
- ⬜ On-Site Welding

### Content Pages (8 total)
- ⬜ Pool Liner Colours
- ⬜ Portfolio
- ⬜ About Us
- ⬜ Areas We Cover
- ⬜ Blog
- ⬜ Contact
- ⬜ Testimonials
- ⬜ Privacy Policy
- ⬜ Terms & Conditions

### Special Pages
- ✅ Homepage
- ✅ FAQ (with FAQPage schema)

**Total Progress: 3/17 pages (18%)**

---

## 🔧 Troubleshooting

### TypeScript Error: "Cannot redeclare block-scoped variable 'metadata'"
**Problem:** The page already has a metadata export.
**Solution:** Replace the old metadata export, don't add a new one.

### Error: "generateMetadata is not a function"
**Problem:** Wrong import name.
**Solution:** Make sure to use `import { generateMetadata as genMeta ... }`

### Client Component Can't Export Metadata
**Problem:** Page has "use client" directive.
**Solution:** Create a separate `layout.tsx` file for metadata (see guide above).

### Schema Not Showing in Page Source
**Problem:** Schema components need to be in the component tree.
**Solution:** Make sure they're inside the `<>` fragment in the return statement.

---

## 🎨 Next Steps After Pages Are Updated

1. **Create Open Graph Images**
   - Create 1200x630px images for each main page
   - Save in `/public/images/og/`
   - Update metadata.ts to reference them

2. **Add Analytics**
   - Google Analytics 4
   - Google Tag Manager
   - Track form submissions and phone clicks

3. **Performance Optimization**
   - Add blur placeholders to images
   - Optimize image sizes
   - Add WebP versions

4. **Content Enhancement**
   - Write blog posts (see SEO prompt for topics)
   - Add more testimonials
   - Create location-specific pages

5. **Testing**
   - Run Lighthouse audit
   - Test on mobile devices
   - Check Core Web Vitals
   - Validate all schema markup

---

## 📚 Resources

- **Schema Validator:** https://validator.schema.org/
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Meta Tags Preview:** https://metatags.io/
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Lighthouse:** Built into Chrome DevTools

---

**Last Updated:** 2026-02-20
**Status:** Initial SEO implementation in progress
