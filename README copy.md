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
- **`[id]/route.ts`** (`GET`, `PUT`, `DELETE`) — all handlers use `context: { params: Promise<{ id: string }> }` with `await context.params` (Next.js 16 requirement)

#### `data/blog/`
- **`posts.json`** — Flat JSON array of blog posts. Schema per post:
  ```json
  {
    "id": "uuid",
    "slug": "url-slug",
    "title": "Post Title",
    "excerpt": "Short description",
    "mainImage": "/uploads/blog/filename.jpg",
    "category": "Hair Care",
    "status": "published | draft",
    "author": "Admin",
    "date": "ISO date string",
    "contentHtml": "<p>TipTap HTML content</p>"
  }
  ```


Static assets bundled with the application.

- **`iconify-icons/`** - Iconify icon library files

#### Key Dependencies Added
- **`@tiptap/react` + `@tiptap/starter-kit` + `@tiptap/extension-image` + `@tiptap/extension-link`** (`^3.20.4`) — Rich-text editor for blog CMS
- **`@mui/icons-material`** (`7.3.9`) — Material-UI icon set (installed with `--legacy-peer-deps`)

#### `src/components/`
Shared application components.

- **`Link.tsx`** - Next.js Link component wrapper
- **`Providers.tsx`** - React context providers wrapper (used by both `(dashboard)` and `/blog/*` layouts)
- **`MaintenancePage.tsx`** - Reusable maintenance/placeholder page component:
  - Accepts `title` and optional `icon` props
  - Centered layout with emoji icon display
  - "Coming Soon" message
  - Return to home link
  - Used by all placeholder pages for consistent styling
- **`BlogEditor.tsx`** - TipTap rich-text editor component (`"use client"`):
  - Extensions: `StarterKit`, `Image`, `Link`
  - Accepts `value` (HTML string) and `onChange` callback
  - Used by both New and Edit blog pages
- **`products/ProductSection.tsx`** - Product grid with category filtering and inline management:
  - Filters products by `categoryId`, renders as linked cards with image + name + description
  - **Edit** button on each card navigates to `/products/manage/edit/[id]`
  - **Delete** button on each card shows confirmation dialog, then calls `DELETE /api/products/[id]` and reloads
  - **Add Product** button links to `/products/manage/add` with pre-filled `categoryId`
- **`products/ProductForm.tsx`** - Product add/edit form with image upload:
  - File upload via hidden `<input type="file">` + "Upload Image" / "Change Image" button
  - Uploads to `POST /api/upload/products`, stores returned URL in form state
  - Automatically deletes previous uploaded image via `DELETE /api/upload/products` before uploading replacement
  - Shows live image preview after upload
  - Fields: Sub-category (select), Name, Short Description, Long Description
- **`BlogTipsSection.tsx`** - Live blog tips section (`"use client"`):
  - Fetches published posts from `/api/blog?category=X` on mount
  - Falls back to all published posts if no category match found
  - Renders up to 3 posts as `tipsCard` elements using existing CSS classes
  - Returns `null` gracefully when no posts exist
  - Used by home, men, women, kids, and seniors pages to replace hardcoded placeholder cards
  - Props: `heading` (string, optional), `category` (string, optional — omit for all categories)
- **`layout/`** - Layout-related components
  - `vertical/` - Vertical layout components (VerticalMenu, Navigation, Navbar, Footer)
  - `horizontal/` - Horizontal layout components:
    - `Header.tsx` - Top header component
    - `Footer.tsx` / `FooterContent.tsx` - Footer with link categories
    - `footer.css` - Footer styles with 50-50 split layout (Tailwind `@apply`):
      - `.footerContainer` - Main footer container with dark background
      - `.leftSection` - Reserved for Download App button and Social Media (50% width)
      - `.linksSection` - Footer link columns (50% width)
      - `.linkColumn` - Individual category column
      - `.columnTitle` - Bold category titles (About, Opportunity, Support, Legal)
      - `.columnLink` - Subcategory links with hover effects
    - `HorizontalMenu.tsx` - Horizontal navigation menu
    - `Navigation.tsx` - Navigation wrapper
    - `NavbarContent.tsx` - Navbar content
    - `NavToggle.tsx` - Mobile navigation toggle
    - `VerticalNavContent.tsx` - Vertical nav content for mobile
  - `shared/` - Shared layout components (Logo, ModeDropdown, UserDropdown)
  - `front-pages/` - Front page layout components
- **`stepper-dot/`** - Stepper indicator components
- **`theme/`** - Theme-related components

#### `src/configs/`
Application configuration files.

- **`primaryColorConfig.ts`** - Primary color palette configuration
- **`themeConfig.ts`** - Global theme settings (layout, colors, navbar, footer)

#### `src/data/`
Static data and mock data.

- **`navigation/`** - Navigation menu data structure
  - `verticalMenuData.tsx` - Vertical menu structure and configuration
  - `horizontalMenuData.tsx` - Horizontal menu structure and configuration

#### `src/types/`
Application-wide TypeScript type definitions.

- **`menuTypes.ts`** - Menu-related types

#### `src/utils/`
Shared utility functions.

- **`getInitials.ts`** - Extract initials from names
- **`string.ts`** - String manipulation utilities

#### `src/app/(dashboard)/home/`
Home page route with scroll-snap sections and feature cards.

- **`page.tsx`** - Home page component with 5 scroll-snap sections:
  - Fetches card data from `/api/cards` API endpoint
  - Section 1: Hero banner with call-to-action and Check-In button
  - Section 2: Service cards (Men, Women, Kids, Seniors, Styling) + Schedule text
  - Section 3: Feature cards (Online Check-In, Clip Notes) with action buttons
  - Section 4: Download App section with email form
  - Section 5: Tips & Resources grey box with "Great News" heading + Footer
- **`home.css`** - Tailwind-based CSS with comprehensive styles (`@apply`):
  - **Scroll Snap System:**
    - `.scrollSnapContainer` - Main scroll container with `scroll-snap-type: y mandatory`
    - `.snapSection` - Individual sections with `scroll-snap-align: start`
  - **Hero Section:**
    - `.heroSection` - Full-width hero background container
    - `.heroContainer` - Content wrapper with flexbox layout
    - `.heroContent` - Text and button content wrapper
    - `.heroTitle` / `.heroDescription` - Heading and text styling
    - `.whiteText` - White text color utility class
    - `.checkInButton` - Check-in button linked to `/services/check-in`
  - **Cards Section:**
    - `.textSection` - Section title and subtext styling
    - `.cardsSection` / `.card` / `.cardImage` - Service cards horizontal scroll
    - `.cardImageBackground` - Background image styling for cards
    - Cards link to respective service pages (Men, Women, Kids, Seniors, Additional)
  - **Feature Cards:**
    - `.scheduleSection` - Schedule section with centered text
    - `.featureCardsSection` / `.featureCard` - Feature cards layout
    - `.featureCardImage` / `.featureCardImageOnline` / `.featureCardImageClip` - Feature card images
    - Check In button links to `/services/check-in`
    - Learn More button links to `/services/clip-notes`
  - **Download App Section:**
    - `.waitingListSection` - Download app section with green gradient
    - `.waitingListContent` - Two-column grid layout (image + form)
    - `.waitingListImage` - Left side image container
    - `.waitingListImageBackground` - Promotional image with cover sizing
    - `.waitingListForm` - White rounded form container
  - **Tips & Resources Section:**
    - `.tipsSection` - Grey rounded box with constrained width
    - `.tipsSectionHeading` - "Great News" heading (2rem, bold)
    - `.tipsGrid` - 3-column grid layout
    - `.tipsCard` - Individual tip cards with centered content
    - `.tipsCardImage` - Square images (200px max-width)
    - `.tipsCardHeading` / `.tipsCardText` - Card content
    - `.tipsCardLink` - Links to Blog, Lookbook, and Career pages
  - **Footer:**
    - `.footerWrapper` - Footer container within scroll-snap section
  - Responsive breakpoints for mobile and desktop
  - **Cards Section:**
    - `.textSection` - Section title and subtext styling
    - `.cardsSection` / `.card` / `.cardImage` - Service cards horizontal scroll
    - `.cardImageBackground` - Background image styling for cards
  - **Feature Cards:**
    - `.scheduleSection` - Schedule section with centered text
    - `.featureCardsSection` / `.featureCard` - Feature cards horizontal scroll layout
    - `.featureCardImage` / `.featureCardImageOnline` / `.featureCardImageClip` - Feature card images
  - **Download App Section:**
    - `.waitingListSection` - Download app section with green gradient, rounded corners, overflow hidden
    - `.waitingListContent` - Two-column grid layout (image + form)
    - `.waitingListImage` - Left side image container
    - `.waitingListImageBackground` - Promotional image with cover sizing
    - `.waitingListForm` - White rounded form container with z-index for overlay effect
    - `.appLabel` - "Download the App" label in #16a085 color
    - `.waitingListTitle` / `.waitingListDescription` - Form heading and text
    - `.formGroup` / `.formLabel` - Form field styling
    - `.emailInput` - Email input with MUI overrides
    - `.emailButton` - Submit button styling
  - **Footer:**
    - `.footerWrapper` - Footer container within scroll-snap section
  - Responsive breakpoints for mobile and desktop

#### `src/app/(dashboard)/about/`
About page route.

- **`page.tsx`** - About page component with description (uses Tailwind classnames)
- **`about/our-story/about.css`** - Tailwind-based styles for the Our Story layout (`@apply`)
  - `.aboutContainer` - Main container with full height and centered layout
  - `.aboutContent` - Content wrapper with max-width constraint
  - `.aboutTitle` - Page heading with primary color styling
  - `.aboutDescription` - Description text with responsive sizing

#### `src/app/(blank-layout-pages)/login/`
Login page route.

- **`page.tsx`** - Login page wrapper component
- Login component uses `src/views/Login.tsx`
- **`login.css`** (in `src/views/`) - Tailwind-based CSS for login page styling (`@apply`)
  - `.loginContainer` - Main flex container
  - `.illustrationSection` - Left side illustration area (hidden on mobile)
  - `.loginIllustration` - Responsive image sizing
  - `.formSection` - Right side form container
  - `.formContainer` - Form wrapper with proper spacing
  - `.logoLink` - Logo positioning
  - `.contentWrapper` - Content area with responsive margins
  - `.form` - Form element spacing
  - `.checkboxSection` - Remember me checkbox layout
  - `.forgotPasswordLink` - Forgot password link styling
  - Responsive breakpoints for mobile and desktop views

### Public Directory

#### `public/`
Static files served directly by the web server.

- **`favicon.ico`** - Website favicon
- **`next.svg`** - Next.js logo

#### `public/images/`
Static images served directly.

- **`avatars/`** - User avatar images
- **`branding/`** - Logo and brand assets
  - `GreatClipsLogo.svg` - Main salon logo
- **`illustrations/`** - Illustration graphics
  - `auth/` - Authentication page illustrations
  - `characters/` - Character illustrations
- **`pages/`** - Page-specific images
- **`salon/`** - Salon-specific images
  - `Home_Page_Image.png` - Hero section background
  - `GC_8043_BTS_HomePg_BTS_600x388_findyournextgreatcut.jpg` - Download app section promotional image
  - `gc-home-oci-woman-with-phone.png` - Online check-in feature card
  - `gc-home-clipNotes.png` - Clip notes feature card
  - Service card images for Men, Women, Kids, Styling

## Project Structure

```
src/
├── @core/           # Core components, hooks, utilities
├── @layouts/        # Layout components (currently vertical only)
├── @menu/           # Menu components and utilities
├── app/             # Next.js app directory
├── components/      # Shared components
├── configs/         # Configuration files
└── views/           # Page views
```

## Code Simplification (January 2026)

This project was simplified for early-stage development to reduce complexity and focus on core features. Below are the features that were removed and how to restore them if needed in the future.

### 🗑️ Removed Features

#### 1. **Theme Customizer Component** (Removed ~486 lines)
**What was removed:**
- `src/@core/components/customizer/` folder (entire component)
- Customizer UI for runtime theme configuration

**Why removed:** Not needed for early development. Theme settings can be hardcoded in config files.

**How to restore:**
1. Check git history for `src/@core/components/customizer/index.tsx`
2. Restore the customizer component
3. Add customizer trigger button to navbar/footer
4. Re-enable theme customizer UI and toggle button

#### 2. **Unused Utilities & Helper Functions**
**What was removed:**
- `getServerMode()` function (duplicated `getSystemMode()` logic)
- `getSkin()` function (unused)
- `mapHorizontalToVerticalMenu()` utility (108 lines)
- `processMenuChildren()` utility
- `mergedTheme.ts` (empty abstraction layer)

**Why removed:** Redundant or unused code.

**How to restore:**
- Check git history for specific functions
- Most were utility functions for layout system

#### 3. **Complex Settings Types**
**What was removed from Settings type:**
- `semiDark` option
- `navbarContentWidth`
- `contentWidth`
- `footerContentWidth`
- `layout` switching (now hardcoded to 'vertical')

**Current Settings type:**
```typescript
type Settings = {
  mode: Mode
  skin: 'default' | 'bordered'
  layout: 'vertical' | 'collapsed' | 'horizontal'
  primaryColor: string
}
```

#### 6. **Menu Item Prefix/Suffix System**
**What was removed:**
- Complex prefix/suffix rendering with ChipProps
- Badge/chip support for menu items
- Repeated logic for handling ReactNode vs ChipProps

**Why removed:** Not used in current menu items.

**How to restore:**
1. Add prefix/suffix props to MenuItem components
2. Implement rendering logic with ChipProps type checking
3. Add CustomChip component support

### 📝 Code Quality Improvements

#### Blog CMS (Added March 2026)
- ✅ **Full blog CRUD** — create, read, update, delete posts stored in `data/blog/posts.json`
- ✅ **TipTap rich-text editor** — `@tiptap/react` with StarterKit, Image, and Link extensions; replaces incompatible `react-quill` (React 19 incompatibility)
- ✅ **Two-column edit layout** — content editor (left) + publish sidebar (right) with status, category, image upload
- ✅ **Image upload with live preview** — instant `URL.createObjectURL` preview, then server URL after upload to `/api/upload`
- ✅ **Dynamic category management** — add/remove categories stored in `localStorage` under key `"blog-categories"`; removal blocked when category is in use (checked via `GET /api/blog?all=true`)
- ✅ **Public blog pages** — `/blog`, `/blog/[slug]`, `/blog/category/[category]` all read `posts.json` directly with `fs.readFile` (avoids undefined `NEXT_PUBLIC_BASE_URL` in server components)
- ✅ **MUI hydration fix for `/blog/*`** — `src/app/blog/layout.tsx` wraps all public blog routes with the full `Providers` chain, fixing emotion SSR mismatch
- ✅ **Live blog tips sections** — `BlogTipsSection` client component fetches `/api/blog?category=X`, falls back to all published posts when no category match; used on home, men, women, kids, seniors pages

#### Reusable Components:
- ✅ **MaintenancePage Component** - Centralized placeholder page component
  - All 31 placeholder pages use this component
  - Reduces code duplication (~27 lines → ~4 lines per page)
  - Consistent styling across all maintenance pages
  - Props: `title` (required), `icon` (optional emoji, defaults to 🚧)

#### API Routes:
- ✅ **Cards API** (`/api/cards`) - Serves home page card data
  - Returns typed `CardData[]` array
  - Separates data from presentation
  - Easy to extend for CMS or database integration

#### Styling Approach:
- ✅ Migrated component styles from Material-UI `sx` props to Tailwind-based CSS files (`@apply`)
- ✅ Removed CSS modules in favour of co-located `.css` files with semantic class names
- ✅ Created dedicated CSS files for key areas:
  - `src/app/(dashboard)/home/home.css` — Full home page (scroll-snap, hero, cards, features, download section)
  - `src/app/(dashboard)/shared-page.css` — Shared reusable layout classes (hero, two-column, cards, green banner, typography helpers)
  - `src/app/(dashboard)/services/overview/services-overview.css` — Services overview hero + split sections
  - `src/app/(dashboard)/services/men/men-services.css` — Men's services (reference implementation)
  - `src/app/(dashboard)/services/women/women-services.css` — Women's services
  - `src/app/(dashboard)/services/kids/kids-services.css` — Kids' services
  - `src/app/(dashboard)/services/seniors/seniors-services.css` — Seniors services
  - `src/app/(dashboard)/services/additional/additional-services.css` — Additional services
  - `src/app/(dashboard)/services/check-in/check-in-services.css` — Online Check-In
  - `src/app/(dashboard)/services/check-in/booknow/booknow.css` — Queue booking form (wait-time banner, form sections, success state)
  - `src/app/(dashboard)/services/clip-notes/clip-notes.css` — Clip Notes
  - `src/app/(dashboard)/services/lookbook/lookbook-services.css` — Lookbook
  - `src/app/(dashboard)/services/lookbook/Style/Style-lookbook-services.css` — Style detail page (sticky image panel, accordions, product rows, stylist script card)
  - `src/app/(dashboard)/services/blog/blog.css` — Blog listing
  - `src/app/(dashboard)/products/products-page.css` — All product pages (shared)
  - `src/app/(dashboard)/promotions/overview/promotions-overview.css` — Promotions overview hero, offer card, split sections, FAQ banner
  - `src/app/(dashboard)/promotions/senior-discounts/senior-discounts.css` — Senior discounts hero, green card, white split box, full-width green section
  - `src/app/(dashboard)/promotions/haircare-sale/haircare-sale.css` — Haircare sale hero, green card, full-width image-card section
  - `src/app/(dashboard)/promotions/college-football-playoff/college-football-playoff.css`
  - `src/app/(dashboard)/promotions/ncaa/ncaa.css`
  - `src/app/(dashboard)/promotions/nhl/nhl.css`
  - `src/app/(dashboard)/FindSalon/FindSalon.css` — Tailwind references loaded; map fills right panel at 100% height
  - `src/app/salons-map/salons-map.css` — Standalone map page layout; mobile breakpoint (≤768px) stacks map/list vertically at 50vh each
  - `src/app/(dashboard)/about/our-story/about.css` — Our Story layout
  - `src/views/login.css` — Login page form/layout
  - `src/components/layout/horizontal/footer.css` — Footer category links
- ✅ Extracted inline `sx` props to CSS classes:
  - `.scrollSnapContainer` / `.snapSection` - Scroll-snap behavior
  - `.whiteText` - White text color utility
  - `.cardImageBackground` - Card background image styling
  - `.featureCardImageOnline` / `.featureCardImageClip` - Feature card images
  - `.waitingListImageBackground` - App phones image background
  - `.footerWrapper` - Footer wrapper in scroll-snap section
  - `.emailInput :global(.MuiOutlinedInput-root)` - MUI input overrides
- ✅ Used class-based naming conventions (BEM-like approach)
- ✅ Responsive design using CSS media queries
- ✅ Improved code maintainability and separation of concerns
- ✅ Cleaner TSX files with semantic class names
- ✅ No inline styles in TSX (except dynamic background images)

#### CSS Refactoring Initiative (March 2026 - Ongoing)
- ✅ **Component-level CSS extraction** — Migrated inline `sx` props and `style={{}}` attributes from 38 components to dedicated `.css` files
- ✅ **Tailwind-first approach** — Created 18+ CSS files with Tailwind `@apply` directives for component styling
- ✅ **Semantic class naming** — BEM-like convention (e.g., `.hairstyle-card`, `.hairstyle-card-title`, `.product-section-header`)
- ✅ **Co-located CSS files** — CSS files stored alongside components in same directory with matching naming pattern
- ✅ **High-impact components refactored (5 files):**
  - `src/components/HairstyleCard.tsx` + `hairstyle-card.css` — Card grid display with Tailwind styling
  - `src/components/AddNewCards.tsx` + `add-new-cards.css` — Add item card with dashed border
  - `src/components/products/ProductDetails.tsx` + `product-details.css` — Product information display with accordions
  - `src/components/products/ProductSection.tsx` + `product-section.css` — Product grid filtering with category control
  - `src/app/blog/[slug]/BlogPost.tsx` + `blog-post.css` — Blog article rendering with rich text styling (partial refactor - CSS import added)
  - `src/app/hairstyles/[id]/page.tsx` + `hairstyle-detail.css` — Hairstyle detail page styling (partial refactor - CSS import added)
- ✅ **CSS files created (18 total):**
  - Component-level: `hairstyle-card.css` (19 lines), `add-new-cards.css` (16 lines), `product-details.css` (37 lines), `product-section.css` (45 lines), `blog-post.css` (62 lines), `hairstyle-detail.css` (56 lines)
  - Page-level: `maintenance-page.css`, `hairstyles.css`, `hairstyle-add.css`, `blog.css`, `product-cards.css`, `product-form.css`
  - Specialized: `salon-list.css`, `search-bar.css`, `map-view.css`, `queue-table.css`, `add-to-queue-form.css`, `navbar-content.css`, `blog-tips-section.css`
- ⏳ **Remaining components (33 files pending)** — Systematic CSS extraction across:
  - Core components: `MaintenancePage.tsx`, `BlogTipsSection.tsx`, `LoginButton.tsx`, `UserDropdown.tsx`, `Navigation.tsx`, `Logo.tsx` (styled-components)
  - Page routes: `blog/`, `hairstyles/add/`, `salons-map/`, `products/` overview pages, dashboard pages
  - Layout components: `@layouts/`, `@menu/` directories
- 📝 **Refactoring pattern established:**
  ```tsx
  // Before:
  <Card elevation={3} sx={{ borderRadius: 3, display: 'flex', gap: 2 }}>
    <Typography variant="h6" sx={{ fontWeight: 700, marginTop: 1 }}>
      {title}
    </Typography>
  </Card>

  // After:
  <Card className="hairstyle-card" elevation={3}>
    <Typography className="hairstyle-card-title" variant="h6">
      {title}
    </Typography>
  </Card>

  // CSS (hairstyle-card.css):
  .hairstyle-card {
    @apply rounded-lg shadow-md gap-2 flex;
    border-radius: 0.75rem;
  }

  .hairstyle-card-title {
    @apply font-bold text-lg;
    margin-top: 0.25rem;
  }
  ```

#### Product Management (April 2026)
- ✅ **Product image upload** — replaced "Image URL" text field with file upload picker in `ProductForm`; images saved to `public/uploads/products/`
- ✅ **Old image cleanup** — automatically deletes previous image from disk when uploading a replacement
- ✅ **Edit & Delete on product cards** — each product in `ProductSection` now shows inline Edit and Delete buttons with confirmation dialog
- ✅ **Product upload API** — `POST /api/upload/products` (upload) + `DELETE /api/upload/products` (cleanup) with path traversal protection

#### Mobile Responsive Improvements (April 2026)
- ✅ **FindSalon mobile layout** — map on top half, salon list on bottom half (stacked vertically via flex `order` swap)
- ✅ **Salons map standalone** — `/salons-map` page also responsive: sidebar and map each 50vh on mobile with reversed order

#### Next.js 16 Compatibility Fixes (April 2026)
- ✅ **Async `params` migration** — all dynamic route pages and API routes updated for Next.js 16 where `params` is a `Promise`:
  - Client components use `React.use(params)` — `details/[id]`, `edit/[id]`, `[categorySlug]`
  - API routes use `await params` — `GET/PUT/DELETE /api/products/[id]`

#### Fixed Issues:
- ✅ Removed debug `console.log()` statement
- ✅ Fixed `@ts-ignore` statements with proper typing
- ✅ Replaced TODO comments with proper error messages
- ✅ Removed empty comment blocks
- ✅ Simplified server helper functions

### 🎯 Current Features

**Active Systems:**
- ✅ Vertical navigation layout
- ✅ Horizontal navigation layout
- ✅ Dynamic menu generation system
- ✅ Cookie-based settings persistence
- ✅ Material-UI theming
- ✅ Dark/Light mode support
- ✅ System mode detection
- ✅ Responsive design
- ✅ TypeScript throughout
- ✅ Next.js 16 App Router (Turbopack)
- ✅ Tailwind-based CSS with `@apply` for all page styles
- ✅ Scroll-snap page navigation (one scroll = one section)
- ✅ Single scrollbar at window edge
- ✅ Shared `shared-page.css` utility classes for all dashboard pages
- ✅ `FooterContent` lazy-loaded (`next/dynamic`) on every dashboard page
- ✅ Blog CMS (create, read, update, delete posts with TipTap rich-text editor)
- ✅ Public blog at `/blog/[slug]` with full article rendering
- ✅ Live blog posts in tips/news sections across all service pages (category-filtered)

**Fully Implemented Pages (March 2026):**

| Section | Page | Route | Key Sections |
|---------|------|-------|-------------|
| Home | Home | `/home` | Hero video, service cards, feature cards, download app, live blog tips (any category) |
| Find Salon | Find a Salon | `/FindSalon` | Sidebar: search, wait-time list, Check In & Book Now buttons; Right: live Leaflet OpenStreetMap with markers |
| Services | Overview | `/services/overview` | GreenScreen hero + white box, split sections |
| Services | Men | `/services/men` | GreenScreen hero, center intro, green section, split sections, scroll style rows, live blog tips (Styling category) |
| Services | Women | `/services/women` | Hero, center intro, green section, split sections, scroll style rows, live blog tips (Hair Color category) |
| Services | Kids | `/services/kids` | Hero, center intro, green section, split sections, scroll style rows, live blog tips (Hair Care category) |
| Services | Seniors | `/services/seniors` | Hero, discount info, split sections, live blog tips (Hair Care category) |
| Services | Additional | `/services/additional` | Hero, service cards grid, split sections |
| Services | Online Check-In | `/services/check-in` | Hero, steps, app download CTA |
| Services | Join Queue | `/services/check-in/booknow` | Wait-time banner (colour-coded), queue form (name/phone/email/service/notes), validation, "You're in the queue!" success state |
| Services | Clip Notes | `/services/clip-notes` | Hero, feature breakdown, split sections |
| Services | Lookbook | `/services/lookbook` | Hero, center intro, green section, Men/Women/Kids scroll style rows, split sections |
| Services | Lookbook Style Detail | `/services/lookbook/Style` | Sticky image panel, style info, accordion details, recommended products, stylist script |
| Services | Blog List | `/services/blog` | Card grid with category filter chips, delete confirmation, loading skeletons |
| Services | Blog New | `/services/blog/new` | Two-column: TipTap editor + publish sidebar, image upload & preview, dynamic categories |
| Services | Blog Edit | `/services/blog/[id]` | Same as New, pre-populated with existing post data |
| Public Blog | Blog Index | `/blog` | Published posts grid with category chips |
| Public Blog | Blog Article | `/blog/[slug]` | Hero image, category chip, meta, excerpt pullquote, rendered HTML content |
| Public Blog | Category Filter | `/blog/category/[category]` | Posts filtered by category |
| Products | Overview | `/products/overview` | GreenScreen hero, product grid sections (Solutions, Tea Tree, Latitude, Salon Products) |
| Products | Solution | `/products/solution` | Hero, center intro, product grids (Shampoo & Conditioner, Styling, Curl, Kids), split section |
| Products | Tea Tree Solutions | `/products/tea-tree-solutions` | Hero, center intro, Tea Tree Collection grid, split section |
| Products | Latitude | `/products/latitude` | Hero, center intro, product grids (Shampoo & Conditioner, Styling), split section |
| Products | Other | `/products/other` | Redirects to `/products/overview#salon-products` |
| Promotions | Overview | `/promotions/overview` | GreenScreen hero + DahmianNew character, offer card, 5 split sections, FAQ green banner |
| Promotions | Senior Discounts | `/promotions/senior-discounts` | Image+text hero, compact green card, white split box, full-width green 3-card section |
| Promotions | Haircare Sale | `/promotions/haircare-sale` | Image+text hero, compact green card, full-width green image-card section |
| Promotions | College Football Playoff | `/promotions/college-football-playoff` | Image+text hero, video section, green gradient card |
| Promotions | NCAA | `/promotions/ncaa` | Image+text hero, green section, white split section |
| Promotions | NHL | `/promotions/nhl` | Image+text hero, green reversed section, videos grid |

**Placeholder Pages (MaintenancePage component):**
Remaining routes display `MaintenancePage` with title + emoji. Count: ~12 pages.

| Section | Pages |
|---------|-------|
| About | Our Story, Careers, Press |
| Opportunity | Franchising, Partnerships, Investors |
| Support | Help Center, Contact Us, FAQs |
| Legal | Privacy Policy, Terms of Service, Cookie Policy |

**Design Patterns Established:**

- **Hero banner** — `GreenScreen.png` background, white content box (subheading → heading → text → button), optional character image pinned to bottom
- **Compact green card** — `max-width: 860px`, centered, `border-radius: 16px`, gradient `#66bb6a → #0d3b0d`, two-column (text left / white bullet card right)
- **White split box** — `max-width: 860px`, centered, 50/50, rounded, shadowed; text column (subheading → heading → text → button) + image fill column
- **Alternating split sections** — text ↔ image position reverses each section; even sections use alternate background colour
- **Full-width gradient green section** — `#66bb6a → #0d3b0d` top-to-bottom; heading + subtext + 3 white cards in a horizontal row (desktop)
  - Variant A (senior-discounts): heading → text → outlined pill button per card
  - Variant B (haircare-sale): 16:9 image → heading → text → "Read more →" link per card

**Footer Structure:**
- ✅ 50-50 split layout
- ✅ Left section reserved for:
  - Download App button (placeholder)
  - Social media handles (placeholder)
- ✅ Right section with link categories:
  - About (Our Story → `/about/our-story`, Careers → `/about/career`, Press → `/about/press`, Blog → `/services/blog`)
  - Opportunity (Franchise → `/opportunity/franchising`, Partnerships → `/opportunity/partnerships`, Investors → `/opportunity/investors`)
  - Support (Help Center → `/support/help`, Contact Us → `/support/contact`, FAQs → `/support/faqs`)
  - Legal (Privacy Policy → `/legal/privacy`, Terms of Service → `/legal/terms`, Cookie Policy → `/legal/cookies`)

**Simple Menu Structure:**
```tsx
// Menu items are dynamically generated from horizontalMenuData.tsx
// Current horizontal menu structure:

<Menu>
  <MenuItem href='/home' icon='tabler-smart-home'>
    Home
  </MenuItem>
  
  <SubMenu label='Services' icon='tabler-briefcase'>
    <SectionTitle>Haircut for Everyone</SectionTitle>
    <MenuItem href='/services/overview'>Hair Services Overview</MenuItem>
    <MenuItem href='/services/men'>Men</MenuItem>
    <MenuItem href='/services/women'>Women</MenuItem>
    <MenuItem href='/services/kids'>Kids</MenuItem>
    <MenuItem href='/services/seniors'>Seniors</MenuItem>
    <MenuItem href='/services/additional'>Additional Services</MenuItem>
    <SectionTitle>More from Bob Mulet</SectionTitle>
    <MenuItem href='/services/check-in'>Online Check-In</MenuItem>
    <MenuItem href='/services/clip-notes'>Clip Notes</MenuItem>
    <MenuItem href='/services/lookbook'>Lookbook</MenuItem>
    <MenuItem href='/services/blog'>Blog</MenuItem>
  </SubMenu>
  
  <SubMenu label='Products' icon='tabler-package'>
    <MenuItem href='/products/overview'>Product Overview</MenuItem>
    <MenuItem href='/products/solution-great-clips'>Solution by Great Clips</MenuItem>
    <MenuItem href='/products/tea-tree-solutions'>Tea Tree Solutions by Bob Mulet</MenuItem>
    <MenuItem href='/products/latitude'>Latitude by Bob Mulet</MenuItem>
    <MenuItem href='/products/other'>Other Salon Products</MenuItem>
  </SubMenu>
  
  <SubMenu label='Promotions' icon='tabler-discount-2'>
    <MenuItem href='/promotions/overview'>Promotion Overview</MenuItem>
    <MenuItem href='/promotions/senior-discounts'>Senior Discounts</MenuItem>
    <MenuItem href='/promotions/haircare-sale'>Haircare Sale</MenuItem>
    <SectionTitle>Partnership</SectionTitle>
    <MenuItem href='/promotions/college-football-playoff'>College Football Playoff</MenuItem>
    <MenuItem href='/promotions/ncaa'>NCAA</MenuItem>
    <MenuItem href='/promotions/nhl'>NHL</MenuItem>
  </SubMenu>
  
  <MenuItem href='/about/career' icon='tabler-briefcase'>
    Saloon Career
  </MenuItem>
  
  <MenuItem href='/opportunity/franchising' icon='tabler-building-store'>
    Franchising
  </MenuItem>
</Menu>
```

### 📦 Code Reduction & Growth Summary

| Change | Lines | Notes |
|--------|-------|-------|
| Theme Customizer removed | -486 | Not needed for early dev |
| Unused utilities removed | -300 | Redundant helpers |
| Placeholder page consolidation | -800+ | 26 pages → `MaintenancePage` |
| Home page built | +663 | home.css + page.tsx |
| Services overview built | +219 | services-overview.css + page.tsx |
| shared-page.css added | +217 | Shared layout utilities |
| Promotions overview built | +337 | promotions-overview.css + page.tsx |
| Senior discounts built | +304 | senior-discounts.css + page.tsx |
| Haircare sale built | +~280 | haircare-sale.css + page.tsx |
| Services pages built (×9) | +~2000 | men, women, kids, seniors, additional, check-in, clip-notes, lookbook, blog |
| Products pages built (×4) | +~600 | solution, tea-tree-solutions, latitude + products-page.css |
| Promotions partnership pages (×3) | +~500 | college-football-playoff, ncaa, nhl |
| Lookbook Style detail page | +~200 | Style-lookbook-services.css + page.tsx |
| FindSalon + live map | +~200 | Leaflet map, salon list, Check In & Book Now buttons wired to queue route |
| salons-map module | +~150 | MapView (SSR-safe), useMapSync, SalonList, salon.json with waitTime |
| Lazy loading (FooterContent) | ~0 | next/dynamic applied to all 33 dashboard pages |
| Queue booking page | +~280 | services/check-in/booknow + booknow.css (single route, replaces product-level duplicates) |
| CareProducts pages removed | -~500 | solution/CareProducts, tea-tree-solutions/CareProducts and booknow duplicates deleted |
| **NET** | **~+4900** | Meaningful feature code, all main sections implemented |

### 🔄 Restoring Features

**General Steps:**
1. Check git history before January 2026
2. Identify the specific commit with the feature
3. Use `git show <commit>:<file>` to view file content
4. Copy relevant code back to project
5. Install any missing dependencies
6. Update imports and references
7. Test thoroughly

**Git Commands:**
```bash
# Find commits before simplification
git log --before="2026-01-23" --oneline

# View specific file from commit
git show <commit-hash>:src/path/to/file.tsx

# Restore entire folder from commit
git checkout <commit-hash> -- src/folder/

# Create branch from old commit to explore
git checkout -b feature/restore-customizer <commit-hash>
```

### 🚀 Next Steps for Development

**Pages still using `MaintenancePage` (to be implemented):**
- About: Our Story, Careers, Press
- Opportunity: Franchising, Partnerships, Investors
- Support: Help Center, Contact Us, FAQs
- Legal: Privacy Policy, Terms of Service, Cookie Policy

**In-progress / partially scaffolded:**
- Lookbook Style Detail (`/services/lookbook/Style`) — layout complete; route parameterization (style slug) and DB/CMS fetch pending
- Queue booking (`/services/check-in/booknow`) — form complete; backend API (persist queue entries, SMS notifications) pending

**Recommended future additions:**
1. Authentication system
2. ✅ Find a Salon with live Leaflet map — implemented at `/FindSalon`
3. ✅ Queue check-in form — implemented at `/services/check-in/booknow`
4. Backend queue API (persist entries, real-time wait-time updates)
5. SMS notification when it's the customer's turn
6. Add more salons to `salon.json` with accurate `lat`/`lng`/`waitTime`
7. Customer management
8. Staff scheduling
9. Reporting dashboard
10. CMS integration for promotions and products
10. Dynamic routes for Lookbook styles and product detail pages

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
