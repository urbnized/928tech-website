# Assumptions for 928Tech Marketing Website

During the planning and discovery phase, the following assumptions and design choices were made based on the project brief:

## 1. Core Target Audience & Voice
- **Target Audience:** Local small business owners in Northern and Western Arizona (cities like Prescott, Flagstaff, Sedona, Lake Havasu, Bullhead City, and Kingman). This includes local services (plumbers, electricians, contractors), real estate, hospitality, tourism (jeep tours, cabin rentals), and professional practices (clinics, dentists).
- **Tone:** Friendly, Fair, and Professional. Copy will be straight-talking, benefit-driven, and highly transparent. It will avoid complex buzzwords unless explained simply (e.g. SEO/AEO/GEO explained as "Getting found on Google, Siri, Alexa, and ChatGPT").

## 2. Branding & Visual Design System
- **Theme:** Dark Mode by default. This aligns with modern tech/digital agencies, provides a sleek, high-contrast container, and matches the "canyon midnight" vibe of Arizona.
- **Colors:** Derived from the Arizona state flag, local desert colors, and the attached logo:
  - Deep Canyon Blue (`#002868`) - Base brand color, representing stability and professionalism.
  - Saguaro Green (`#0BB55C`) - Primary accent from the logo's "928", representing growth and local trust.
  - Sunset Red (`#BF0A30`) - Highlights and primary actions, representing energy.
  - Sunset Gold/Yellow (`#FED700`) - Secondary highlights and warnings.
  - Arizona Copper (`#CE5C17`) - Earthy accent, symbolizing Arizona's copper heritage.
- **Logo:** Since the logo is transparent and we want maximum performance, we will recreate a beautiful, scalable, inline SVG version of the logo featuring the state outline of Arizona, the mountain outline, the saguaro cactus, the red/yellow sunburst rays, and the customized "928TECH Arizona's Web Design" text. This guarantees 100/100 performance scores without layout shift (CLS) or blurry image scaling.

## 3. Technology Stack & Integrations
- **Framework:** Astro (v5.x), configured as a static site for maximum performance and security.
- **Hosting / Deployment:** Cloudflare Pages (fully compatible with static Astro sites, providing global CDN edge delivery, fast load speeds, and robust security).
- **E-Commerce Requirement:** The brief mentions "E-Commerce" as a required feature. For a marketing site of a web designer, this will be represented by an interactive, transparent client checkout/payment integration demo (e.g., Stripe Payment Links, custom invoice generator concept, or client portal payment mockup) showing how 928Tech implements e-commerce for their own clients.
- **Form Submissions:** Contact and Quote forms will be configured to use a client-side JavaScript handler that validates input and shows interactive success/loading/error animations. For a production deployment, this can be seamlessly wired to Cloudflare Pages Functions, Netlify Forms, Formspree, or a CRM.

## 4. Content Structure
- **Blog:** Written articles will serve to educate local business owners on practical digital marketing topics. We will build local structured data (Schema.org `BlogPosting`) for optimal SEO.
- **Services:** Three primary service pathways will be emphasized:
  1. **Web Design:** High-performance, bespoke local small business websites.
  2. **Fast Secure Hosting:** Managed, stress-free, lightning-fast Arizona hosting.
  3. **SEO / AEO / GEO:** Organic search visibility + AI citation engine readiness.
