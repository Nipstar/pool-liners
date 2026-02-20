# BESPOKE POOL LINERS — COMPLETE WEBSITE BUILD PROMPT

## PROJECT OVERVIEW

Build a complete, modern, SEO-optimised website for **Bespoke Pool Liners** (bespoke-pool-liners.co.uk) — a Hampshire-based swimming pool liner installation and repair company. The site must be production-ready, mobile-first, fast-loading, and designed to convert visitors into enquiries.

**Business Details:**
- Company: Bespoke Pool Liners
- Owner: Antony Lange
- Location: Romsey, Winchester, North Baddesley, Southampton, Hampshire, UK
- Phone: 07442 986034
- Email: info@bespoke-pool-liners.co.uk
- Services: Custom pool liner installation, replacement, repair, on-site welding
- Materials: Renolit Alkorplan reinforced pool liners, bagged liners
- USPs: 15+ years collective experience, 100+ pool installations, 10-year watertight guarantee, local Hampshire contractors

**Contact Form Webhook:**
All contact/quote forms submit to: `https://antekauto.app.n8n.cloud/webhook-test/c20f44a3-1bf1-4ea0-9bcc-62875d389a4b`

Form fields to send as JSON:
```json
{
  "name": "",
  "email": "",
  "phone": "",
  "postcode": "",
  "service": "",
  "poolType": "",
  "message": "",
  "source": "website",
  "page": "[current page URL]"
}
```

---

## DESIGN SPECIFICATION

### Brand Identity

**Colour Palette:**
- Primary: `#0C3B5E` (deep navy blue — authority, trust, water depth)
- Secondary: `#1E88E5` (bright blue — water, freshness, action)
- Accent: `#00BFA5` (teal — modern, fresh, stands out against blues)
- Light background: `#F5F9FC` (ice blue tint — clean, spacious)
- White: `#FFFFFF`
- Dark text: `#1A2332` (near-black with blue undertone)
- Body text: `#4A5568` (warm grey)
- Success/CTA green: `#00BFA5` (same as accent — for buttons)

**Typography:**
- Headings: Inter or Montserrat — bold, clean, modern sans-serif
- Body: Inter or Open Sans — highly readable at all sizes
- H1: 48px desktop / 32px mobile, font-weight 800
- H2: 36px desktop / 28px mobile, font-weight 700
- H3: 24px desktop / 20px mobile, font-weight 600
- Body: 18px desktop / 16px mobile, font-weight 400, line-height 1.7

### Design Style

**Overall aesthetic:** Premium-modern with clean lines. Think high-end home renovation company, not flashy pool party. Inspired by the best elements of Hydro Leisure Plus (clean structure, trust signals) and Falcon Pools (luxury feel, industry awards) but with a more contemporary, minimalist approach.

**Layout principles:**
- Maximum content width: 1200px, centred
- Generous white space — minimum 80px between sections on desktop
- Full-width hero sections with subtle gradient overlays on images
- Card-based layouts for services and features
- Subtle shadows (box-shadow: 0 4px 20px rgba(12, 59, 94, 0.08))
- Border radius: 12px on cards, 8px on buttons, 6px on inputs
- Smooth scroll behaviour
- Intersection Observer animations — elements fade/slide in on scroll (subtle, not distracting)

**Buttons:**
- Primary CTA: Background `#00BFA5`, text white, hover darken 10%, padding 16px 32px, border-radius 8px, font-weight 600
- Secondary CTA: Outline style, border 2px `#0C3B5E`, text `#0C3B5E`, hover fill
- Ghost CTA: Text link with arrow icon, used for "Learn more" actions

**Navigation:**
- Sticky header with logo left, nav links centre, "Get Free Quote" CTA button right
- Mobile: hamburger menu with full-screen overlay
- Nav links: Home, Services (dropdown), Portfolio, About, Areas We Cover, Blog, Contact
- Services dropdown: Pool Liner Installation, Pool Liner Replacement, Pool Liner Repair, Reinforced Pool Liners, Bagged Pool Liners, On-Site Welding
- Header becomes slightly transparent on scroll with a subtle backdrop blur

**Footer:**
- Dark navy background (`#0C3B5E`)
- Four columns: Company info + logo, Services links, Areas We Cover, Contact info
- Bottom bar: Copyright, Privacy Policy, Terms & Conditions links
- Social links: Instagram, Facebook

---

## SITE STRUCTURE & PAGE-BY-PAGE SPECIFICATION

### PAGE 1: HOMEPAGE (/)

**Meta Title:** `Bespoke Pool Liners | Custom Pool Liner Installation Hampshire`
**Meta Description:** `Expert bespoke pool liner installation across Hampshire & the South of England. Reinforced Renolit liners, 10-year watertight guarantee, 100+ installations. Free quote.`

**HERO SECTION:**
Full-width hero with gradient overlay (left side darker for text readability).

Headline (H1): `Custom Pool Liner Specialists in Hampshire`
Subheadline: `Expert installation, replacement & repair of reinforced swimming pool liners. Renolit Alkorplan certified. 10-year watertight guarantee.`
CTA buttons: `Get Your Free Quote` (primary) | `View Our Work` (secondary/outline)
Trust bar below hero: Three inline badges — "15+ Years Experience" | "100+ Pools Completed" | "10-Year Guarantee"

**[IMAGE PROMPT — HERO]:** A stunning residential swimming pool in a Hampshire countryside garden setting, crystal clear turquoise water, freshly installed deep blue mosaic-pattern reinforced pool liner visible through the water, manicured green lawn surrounding the pool, warm golden hour sunlight, English country house partially visible in background, professional photography style, wide angle, 16:9 aspect ratio.

---

**SERVICES OVERVIEW SECTION:**
Section heading (H2): `Our Pool Liner Services`
Subtext: `From bespoke installations to emergency repairs, we deliver precision-fitted pool liners across Hampshire and the South of England.`

Six service cards in a 3x2 grid (2x3 on tablet, 1x6 on mobile), each card has:
- Icon (use Lucide or similar clean line icons)
- Service title (H3)
- 2-line description
- "Learn more →" link

Cards:

1. **Pool Liner Installation**
   Icon: tool/wrench
   "New pool liner installations tailored to any pool shape or size. On-site welded for a perfect, seamless fit."
   Link: /pool-liner-installation/

2. **Pool Liner Replacement**
   Icon: refresh/cycle
   "Replace worn, faded or damaged liners with modern reinforced alternatives. Transform your pool in days."
   Link: /pool-liner-replacement/

3. **Pool Liner Repair**
   Icon: shield-check
   "Professional leak detection and repair services. Patch or re-weld damaged sections to extend liner life."
   Link: /pool-liner-repair/

4. **Reinforced Pool Liners**
   Icon: layers
   "Premium Renolit Alkorplan reinforced PVC liners — 1.5mm thickness for maximum durability and longevity."
   Link: /reinforced-pool-liners/

5. **Bagged Pool Liners**
   Icon: package
   "Pre-fabricated liners for standard pool shapes. A cost-effective solution with quick installation times."
   Link: /bagged-pool-liners/

6. **On-Site Welding**
   Icon: zap
   "Precision on-site liner welding for irregularly shaped pools. Bespoke fit guaranteed, any shape or size."
   Link: /on-site-pool-liner-welding/

---

**WHY CHOOSE US SECTION:**
Background: Light blue tint (`#F5F9FC`)
Section heading (H2): `Why Hampshire Homeowners Trust Us`

Two-column layout: Left side = image, Right side = content

Right side content — four feature blocks stacked vertically:

1. **Reinforced Renolit Liners as Standard**
   "We use premium Renolit Alkorplan reinforced pool liners on every project. At 1.5mm thick with a polyester mesh core, these liners are built to withstand decades of use, UV exposure, and chemical treatment."

2. **10-Year Watertight Guarantee**
   "Every installation comes with our 10-year watertight guarantee. We stand behind our workmanship because we know the quality of our welds and fittings is second to none."

3. **Bespoke Fit for Any Pool**
   "Freeform, rectangular, kidney-shaped, or completely custom — we weld every liner on-site to ensure a precision fit with no wrinkles, no gaps, and no compromise."

4. **Local Hampshire Team**
   "Based in Romsey, we're your local pool liner specialists. No call centres, no subcontractors — just experienced fitters who take pride in every installation."

**[IMAGE PROMPT — WHY CHOOSE US]:** Close-up photograph of a professional pool liner installer carefully welding a reinforced blue pool liner on-site, hot air welding tool in hand, pristine blue liner material visible, edge of an empty concrete swimming pool shell, professional workwear, shallow depth of field focusing on the welding work, natural daylight, editorial photography style, 4:3 aspect ratio.

---

**PROCESS SECTION:**
Section heading (H2): `How It Works`
Subtext: `From initial survey to finished pool — our straightforward 4-step process.`

Four steps in a horizontal timeline (stacks vertically on mobile):

Step 1: **Free Survey & Quote**
"We visit your property, measure your pool, assess the condition, and provide a detailed, no-obligation quote."

Step 2: **Design & Material Selection**
"Choose from our wide range of Renolit colours and patterns. We'll help you select the perfect liner for your pool and garden."

Step 3: **Professional Installation**
"Our experienced team drains, prepares, and installs your new liner with precision on-site welding for a flawless fit."

Step 4: **Fill, Test & Guarantee**
"We refill your pool, check every seam, and hand over your 10-year watertight guarantee. Aftercare advice included."

---

**PORTFOLIO PREVIEW SECTION:**
Background: White
Section heading (H2): `Recent Transformations`
Subtext: `See the difference a new pool liner makes.`

Three portfolio cards showing before/after — use image slider or side-by-side layout.

**[IMAGE PROMPT — PORTFOLIO 1]:** Before and after swimming pool renovation, split image. Left side: empty concrete swimming pool with old, faded, cracked pale blue liner peeling away, dirty pool floor, neglected garden around it, overcast day. Right side: same pool beautifully restored with a fresh deep blue mosaic-pattern reinforced liner, crystal clear water filled to the top, clean surrounding patio, sunny day. Professional photography, 16:9.

**[IMAGE PROMPT — PORTFOLIO 2]:** Before and after swimming pool liner replacement. Left side: indoor swimming pool with wrinkled, discoloured white/grey old liner, visible staining and water marks on walls. Right side: same indoor pool with a stunning new turquoise plain reinforced liner, smooth and wrinkle-free, underwater lights glowing, clean modern poolroom. Professional photography, 16:9.

**[IMAGE PROMPT — PORTFOLIO 3]:** Before and after garden swimming pool transformation. Left side: irregularly shaped freeform garden pool with deteriorated green-tinged old liner, algae visible, overgrown surroundings. Right side: same freeform pool with beautiful new dark blue reinforced liner perfectly fitted to the organic shape, sparkling clean water, landscaped garden with wooden decking, summer setting. Professional photography, 16:9.

CTA below: `View Full Portfolio →` linking to /portfolio/

---

**TESTIMONIALS SECTION:**
Background: `#F5F9FC`
Section heading (H2): `What Our Customers Say`

Carousel of 3-5 testimonial cards. Each card has:
- Star rating (5 stars, gold)
- Quote text
- Customer name
- Location
- Google logo icon

Placeholder testimonials (owner to replace with real ones):

1. ⭐⭐⭐⭐⭐ "Antony and his team did an incredible job replacing our 20-year-old pool liner. The new Renolit liner looks absolutely stunning and the installation was completed in just three days. Highly recommend." — **James W., Winchester**

2. ⭐⭐⭐⭐⭐ "We had an unusual L-shaped pool that other companies said would be difficult. Bespoke Pool Liners welded a perfect liner on-site — not a single wrinkle. Exceptional craftsmanship." — **Sarah T., Southampton**

3. ⭐⭐⭐⭐⭐ "Professional from start to finish. The free survey was thorough, the quote was fair, and the installation quality was outstanding. Our pool looks brand new." — **David & Clare M., Romsey**

---

**AREAS WE COVER SECTION:**
Section heading (H2): `Serving Hampshire & the South of England`
Subtext: `Based in Romsey, we provide pool liner services across Hampshire and neighbouring counties.`

Interactive map or styled grid showing coverage areas:
- **Hampshire** (primary): Romsey, Winchester, Southampton, Eastleigh, Andover, Basingstoke, Petersfield, New Forest
- **Surrey**: Guildford, Farnham, Woking, Esher, Godalming
- **Berkshire**: Reading, Newbury, Bracknell
- **Dorset**: Bournemouth, Poole, Dorchester
- **Wiltshire**: Salisbury, Amesbury

CTA: `Not sure if we cover your area? Get in touch →`

---

**CTA BANNER SECTION:**
Full-width dark navy background with subtle water texture pattern overlay
Headline: `Ready to Transform Your Pool?`
Subtext: `Get a free, no-obligation survey and quote. Most installations completed within one week.`
CTA button: `Get Your Free Quote` (accent green)
Phone: `Or call us: 07442 986034`

---

### PAGE 2: SERVICES — POOL LINER INSTALLATION (/pool-liner-installation/)

**Meta Title:** `Pool Liner Installation Hampshire | Bespoke Fit, 10-Year Guarantee`
**Meta Description:** `Professional swimming pool liner installation across Hampshire. On-site welded Renolit reinforced liners fitted to any pool shape. 10-year watertight guarantee. Free survey.`

**H1:** `Pool Liner Installation`
**Intro paragraph:** "Whether you're building a new pool or upgrading an existing one, our bespoke liner installation service delivers a precision-fitted, reinforced pool liner tailored to your exact pool dimensions. Every liner is welded on-site using premium Renolit Alkorplan material, ensuring a seamless, watertight finish that lasts for decades."

**Sections to include:**
- Why choose professional installation (vs DIY)
- Our installation process (expanded version of homepage process)
- Types of liners we install (reinforced welded, bagged, patterned)
- Pool shapes we cover (rectangular, freeform, L-shaped, Roman end, kidney, custom)
- What's included in every installation (survey, preparation, installation, filling, guarantee)
- Timeline and what to expect
- FAQ section (3-5 questions with FAQPage schema)
- CTA to get a free quote

**[IMAGE PROMPT — INSTALLATION PAGE HERO]:** Aerial/overhead view of a rectangular residential swimming pool being lined, half of the pool showing the fresh reinforced blue liner being laid into the empty concrete shell, the other half showing finished liner with water beginning to fill, professional installer visible working at the seam, bright sunny day, English garden setting with hedgerows visible, drone photography style, 16:9.

**FAQ questions for this page:**
1. How long does pool liner installation take? — "Most residential installations are completed in 2-5 days, depending on pool size and complexity."
2. Can you install a liner in any shape pool? — "Yes. Our on-site welding process means we can fit a liner to absolutely any pool shape, including freeform and custom designs."
3. What preparation is needed before installation? — "We handle everything — draining, cleaning, surface preparation, and removal of the old liner if replacing."

---

### PAGE 3: SERVICES — POOL LINER REPLACEMENT (/pool-liner-replacement/)

**Meta Title:** `Pool Liner Replacement Hampshire & Surrey | Bespoke Pool Liners`
**Meta Description:** `Expert pool liner replacement across Hampshire and Surrey. Replace worn, faded or leaking liners with premium Renolit reinforced liners. 10-year guarantee. Free quote.`

**H1:** `Pool Liner Replacement`
**Intro:** "Is your pool liner faded, wrinkled, cracking, or leaking? A new reinforced pool liner can completely transform your swimming pool — restoring it to better-than-new condition in just a few days. We specialise in replacing old, worn liners with modern Renolit Alkorplan reinforced liners that are built to last."

**Sections:**
- Signs your pool liner needs replacing (fading, wrinkles, cracks, leaks, staining, age)
- Benefits of replacing vs patching
- What we replace (vinyl, PVC, old bag liners, painted pools)
- Replacement process step-by-step
- Cost factors (pool size, shape complexity, liner material, access)
- Before & after gallery
- FAQ section
- CTA

**[IMAGE PROMPT — REPLACEMENT PAGE]:** Side-by-side comparison of a swimming pool liner replacement. Left portion shows a drained pool with an old, faded, cracked liner being peeled away revealing concrete beneath. Right portion shows the same pool with a brand new deep blue reinforced liner perfectly installed, smooth and pristine. Clear dividing line between old and new. Professional photography, clean lighting, 16:9.

---

### PAGE 4: SERVICES — POOL LINER REPAIR (/pool-liner-repair/)

**Meta Title:** `Pool Liner Repair Hampshire | Leak Fixes & Patch Repairs`
**Meta Description:** `Swimming pool liner repair services across Hampshire. Professional leak detection, patch repairs and seam re-welding. Fast response, lasting repairs. Call today.`

**H1:** `Pool Liner Repair`
**Intro:** "Not every pool liner issue requires a full replacement. Our repair service can fix tears, punctures, seam failures, and small leaks — extending the life of your existing liner and saving you the cost of a full replacement. We assess every pool honestly and only recommend replacement when repair isn't the best option."

**Sections:**
- Common pool liner problems we repair
- Repair vs replacement — our honest assessment
- Types of repairs (patch repair, seam re-welding, fitting repairs)
- Emergency repair service
- When to call us (signs of damage)
- FAQ
- CTA

---

### PAGE 5: SERVICES — REINFORCED POOL LINERS (/reinforced-pool-liners/)

**Meta Title:** `Reinforced Pool Liners UK | Renolit Alkorplan | Bespoke Pool Liners`
**Meta Description:** `Premium reinforced pool liners from Renolit Alkorplan. 1.5mm PVC with polyester mesh core for maximum durability. Wide range of colours and patterns. Hampshire installer.`

**H1:** `Reinforced Pool Liners`
**Intro:** "We exclusively use Renolit Alkorplan reinforced pool liners — the industry-standard choice for durability and longevity. Unlike standard vinyl liners, reinforced liners feature a 1.5mm thick PVC membrane with an embedded polyester mesh core, making them significantly stronger, more resistant to punctures, and longer-lasting."

**Sections:**
- What is a reinforced pool liner? (construction, materials, thickness)
- Renolit Alkorplan range (Plain, Touch, Ceramics, Stone, 3D patterns)
- Reinforced vs standard vinyl — comparison
- Colour gallery/swatches (link to /pool-liner-colours/)
- Durability and lifespan
- Maintenance requirements
- FAQ
- CTA

**[IMAGE PROMPT — REINFORCED LINERS]:** Close-up macro photograph of Renolit Alkorplan reinforced pool liner material, showing the textured surface pattern (mosaic/ceramic style in deep blue), visible quality and thickness of the material, slightly rolled/curved to show the reinforced backing layer with polyester mesh visible, professional product photography on a clean white surface, soft studio lighting, 4:3 aspect ratio.

---

### PAGE 6: SERVICES — BAGGED POOL LINERS (/bagged-pool-liners/)

**Meta Title:** `Bagged Pool Liners Hampshire | Pre-Fabricated Liner Installation`
**Meta Description:** `Pre-fabricated bagged pool liners for standard-shaped pools. Cost-effective liner replacement with professional installation across Hampshire. Free quote.`

**H1:** `Bagged Pool Liners`
**Intro:** "For standard-shaped pools, a pre-fabricated bagged liner can be a cost-effective alternative to on-site welded liners. We supply and install high-quality bagged liners in a range of colours and patterns, professionally fitted to ensure a smooth, wrinkle-free result."

**Sections:**
- What is a bagged liner?
- When a bagged liner is the right choice
- Bagged vs reinforced (honest comparison)
- Available colours and patterns
- Installation process
- FAQ
- CTA

---

### PAGE 7: SERVICES — ON-SITE POOL LINER WELDING (/on-site-pool-liner-welding/)

**Meta Title:** `On-Site Pool Liner Welding Hampshire | Bespoke Fit Any Shape`
**Meta Description:** `Expert on-site pool liner welding for any pool shape or size. Precision hot-air welding of reinforced liners in Hampshire, Surrey & Berkshire. Seamless watertight finish.`

**H1:** `On-Site Pool Liner Welding`
**Intro:** "On-site welding is what sets bespoke pool liners apart from off-the-shelf alternatives. Rather than stretching a pre-made liner into your pool, we bring the raw Renolit material to your property and weld it in-situ using professional hot-air welding equipment. The result is a perfectly tailored liner that fits your pool exactly — no wrinkles, no pulling, and no compromise on fit."

**Sections:**
- How on-site welding works (step-by-step with detail)
- Benefits of on-site welding vs pre-fabricated
- Equipment and technique
- Why welding matters for irregular pools
- FAQ
- CTA

**[IMAGE PROMPT — WELDING PAGE]:** Professional pool liner installer performing hot-air welding on a reinforced PVC pool liner inside a drained residential swimming pool, close-up showing the welding tool creating a clean seam, blue liner material on both sides of the seam, visible precision of the work, natural lighting from above, professional work environment, editorial photography style, 16:9.

---

### PAGE 8: POOL LINER COLOURS (/pool-liner-colours/)

**Meta Title:** `Pool Liner Colours UK | Renolit Alkorplan Colour Range`
**Meta Description:** `Browse our complete range of Renolit Alkorplan pool liner colours and patterns. See how each colour looks underwater. Free colour consultation available.`

**H1:** `Pool Liner Colours & Patterns`
**Intro:** "The colour of your pool liner dramatically affects how your water looks, how your pool integrates with your garden, and the overall atmosphere of your outdoor space. We offer the complete Renolit Alkorplan range — from classic plain blues to stunning mosaic and ceramic patterns."

**Content:**
- Visual colour grid/gallery showing liner swatches
- How colour affects water appearance
- Popular choices for UK pools
- Pattern vs plain
- Tips for choosing (garden style, pool position, light levels)
- Free colour consultation CTA

**[IMAGE PROMPT — COLOUR PAGE]:** Flat-lay arrangement of multiple swimming pool liner sample swatches/squares laid out in an organised grid on a clean white surface, showing different colours and patterns including plain blue, light blue, grey, sand/beige, dark blue mosaic, ceramic pattern, stone texture — Renolit Alkorplan style swatches, professional product photography, overhead shot, soft even lighting, 1:1 aspect ratio.

---

### PAGE 9: PORTFOLIO (/portfolio/)

**Meta Title:** `Pool Liner Portfolio | Before & After Transformations | Hampshire`
**Meta Description:** `Browse our portfolio of swimming pool liner installations across Hampshire. Before and after photos of residential pool transformations. See our quality.`

**H1:** `Our Work`
**Intro:** "Every pool is different, and every project is an opportunity to deliver something exceptional. Browse our portfolio of completed pool liner installations across Hampshire and the South of England."

**Layout:** Masonry or grid gallery with lightbox. Each project shows:
- Before/after images (slider or side-by-side)
- Pool type and location (e.g., "Residential — Winchester")
- Liner type used (e.g., "Renolit Alkorplan Touch — Elegance")
- Brief description

Use 6-8 portfolio items. Images to be replaced by owner with real project photos.

**[IMAGE PROMPT — PORTFOLIO GALLERY 1]:** Beautiful completed residential swimming pool with a fresh mosaic-pattern reinforced liner in Mediterranean blue, rectangular pool with Roman end steps, surrounded by natural stone paving, English country garden with mature trees, outdoor furniture visible, inviting summer scene, professional real estate photography style, 3:2 aspect ratio.

**[IMAGE PROMPT — PORTFOLIO GALLERY 2]:** Completed indoor swimming pool with a plain turquoise reinforced pool liner, clean modern pool room with large glass windows/doors looking onto a garden, underwater LED lights creating a warm glow, steam rising gently from heated water, contemporary architecture, professional interior photography, 3:2 aspect ratio.

**[IMAGE PROMPT — PORTFOLIO GALLERY 3]:** Completed freeform/kidney-shaped garden swimming pool with a dark blue reinforced liner, wooden decking on two sides, natural stone on the other, mature garden setting, pool cover partially retracted, clear water reflecting the sky, typical affluent Hampshire/Surrey residential garden, professional photography, 3:2 aspect ratio.

**[IMAGE PROMPT — PORTFOLIO GALLERY 4]:** Overhead drone photograph of a large L-shaped residential swimming pool with a freshly installed stone-pattern reinforced liner, showing the precise fit around steps and curves, crystal clear water, landscaped garden surrounding the pool, patio furniture and sun loungers visible, English country property, bright summer day, 4:3 aspect ratio.

---

### PAGE 10: ABOUT US (/about-us/)

**Meta Title:** `About Bespoke Pool Liners | Hampshire Pool Liner Specialists`
**Meta Description:** `Meet the team behind Bespoke Pool Liners. 15+ years experience, 100+ installations, based in Romsey, Hampshire. Local experts in reinforced pool liners.`

**H1:** `About Bespoke Pool Liners`
**Intro:** "Bespoke Pool Liners was founded with a simple mission — to provide homeowners across Hampshire with the highest quality pool liner installations, backed by genuine expertise and a guarantee you can trust. Based in Romsey, we're a local team of experienced pool liner specialists who take pride in every installation."

**Sections:**
- Our story (founded by Antony Lange, passion for precision pool work)
- Our approach (quality over quantity, every pool treated as bespoke)
- Our materials (why we chose Renolit Alkorplan as our standard)
- Our guarantee (10-year watertight, what it covers)
- Key stats (15+ years, 100+ pools, 10-year guarantee — displayed as large numbers)
- Team section (photo + bio for Antony, option to add team members)
- CTA

**[IMAGE PROMPT — ABOUT PAGE TEAM]:** Professional portrait photograph of a friendly, experienced pool installer/tradesman in his 40s wearing a clean navy blue polo shirt with subtle company branding, standing confidently next to a freshly completed swimming pool with clear blue water, arms folded, natural smile, English residential garden setting in background, warm natural lighting, professional headshot style, 3:4 aspect ratio.

---

### PAGE 11: AREAS WE COVER (/areas/)

**Meta Title:** `Pool Liner Installation Areas | Hampshire, Surrey, Berkshire & More`
**Meta Description:** `We install pool liners across Hampshire, Surrey, Berkshire, Dorset and Wiltshire. Based in Romsey with nationwide project capability. See areas we cover.`

**H1:** `Areas We Cover`
**Intro:** "Based in Romsey, Hampshire, we provide swimming pool liner services across the South of England. Our primary service area covers Hampshire and neighbouring counties, with project capability extending further for larger installations."

**Layout:** Map with marked areas + detailed text sections for each county:

**Hampshire — Our Home Base** (Primary)
Towns: Romsey, Winchester, Southampton, Eastleigh, Andover, Basingstoke, Petersfield, Fareham, Lymington, New Forest, Stockbridge, Alresford, Whitchurch

**Surrey**
Towns: Guildford, Farnham, Woking, Esher, Godalming, Camberley, Weybridge, Cobham, Dorking, Haslemere

**Berkshire**
Towns: Reading, Newbury, Bracknell, Wokingham, Hungerford

**Dorset**
Towns: Bournemouth, Poole, Dorchester, Christchurch, Wimborne

**Wiltshire**
Towns: Salisbury, Amesbury, Marlborough, Devizes

Each county section: 200-300 words of unique content mentioning local context, followed by a CTA.

---

### PAGE 12: INDIVIDUAL AREA PAGES (Create template for these)

Create a template page that can be duplicated for each key area. Structure:

**URL pattern:** `/areas/[location]/`
**Meta Title pattern:** `Pool Liner Installation [Location] | Bespoke Pool Liners`

**Content template:**
- H1: `Pool Liner Installation in [Location]`
- Intro paragraph mentioning the specific area
- Services available in that area
- Why choose a local installer
- Nearby areas also covered
- Recent projects in the area (placeholder for real photos)
- Contact form
- Embedded Google Map centred on the area

**Create these area pages:**
1. `/areas/hampshire/`
2. `/areas/southampton/`
3. `/areas/winchester/`
4. `/areas/romsey/`
5. `/areas/basingstoke/`
6. `/areas/surrey/`
7. `/areas/berkshire/`
8. `/areas/dorset/`
9. `/areas/wiltshire/`

---

### PAGE 13: FAQ (/faq/)

**Meta Title:** `Pool Liner FAQ | Common Questions Answered | Bespoke Pool Liners`
**Meta Description:** `Answers to common questions about swimming pool liners, installation, costs, materials and maintenance. Expert advice from Hampshire's pool liner specialists.`

**H1:** `Frequently Asked Questions`

Implement FAQPage schema markup on this page.

**Questions & Answers:**

1. **How much does pool liner replacement cost in the UK?**
   "Pool liner replacement costs vary based on pool size, shape complexity, liner material, and access. As a guide, a standard residential pool liner replacement with reinforced Renolit material typically ranges from £3,000 to £8,000 including installation. We provide free, detailed quotes after surveying your pool — so you'll know exactly what to expect before any work begins."

2. **How long does a swimming pool liner last?**
   "A high-quality reinforced pool liner (such as Renolit Alkorplan) typically lasts 15-25 years with proper maintenance. Standard vinyl bag liners may last 8-12 years. Factors affecting lifespan include water chemistry, UV exposure, usage patterns, and installation quality."

3. **What is the difference between a reinforced liner and a bag liner?**
   "A reinforced liner (like Renolit Alkorplan) is 1.5mm thick PVC with an embedded polyester mesh core, welded on-site for a bespoke fit. A bag liner is pre-fabricated in a factory to standard pool dimensions and shipped to site. Reinforced liners are more durable, longer-lasting, and can fit any pool shape, while bag liners are more affordable for standard-shaped pools."

4. **How long does pool liner installation take?**
   "Most residential pool liner installations take 2-5 days from draining to filling. This includes removing the old liner, surface preparation, installing the new liner, and refilling. Complex or large pools may take longer."

5. **Can you install a liner in any shape pool?**
   "Yes. Our on-site welding process means we can fit a reinforced liner to absolutely any pool shape — rectangular, freeform, kidney, L-shaped, Roman end, or completely custom designs."

6. **What colours and patterns are available?**
   "We offer the complete Renolit Alkorplan range, which includes over 40 colours and patterns — from classic plain blues and whites to mosaic, ceramic, stone, and 3D textured designs. We provide samples and colour consultation to help you choose."

7. **Do you provide a guarantee?**
   "Yes. Every liner installation comes with our 10-year watertight guarantee covering the liner material and our installation workmanship."

8. **What happens to my pool water during installation?**
   "We drain your pool completely before installation. Once the new liner is fitted and all seams are checked, we refill the pool with fresh water. We advise on water treatment to get your pool swim-ready as quickly as possible."

9. **Can you repair a damaged pool liner instead of replacing it?**
   "In many cases, yes. Small tears, punctures, and localised damage can often be repaired with a patch or re-weld. We always assess honestly and only recommend full replacement when it's the best option."

10. **Do I need to be at home during installation?**
    "We need access to your pool and a water supply. You don't need to be present for the entire installation, but we do like to walk you through the finished result and hand over your guarantee documentation."

11. **What time of year is best for liner replacement?**
    "We install pool liners year-round, but autumn and winter are ideal for scheduling — your pool is typically out of use, and we can often offer shorter lead times. This means your pool is ready for the following summer season."

12. **How do I maintain my new pool liner?**
    "Keep your water chemistry balanced (pH 7.2-7.6, chlorine 1-3 ppm), avoid dragging sharp objects across the liner, and clean regularly with a pool vacuum. We provide full aftercare guidance with every installation."

---

### PAGE 14: BLOG (/blog/)

**Meta Title:** `Pool Liner Blog | Tips, Guides & Advice | Bespoke Pool Liners`
**Meta Description:** `Expert advice on swimming pool liners, maintenance, costs and installation. Guides and tips from Hampshire's pool liner specialists.`

Blog listing page with card layout. Create 3 initial blog posts:

**Blog Post 1:** "How Much Does Pool Liner Replacement Cost in the UK? (2026 Guide)"
**Blog Post 2:** "Reinforced Pool Liners vs Bag Liners: Which Is Right for Your Pool?"
**Blog Post 3:** "How Long Does a Swimming Pool Liner Last? Signs It's Time to Replace"

Each blog post card shows: featured image, title, excerpt (first 160 chars), date, read time, "Read more →"

**[IMAGE PROMPT — BLOG POST 1 FEATURED]:** Conceptual image representing pool liner costs — a beautiful swimming pool with crystal clear water on one side, and on the other side a close-up of reinforced pool liner material being unrolled, suggesting investment in quality, warm lighting, residential English garden setting, professional photography, 16:9.

**[IMAGE PROMPT — BLOG POST 2 FEATURED]:** Two swimming pool liner types side by side — on the left, a pre-fabricated bagged liner folded and packaged, on the right, a roll of reinforced Renolit-style pool liner material showing the mesh backing, professional product comparison photography, clean white background, informative editorial style, 16:9.

**[IMAGE PROMPT — BLOG POST 3 FEATURED]:** Close-up photograph showing signs of pool liner aging — subtle cracks, slight fading, minor wrinkles in a pale blue pool liner, photographed from the pool edge looking down into a partially drained pool, suggesting the need for assessment, natural daylight, honest documentary photography style, 16:9.

---

### PAGE 15: CONTACT / GET A QUOTE (/contact/)

**Meta Title:** `Contact Bespoke Pool Liners | Free Quote | Hampshire`
**Meta Description:** `Get a free pool liner quote. Contact Bespoke Pool Liners in Hampshire for expert advice on installation, replacement and repair. Call 07442 986034.`

**H1:** `Get Your Free Quote`
**Intro:** "Ready to transform your pool? Fill in the form below and we'll be in touch within 24 hours with a free, no-obligation quote. Alternatively, call us directly to discuss your project."

**Two-column layout:**

**Left column — Contact Form:**
Fields:
- Full Name (required, text)
- Email Address (required, email)
- Phone Number (required, tel)
- Postcode (required, text — helps us confirm coverage area)
- Service Required (required, select dropdown):
  - Pool Liner Installation
  - Pool Liner Replacement
  - Pool Liner Repair
  - Not sure — need advice
- Pool Type (optional, select dropdown):
  - Rectangular
  - Freeform / Irregular
  - L-Shaped
  - Kidney
  - Roman End
  - Other
- Message / Project Details (optional, textarea)
- Submit button: "Send Enquiry" (primary accent green)

**Form submission:** POST to `https://antekauto.app.n8n.cloud/webhook-test/c20f44a3-1bf1-4ea0-9bcc-62875d389a4b`

On success: Show green success message "Thank you! We've received your enquiry and will be in touch within 24 hours."
On error: Show red error message "Something went wrong. Please call us on 07442 986034 instead."

**Right column — Contact Details:**
- 📞 **Call Us:** 07442 986034
- 📧 **Email:** info@bespoke-pool-liners.co.uk
- 📍 **Based in:** Romsey, Hampshire
- 🕐 **Response Time:** Within 24 hours
- 🗓️ **Working Hours:** Mon-Fri 8am-6pm, Sat 9am-1pm

Embedded Google Map showing Romsey, Hampshire area

---

### PAGE 16: TESTIMONIALS (/testimonials/)

**Meta Title:** `Customer Reviews | Pool Liner Testimonials | Bespoke Pool Liners`
**Meta Description:** `Read reviews from our pool liner customers across Hampshire. See why homeowners trust Bespoke Pool Liners for installation and replacement.`

Grid of testimonial cards (to be populated with real reviews). Include Google review widget integration if possible.

---

### PAGE 17: PRIVACY POLICY (/privacy-policy/)

Standard UK GDPR-compliant privacy policy. Include sections on: data collection (form submissions), cookie usage, data storage, third-party sharing, user rights, contact for data requests.

### PAGE 18: TERMS AND CONDITIONS (/terms-and-conditions/)

Standard terms covering: services provided, quotes and pricing, guarantee terms, cancellation policy, liability limitations, dispute resolution.

---

## TECHNICAL SEO IMPLEMENTATION

### Schema Markup (JSON-LD — implement on every page)

**LocalBusiness Schema (homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Bespoke Pool Liners",
  "description": "Expert swimming pool liner installation, replacement and repair in Hampshire. Reinforced Renolit Alkorplan liners with 10-year watertight guarantee.",
  "url": "https://bespoke-pool-liners.co.uk",
  "telephone": "07442986034",
  "email": "info@bespoke-pool-liners.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Romsey",
    "addressRegion": "Hampshire",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.9885,
    "longitude": -1.4996
  },
  "areaServed": [
    {"@type": "State", "name": "Hampshire"},
    {"@type": "State", "name": "Surrey"},
    {"@type": "State", "name": "Berkshire"},
    {"@type": "State", "name": "Dorset"},
    {"@type": "State", "name": "Wiltshire"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pool Liner Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pool Liner Installation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pool Liner Replacement"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pool Liner Repair"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "On-Site Pool Liner Welding"}}
    ]
  },
  "openingHoursSpecification": [
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00"}
  ],
  "sameAs": []
}
```

**FAQPage Schema (FAQ page and service pages with FAQs):**
Implement dynamically based on the Q&A content on each page.

**BreadcrumbList Schema (all pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://bespoke-pool-liners.co.uk"},
    {"@type": "ListItem", "position": 2, "name": "[Page Name]", "item": "https://bespoke-pool-liners.co.uk/[page-slug]/"}
  ]
}
```

### On-Page SEO Checklist (apply to ALL pages)

- Unique H1 tag containing primary keyword
- Meta title under 60 characters with primary keyword
- Meta description under 160 characters with keyword + CTA
- Canonical URL tag
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Alt text on all images (descriptive, keyword-rich, not stuffed)
- Internal links to related pages (minimum 3 per page)
- External links to authority sources where appropriate (Renolit, SPATA)
- Breadcrumb navigation with schema
- Mobile-responsive (test all breakpoints)
- Page speed optimised (lazy load images, compress, minimise CSS/JS)
- robots.txt allowing all crawling
- XML sitemap generated and linked in robots.txt
- 301 redirects from old URL structure to new pages
- HTTPS enforced
- Heading hierarchy (H1 > H2 > H3, never skip levels)
- URL structure: short, lowercase, hyphenated, keyword-relevant

### Performance Requirements

- Target PageSpeed score: 90+ mobile, 95+ desktop
- Lazy load all images below the fold
- Use modern image formats (WebP with fallbacks)
- Minimise JavaScript bundle
- Enable Gzip/Brotli compression
- Implement responsive images with srcset
- Preload critical fonts and hero image
- No render-blocking resources

---

## IMAGE PROMPTS SUMMARY

For use with AI image generation (Midjourney, DALL-E, Flux, etc.) to create mock/placeholder images:

### HERO IMAGE
"A stunning residential swimming pool in a Hampshire countryside garden setting, crystal clear turquoise water, freshly installed deep blue mosaic-pattern reinforced pool liner visible through the water, manicured green lawn surrounding the pool, warm golden hour sunlight, English country house partially visible in background, professional photography style, wide angle, 16:9 aspect ratio, 4K resolution"

### WHY CHOOSE US IMAGE
"Close-up photograph of a professional pool liner installer carefully welding a reinforced blue pool liner on-site, hot air welding tool in hand, pristine blue liner material visible, edge of an empty concrete swimming pool shell, professional workwear, shallow depth of field focusing on the welding work, natural daylight, editorial photography style, 4:3 aspect ratio"

### PORTFOLIO BEFORE/AFTER 1
"Before and after swimming pool renovation, split image. Left side: empty concrete swimming pool with old, faded, cracked pale blue liner peeling away, dirty pool floor, neglected garden around it, overcast day. Right side: same pool beautifully restored with a fresh deep blue mosaic-pattern reinforced liner, crystal clear water filled to the top, clean surrounding patio, sunny day. Professional photography, 16:9"

### PORTFOLIO BEFORE/AFTER 2
"Before and after swimming pool liner replacement. Left side: indoor swimming pool with wrinkled, discoloured white/grey old liner, visible staining and water marks on walls. Right side: same indoor pool with a stunning new turquoise plain reinforced liner, smooth and wrinkle-free, underwater lights glowing, clean modern poolroom. Professional photography, 16:9"

### PORTFOLIO BEFORE/AFTER 3
"Before and after garden swimming pool transformation. Left side: irregularly shaped freeform garden pool with deteriorated green-tinged old liner, algae visible, overgrown surroundings. Right side: same freeform pool with beautiful new dark blue reinforced liner perfectly fitted to the organic shape, sparkling clean water, landscaped garden with wooden decking, summer setting. Professional photography, 16:9"

### INSTALLATION PAGE HERO
"Aerial overhead view of a rectangular residential swimming pool being lined, half of the pool showing the fresh reinforced blue liner being laid into the empty concrete shell, the other half showing finished liner with water beginning to fill, professional installer visible working at the seam, bright sunny day, English garden setting with hedgerows visible, drone photography style, 16:9"

### REPLACEMENT PAGE
"Side-by-side comparison of a swimming pool liner replacement. Left portion shows a drained pool with an old, faded, cracked liner being peeled away revealing concrete beneath. Right portion shows the same pool with a brand new deep blue reinforced liner perfectly installed, smooth and pristine. Clear dividing line between old and new. Professional photography, clean lighting, 16:9"

### REINFORCED LINERS PRODUCT
"Close-up macro photograph of Renolit Alkorplan reinforced pool liner material, showing the textured surface pattern in deep blue mosaic style, visible quality and thickness of the material, slightly rolled to show the reinforced backing layer with polyester mesh visible, professional product photography on clean white surface, soft studio lighting, 4:3 aspect ratio"

### WELDING ACTION SHOT
"Professional pool liner installer performing hot-air welding on a reinforced PVC pool liner inside a drained residential swimming pool, close-up showing the welding tool creating a clean seam, blue liner material on both sides of the seam, visible precision of the work, natural lighting from above, professional work environment, editorial photography style, 16:9"

### COLOUR SWATCHES
"Flat-lay arrangement of multiple swimming pool liner sample swatches laid out in an organised grid on a clean white surface, showing different colours and patterns including plain blue, light blue, grey, sand beige, dark blue mosaic, ceramic pattern, stone texture, professional product photography, overhead shot, soft even lighting, 1:1 aspect ratio"

### COMPLETED POOL 1 (Portfolio)
"Beautiful completed residential swimming pool with a fresh mosaic-pattern reinforced liner in Mediterranean blue, rectangular pool with Roman end steps, surrounded by natural stone paving, English country garden with mature trees, outdoor furniture visible, inviting summer scene, professional real estate photography style, 3:2 aspect ratio"

### COMPLETED POOL 2 (Portfolio)
"Completed indoor swimming pool with a plain turquoise reinforced pool liner, clean modern pool room with large glass windows looking onto a garden, underwater LED lights creating a warm glow, steam rising gently from heated water, contemporary architecture, professional interior photography, 3:2 aspect ratio"

### COMPLETED POOL 3 (Portfolio)
"Completed freeform kidney-shaped garden swimming pool with a dark blue reinforced liner, wooden decking on two sides, natural stone on the other, mature garden setting, pool cover partially retracted, clear water reflecting the sky, typical affluent Hampshire Surrey residential garden, professional photography, 3:2 aspect ratio"

### COMPLETED POOL 4 (Portfolio)
"Overhead drone photograph of a large L-shaped residential swimming pool with a freshly installed stone-pattern reinforced liner, showing the precise fit around steps and curves, crystal clear water, landscaped garden surrounding the pool, patio furniture and sun loungers visible, English country property, bright summer day, 4:3 aspect ratio"

### TEAM/ABOUT PORTRAIT
"Professional portrait photograph of a friendly experienced pool installer tradesman in his 40s wearing a clean navy blue polo shirt, standing confidently next to a freshly completed swimming pool with clear blue water, arms folded, natural smile, English residential garden setting in background, warm natural lighting, professional headshot style, 3:4 aspect ratio"

### BLOG FEATURED 1 (Cost Guide)
"Beautiful swimming pool with crystal clear water on one side, reinforced pool liner material being unrolled on the other suggesting investment in quality, warm lighting, residential English garden setting, professional photography, 16:9"

### BLOG FEATURED 2 (Liner Comparison)
"Two swimming pool liner types side by side, left showing a pre-fabricated bagged liner folded and packaged, right showing a roll of reinforced pool liner material with mesh backing visible, professional product comparison photography, clean white background, 16:9"

### BLOG FEATURED 3 (Liner Lifespan)
"Close-up photograph showing signs of pool liner aging, subtle cracks, slight fading, minor wrinkles in a pale blue pool liner, photographed from the pool edge looking down into a partially drained pool, natural daylight, documentary photography style, 16:9"

---

## FINAL NOTES FOR THE BUILDER

1. **Mobile-first:** Design for mobile first, then scale up. Over 60% of traffic will be mobile.
2. **Speed:** Keep it fast. Minimal JavaScript, optimised images, no bloat.
3. **Conversion-focused:** Every page should have at least one clear CTA above the fold and another at the bottom.
4. **Trust signals everywhere:** The 15+ years, 100+ pools, and 10-year guarantee should appear on every page in some form.
5. **Internal linking:** Every service page should link to related services, the portfolio, and the contact page.
6. **Blog-ready:** The blog needs to be easy to add new posts — this will be the primary ongoing SEO driver.
7. **Form reliability:** The webhook form is critical — test thoroughly with error handling and a fallback phone number.
8. **Accessibility:** WCAG 2.1 AA compliance. Proper heading hierarchy, alt text, colour contrast, keyboard navigation.
9. **Cookie consent:** UK GDPR-compliant cookie banner (minimal cookies, consent before tracking).
10. **Analytics-ready:** Google Analytics 4 and Google Search Console integration points.
