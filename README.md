# Bob Mulet

A [Next.js](https://nextjs.org/) salon web application built with Material-UI v7, React 19, and TypeScript. Covers salon services, haircare products, promotions, and account management.

**Tech Stack:** Next.js 16.1.1 · React 19.2.3 · MUI v7.3.6 · Tailwind CSS v4.1.17 · TypeScript

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure Documentation

### Root Level
- **`src/`** - Main source code directory containing all application code
- **`public/`** - Static assets served directly (images, icons, fonts)
- **`declarations.d.ts`** - TypeScript global type declarations
- **`next.config.ts`** - Next.js configuration (routes, redirects, build settings)
  - `images.unoptimized: true` — allows blob URLs and local upload paths to render without Next.js image optimization pipeline
- **`tsconfig.json`** - TypeScript compiler configuration
- **`package.json`** - Project dependencies and scripts

### Core Directories

#### `src/@core/`
Core reusable functionality used across the entire application.

- **`types.ts`** - Shared TypeScript type definitions
- **`components/`** - Reusable UI components
  - `custom-inputs/` - Custom form input components
  - `mui/` - Material-UI component extensions
  - `option-menu/` - Dropdown/context menu components
  - `scroll-to-top/` - Scroll to top button component
- **`contexts/`** - React Context providers
  - `settingsContext.tsx` - Global app settings (theme, layout, mode)
- **`hooks/`** - Custom React hooks
  - `useImageVariant.ts` - Light/dark image variant selector
  - `useLayoutInit.ts` - Layout initialization logic
  - `useObjectCookie.ts` - Cookie management utilities
  - `useSettings.tsx` - Settings context consumer hook
- **`styles/`** - Global styles and Tailwind CSS files
  - `stepper.ts` - Styled components for steppers
  - `table.css` - Table styling (Tailwind `@apply`)
  - `vertical/` - Vertical layout specific styles
  - `horizontal/` - Horizontal layout specific styles
- **`svg/`** - SVG icon components
  - Layout icons, logo, theme icons (RTL/LTR, skins, etc.)
- **`theme/`** - Material-UI theme configuration
  - `colorSchemes.ts` - Light/dark color palettes
  - `customShadows.ts` - Custom shadow definitions
  - `shadows.ts` - Material-UI shadow overrides
  - `spacing.ts` - Spacing system configuration
  - `typography.ts` - Typography settings
  - `overrides/` - Component-specific theme overrides
- **`utils/`** - Utility functions
  - `serverHelpers.ts` - Server-side helper functions (cookies, mode detection)

#### `src/@layouts/`
Layout wrapper components that define page structure.

- **`BlankLayout.tsx`** - Minimal layout (for login, 404 pages)
- **`LayoutWrapper.tsx`** - Layout selector/wrapper component
- **`VerticalLayout.tsx`** - Main vertical navigation layout
- **`HorizontalLayout.tsx`** - Horizontal navigation layout
- **`components/`** - Layout-specific components
  - `vertical/` - Vertical layout component pieces (Navbar, Footer, LayoutContent)
  - `horizontal/` - Horizontal layout component pieces (Header, Footer, LayoutContent, Navbar)
- **`styles/`** - Layout styling
  - `shared/` - Shared layout styles
  - `vertical/` - Vertical layout specific styles
  - `horizontal/` - Horizontal layout specific styles (StyledContentWrapper, StyledFooter, StyledHeader)
- **`utils/`** - Layout utilities
  - `layoutClasses.ts` - CSS class name generators

#### `src/@menu/`
Navigation menu system (sidebar, mobile menu).

- **`defaultConfigs.ts`** - Default menu configuration
- **`types.ts`** - Menu-related TypeScript types
- **`components/`** - Menu UI components
  - `RouterLink.tsx` - Next.js Link wrapper for menu items
  - `vertical-menu/` - Vertical menu components (MenuItem, SubMenu, etc.)
  - `horizontal-menu/` - Horizontal menu components (HorizontalNav, Menu, MenuItem, SubMenu, etc.)
- **`contexts/`** - Menu state management
  - `verticalNavContext.tsx` - Vertical navigation state
  - `horizontalNavContext.tsx` - Horizontal navigation state
- **`hooks/`** - Menu-related hooks
  - `useVerticalMenu.tsx` - Vertical menu logic
  - `useVerticalNav.tsx` - Navigation state hook
  - `useHorizontalMenu.tsx` - Horizontal menu logic
  - `useHorizontalNav.tsx` - Horizontal navigation state hook
  - `useMediaQuery.tsx` - Responsive breakpoint detection
- **`styles/`** - Menu styling
  - Various styled components for menu elements
  - `vertical/` - Vertical menu specific styles
  - `horizontal/` - Horizontal menu specific styles
- **`svg/`** - Menu icons (chevrons, close, etc.)
- **`utils/`** - Menu utilities
- **`vertical-menu/`** - Vertical menu implementation
- **`horizontal-menu/`** - Horizontal menu implementation

#### `src/app/(dashboard)/`
Dashboard routes. All pages use the horizontal layout.

- **`layout.tsx`** - Dashboard layout (horizontal nav + footer, lazy-loaded `FooterContent`)
- **`page.tsx`** - Root redirect → `/home`
- **`shared-page.css`** - Reusable Tailwind layout classes imported by per-page CSS:
  - `.pgHero` / `.pgHeroShort` - Full-width hero containers
  - `.pgHeroOverlayImg` / `.pgHeroContainer` - Hero image + content wrapper
  - `.pgTwoCol` / `.pgTwoColForward` - Two-column responsive flex layouts
  - `.pgCol` - Flex column child
  - `.pgImgBox` / `.pgImgBox43` / `.pgImgBox169` - Aspect-ratio image containers
  - `.pgCoverImg` / `.pgContainImg` - `object-cover` / `object-contain` helpers
  - `.pgSection` / `.pgSectionCenter` - Section padding helpers
  - `.pgCard` / `.pgCardImg` / `.pgCardBody` - Standard card
  - `.pgCardGrid` - 1→3 column responsive card grid
  - `.pgProductBox` / `.pgProductGrid` / `.pgProductCard` - Product layout helpers
  - `.pgScrollRow` / `.pgScrollCard` / `.pgScrollCardImgBox` / `.pgScrollCardBody` - Horizontal scroll row
  - `.pgGreenSection` / `.pgGreenSectionInner` - Green-screen banner
  - `.pgPrimaryLabel` / `.pgBoldTitle` / `.pgBodyMuted` / `.pgWhiteText` - Typography helpers
  - `.pgRoundBtn` - Pill-shaped button radius

#### `src/app/(dashboard)/promotions/`
All 6 promotion routes are fully implemented.

##### `promotions/overview/`
- **`page.tsx`** - Full promotions overview page:
  - **Hero banner** — `GreenScreen.png` full-bleed background; centered over it: white content box (subheading → heading → text → "Book Now" button) + `DahmianNew.png` character pinned to banner bottom
  - **Offer card section** — centered white card with `Scissors.png` icon, heading, text, "Claim Offer" button, "*One-time offer only" disclaimer
  - **5 alternating split sections** (text ↔ image, reversing each time) each with heading, body text, "Learn more →" link
  - **FAQ banner** — full-width gradient green (`#66bb6a → #0d3b0d`) with centered white card: heading, text, "More FAQs" pill button
- **`promotions-overview.css`** — all scoped styles: hero, content box, offer card, split sections, FAQ banner, responsive breakpoints

##### `promotions/senior-discounts/`
- **`page.tsx`** - Full senior discounts page:
  - **Hero** — `greatClips-products-solutions.jpg` left (520×420, `object-contain`), subheading + h1 right; top-aligned, horizontally centered at max-width 1100px
  - **Compact green card** (`max-width: 860px`, `border-radius`, gradient `#66bb6a → #0d3b0d`, centered) — left: heading + paragraph; right: white card with 3 bullet points + "Claim Discount" pill button
  - **White split box** (`max-width: 860px`, centered, 50/50) — left: subheading → heading → text → "Check In Now" button; right: `greatClips-home-seniors-ron.png` fill
  - **Full-width gradient green section** — centered heading + subtext + 3 white cards side-by-side (heading, text, outlined pill button)
- **`senior-discounts.css`** — all scoped styles with responsive breakpoints

##### `promotions/haircare-sale/`
- **`page.tsx`** - Full haircare sale page (same structure as senior-discounts, without the white split box):
  - **Hero** — `FiberCream_solutions.jpg` left, "Limited Time / Haircare Sale" right
  - **Compact green card** (gradient) — "Why Shop Our Haircare Sale?" left + white bullet card ("Sale Highlights") with "Shop Now" right
  - **Full-width gradient green section** — 3 white image cards (16:9 image → heading → text → "Read more →" link) using product images: Tea Tree Shampoo, Curl Hydra Soufflé, Styling Paste
- **`haircare-sale.css`** — all scoped styles

##### `promotions/college-football-playoff/`
- **`page.tsx`** — CFP partnership page:
  - **Hero** — `CFP_interim_hero.jpg` left (520×420), subheading + h1 right
  - **Video section** — text left / video player right
  - **Green gradient card** — centered white card with emoji, heading, text, "Find a Salon" pill button
- **`college-football-playoff.css`**

##### `promotions/ncaa/`
- **`page.tsx`** — NCAA March Madness partnership page:
  - **Hero** — image left, subheading + h1 right
  - **Green section** — heading + text + "Download the App" button left / image right
  - **White section** — text left / image right
- **`ncaa.css`**

##### `promotions/nhl/`
- **`page.tsx`** — NHL Official Hair Salon partnership page:
  - **Hero** — image left, subheading + h1 right
  - **Green section (reversed)** — image left / text + "Find a Salon" button right
  - **Videos section** — grid of video cards (phone + landscape formats)
- **`nhl.css`**

#### `src/app/(dashboard)/services/`
All 10 service routes are fully implemented.

- **`overview/`** — Services overview: GreenScreen hero + white content box, 4 alternating split sections
  - `services-overview.css`
- **`men/`** — Men's haircut page (reference/gold-standard layout): GreenScreen hero, center intro, green gradient section, split sections, horizontal scroll style rows
  - `men-services.css`
- **`women/`** — Women's services: hero, center intro, green section, split sections, scroll style rows
  - `women-services.css`
- **`kids/`** — Kids' services: same structure as men/women
  - `kids-services.css`
- **`seniors/`** — Seniors services: hero, discount info, split sections
  - `seniors-services.css`
- **`additional/`** — Additional services: hero, service cards grid, split sections
  - `additional-services.css`
- **`check-in/`** — Online Check-In: hero, step-by-step instructions, app download CTA
  - `check-in-services.css`
  - **`check-in/booknow/`** — Queue check-in form (sole booking route — replaces former per-product duplicates):
    - Green-gradient **wait-time banner** at the top (salon name, address, live wait pill — colour-coded green ≤15 min / red ≥40 min)
    - Populates from URL params passed by FindSalon: `?salonName=...&salonAddress=...&waitTime=...`
    - Wrapped in `<Suspense>` for SSR-safe `useSearchParams`
    - Form sections: Personal Info (first + last name), Contact (phone + optional email), Service (dropdown, 7 options), Special Requests (textarea)
    - Client-side validation with inline field errors
    - **Success state**: "You're in the queue!" confirmation with name, salon, wait time, phone
    - Lazy-loaded `FooterContent`
    - `booknow.css` (imports `shared-page.css`)
- **`clip-notes/`** — Clip Notes feature: hero, feature breakdown, split sections
  - `clip-notes.css`
- **`lookbook/`** — Lookbook: hero, center intro, green gradient section, horizontal scroll rows for Men's/Women's/Kids' styles, split sections
  - `lookbook-services.css`
  - **`lookbook/Style/`** — Individual style detail page (sticky two-panel layout):
    - Left panel: sticky portrait card with GreenScreen background + layered character image
    - Right panel (scrollable): style name, tags (Chips), description, cut frequency
    - "Style Details" accordion section (How to Style, What to Tell Your Stylist, Best Hair Types)
    - "Recommended Products" row (product image + subheading + heading)
    - "What to Tell Your Stylist" script card with copyable quote
    - `Style-lookbook-services.css`
- **`blog/`** — Blog listing: card grid with category filter chips, delete confirmation dialog, loading skeletons, empty state
  - `blog.css`
- **`blog/new/`** — New blog post: two-column layout (TipTap editor left, publish sidebar right), image upload with live preview, dynamic category management (add/remove with in-use guard), localStorage-persisted categories
- **`blog/[id]/`** — Edit blog post: same two-column layout as new, pre-populated fields, image preview, save/publish/draft workflow

#### `src/app/(dashboard)/products/`
All product routes are fully implemented.

- **`manage/details/[id]/`** — Product detail page: fetches product by ID via `/api/products/[id]`, renders `ProductDetails` component; uses `React.use()` to unwrap async `params` Promise (Next.js 16)
- **`manage/edit/[id]/`** — Product edit page: loads product data, renders `ProductForm` with image upload, PUTs updates back via API; uses `React.use()` for async `params`
- **`manage/add/`** — Add product page: renders empty `ProductForm` with image upload, POSTs new product via API
- **`manage/[categorySlug]/`** — Category-filtered product listing: resolves `params` with `React.use()`, fetches category + filtered products from API
- **`overview/`** — Products overview using the reusable `ProductSection` component:
  - GreenScreen hero + white content box
  - Four grid sections: Solutions by Great Clips, Tea Tree Solutions, Latitude, Salon Products
  - Uses `pgProductBox` + `pgProductGrid` + `pgProductCard` layout pattern
  - `products-page.css`
- **`solution/`** — Solutions: hero, center intro, 4 grid sections (Shampoo & Conditioner, Styling, Curl, Kids), split section
- **`tea-tree-solutions/`** — Tea Tree Solutions: hero, center intro, Tea Tree Collection grid, split section
- **`latitude/`** — Latitude: hero, center intro, 2 grid sections (Shampoo & Conditioner, Styling), split section
- **`other/`** — Redirects to `/products/overview#salon-products`

#### `src/app/(dashboard)/about/`
All routes use `MaintenancePage`.

#### `src/app/(dashboard)/FindSalon/`
- **`page.tsx`** — Find a Salon page: full-height split layout (320 px sidebar + live Leaflet map). Features:
  - Interactive OpenStreetMap tile layer via `react-leaflet` (loaded with `next/dynamic, ssr: false` to avoid SSR `window` errors)
  - Salon list in sidebar filtered by map viewport bounds — updates on every pan/zoom
  - Search bar filters visible salons by name
  - Each salon row shows wait time in green and a **Check In** button linking to `/services/check-in/booknow?salonName=…&salonAddress=…&waitTime=…`
  - Clicking a pin or list row selects the salon, flies the map to it, and expands a **Book Now — Join Queue** CTA strip at the bottom of the sidebar
  - Salon data sourced from `src/app/salons-map/data/salon.json`; map logic from `src/app/salons-map/`
- **`FindSalon.css`** — Tailwind references loaded; map fills the right panel via 100% height.
- **Mobile responsive layout** — on screens ≤768px the layout stacks vertically: map on top (50vh, `order: 1`) and salon list on bottom (50vh, `order: 2`); on desktop the sidebar stays on the left with the map on the right.

#### `src/app/salons-map/`
Shared map module consumed by both `/FindSalon` and `/salons-map`.
- **`data/salon.json`** — Array of salon objects: `{ id, name, address, lat, lng, image?, waitTime? }`
- **`types/salon.ts`** — `Salon` interface (includes optional `waitTime: number`)
- **`hooks/useMapSync.ts`** — `useMapSync(salons)` — tracks visible salons by map bounds and selected salon; uses `useCallback` to avoid stale closures
- **`components/MapView.tsx`** — Leaflet map: `MapContainer`, `TileLayer`, `Marker` per salon. `MapEvents` is defined at module scope (not inside `MapView`) to prevent React remount/infinite-setState loops; loaded via `dynamic(…, { ssr: false })`
- **`components/SalonList.tsx`** / **`SalonListItems.tsx`** / **`SearchBar.tsx`** — Sidebar list and search for the standalone `/salons-map` route

#### `src/app/(dashboard)/opportunity/`, `support/`, `legal/`
All routes use `MaintenancePage`.

#### `src/app/blog/`
Public read-only blog routes (outside dashboard, wrapped with `Providers` via `layout.tsx`).

- **`layout.tsx`** — Wraps all `/blog/*` routes with the full `Providers` chain (`SettingsProvider → ThemeProvider → AppRouterCacheProvider`), resolving MUI emotion hydration mismatch
- **`page.tsx`** — Public blog index: reads `data/blog/posts.json` directly with `fs.readFile`, displays published posts with category chips and plain Next.js `<Link>` wrappers (no MUI server component issues)
- **`[slug]/page.tsx`** — Lean server component: fetches post by slug, passes to `<BlogPost>`
- **`[slug]/BlogPost.tsx`** — `"use client"` render component: full article with hero image, category chip, author/date meta, excerpt pullquote, TipTap-rendered HTML content
- **`category/[category]/page.tsx`** — Category-filtered blog listing: reads `posts.json` directly, awaits `params` Promise

#### `src/app/api/upload/products/`
Product image upload API.

- **`route.ts`** (`POST`, `DELETE`)
  - `POST /api/upload/products` → accepts `multipart/form-data` with `file` field, saves to `public/uploads/products/` with timestamped sanitized filename, returns `{ url }` 
  - `DELETE /api/upload/products` → accepts `{ url }` JSON body, validates path starts with `/uploads/products/` (path traversal protection), deletes file from disk

#### `src/app/api/products/[id]/`
Product CRUD API.

- **`route.ts`** (`GET`, `PUT`, `DELETE`) — all handlers use `params: Promise<{ id: string }>` with `await params` (Next.js 16 requirement)
  - `GET /api/products/:id` → returns single product by ID
  - `PUT /api/products/:id` → merges request body into existing product, writes to `products.json`
  - `DELETE /api/products/:id` → removes product from `products.json`

#### `src/app/api/blog/`
Blog REST API.

- **`route.ts`** (`GET`, `POST`)
  - `GET /api/blog` → returns all published posts
  - `GET /api/blog?all=true` → returns all posts regardless of status (used for category in-use checks)
  - `GET /api/blog?category=X` → filters published posts by category
  - `POST /api/blog` → creates new post, writes to `data/blog/posts.json`
