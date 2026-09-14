# Urban Web — Claude Context

## Project Purpose
Customer-facing booking frontend for **Urban Rent a Car** (Skopje, North Macedonia).
Talks exclusively to `urban-gateway` via `/api/v1/*` — never directly to the car management backend.
This is a real client product. Production quality, editorial design, mobile-first.

## Tech Stack
- **React 19** · TypeScript · Vite
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin, **no config file**; design tokens live in `src/index.css` under `@theme {}`
- **React Query (TanStack)** — all server state; default `staleTime: 30s`
- **React Router v6** — client-side routing
- **Axios** — HTTP client, baseURL `/api/v1` (Vite proxies to `localhost:8082`)
- **Lucide React** — icon set

## Design System

### Palette (from Figma Make source — DO NOT deviate)
```
Cream background : #F9F8F6
Dark / text      : #0C0C0C
Gold accent      : #C8A96E   (hover: #d9bc87)
Muted text       : #5A5A5A
Subtle text      : #8A8A8A
Dark sections bg : #0C0C0C
Cards / surfaces : #FFFFFF
```
The dark navy `#0a0e1a` / gold `#c9a84c` palette that may appear in older section files is **deprecated** — it is only kept for the non-home pages (CarsPage, CarDetailPage, ReservationPage) until those are restyled.

### Typography
- **DM Sans** — loaded via Google Fonts in `index.html`; set on `body` in `index.css`
- Headline style: large `font-light` with an italic `font-medium` gold accent word
  ```tsx
  <h1>Drive Without<br /><em className="not-italic italic font-medium text-[#C8A96E]">Compromise.</em></h1>
  ```
- Section labels: `text-xs font-semibold text-[#C8A96E] uppercase tracking-[0.2em]`

### Spacing & Shape
- Cards: `rounded-2xl`, surfaces: `rounded-xl`
- Primary buttons: `bg-[#0C0C0C] text-[#F9F8F6] rounded-xl px-8 py-4` + `hover:bg-[#1a1a1a]`
- Gold buttons: `bg-[#C8A96E] text-[#0C0C0C]` + `hover:bg-[#d9bc87]`
- Borders: `border-black/5` (light sections), `border-white/10` (dark sections)

### Scroll Reveal
Hook at `src/hooks/useReveal.ts` — returns a `ref`; attaches `.visible` when element enters viewport via IntersectionObserver. CSS classes in `index.css`: `.reveal` / `.reveal.visible` / `.reveal-delay-{1-4}`.

### Carousel
Hide scrollbar with `.no-scrollbar` (defined in `index.css`). Use `overflow-x: auto` + `flex gap-5`.

---

## Route Architecture

```
/               → HomePage        (light cream theme)
/cars           → CarsPage        (dark navy, lists cars from API)
/cars/:carId    → CarDetailPage   (dark navy, single car + booking CTA)
/reserve/:carId → ReservationPage (dark navy, customer form → payment)
/confirmation   → ConfirmationPage
```

**Theme switching:** `App.tsx` uses `useLocation` inside `AppContent` (within `BrowserRouter`). The root wrapper is `bg-[#F9F8F6]` on `/`, `bg-[#0a0e1a] text-white` on all other routes. The `Navbar` also uses `useLocation` to switch between light and dark variants.

---

## Homepage Section Flow

```
HeroSection          ← eager, above fold; Unsplash car photo, stats row, floating badges
ReservationSection   ← full-screen dark overlay; 5 category tabs; location/date form
CarResultsSection    ← lazy; appears inline after form submit; horizontal carousel
OffersSection        ← lazy; dark #0C0C0C bg; 3 offer cards + loyalty tiers
ReviewsSection       ← lazy; light cream bg; white cards with real Unsplash avatars + trust bar
```

`HomePage.tsx` owns `searchState` and passes `onSearch` to `ReservationSection`. When the user submits, `CarResultsSection` mounts and the page scrolls to `#car-results`.

**Car results are inline — do not navigate to `/cars` from the homepage search.**

---

## Mock Data (`src/data/landingMockData.ts`)

Used exclusively by homepage sections. Replace with API calls later without touching section JSX.

Key exports:
- `mockCarsByCategory: Record<CarCategory, MockCar[]>` — 3 cars per category (Economy/Business/Premium/SUV/Electric)
- `offers: Offer[]` — Weekend Escape, Adventure Ready, Drive Green
- `reviews: Review[]` — 3 with real Unsplash avatar URLs
- `loyaltyTiers: LoyaltyTier[]` — Silver / Gold / Platinum
- `pickupLocations: string[]` — 8 MK locations for dropdowns
- `stats: { value, label }[]` — 500+ / 15K+ / 8 / 10+

---

## API Layer (`src/services/api.ts`)

```ts
carApi.search(params: SearchParams): Promise<Car[]>      // GET /api/v1/cars/search
carApi.getDetails(carId): Promise<Car>                    // GET /api/v1/cars/:id
reservationApi.create(request): Promise<Reservation>     // POST /api/v1/reservations
reservationApi.initiatePayment(id): Promise<PaymentSession> // POST /api/v1/reservations/payment/initiate
```

On `initiatePayment` success → `window.location.href = session.redirectUrl` (payment provider redirect).

### Backend API source of truth

Whenever working on a feature that sends requests to or processes responses from the backend, **always read the relevant controller(s) in the gateway codebase first**:

```
/Users/ivst/Personal/urban-gateway/src/main/java/com/urban/gateway/controller/
```

Check the actual method signatures, request/response DTOs, and path mappings before writing or updating any frontend API call, type, or data transformation. The gateway is the source of truth — do not assume `src/services/api.ts` or `src/types/index.ts` are up to date.

---

## Component Conventions

- **No prop drilling past 2 levels** — use React Query or state in the closest common ancestor
- **Images:** always `loading="lazy"` except hero fold; use placeholder bg div + `onLoad` opacity swap
- **Icons:** Lucide React; pick semantically correct icons, keep size consistent (11–20px)
- **No global state library** — React Query covers server state; local `useState` covers UI state
- **Comments:** only when the WHY is non-obvious. No docstrings, no "this component does X" comments.

---

## What Not to Change Without Discussion

- **`src/types/index.ts`** — these types mirror the Spring Boot DTOs; any change here requires a backend change
- **`src/services/api.ts`** — endpoint paths must match `urban-gateway` controller mappings
- **`vite.config.ts`** proxy target (`localhost:8082`) — matches the gateway's local port; changes need `application-local.yml` to match
- **The section file/folder structure** — sections in `src/components/sections/`, lazy-loaded in `HomePage.tsx`

---

## Development

```bash
npm run dev       # Vite dev server — proxies /api → localhost:8082
npm run build     # tsc -b && vite build — must pass before any PR
```
Backend must be running first: `cd /Users/ivst/Personal/urban-gateway && ./scripts/local-run.sh`

---

## UI/UX Principles for Future Work

1. **Premium, editorial feel** — generous whitespace, restrained palette, large light-weight type. Avoid busy layouts.
2. **Progressive disclosure** — car results appear only after search; lazy-load everything below the fold.
3. **Motion is subtle** — scroll reveal via IntersectionObserver (`.reveal`), hover transitions `transition-colors` / `transition-shadow`. No distracting keyframe animations on content.
4. **Mobile-first grid** — all grids start 1-column, step up at `sm:` / `md:` / `lg:`. Carousels handle overflow horizontally rather than wrapping.
5. **Real photography** — Unsplash photos for car images, section backgrounds, and review avatars. Never placeholder gradients in production-facing UI.
6. **Trust signals throughout** — floating badges on hero, trust pills under reservation form, trust bar at base of reviews section.
7. **Dark sections for high-impact moments** — reservation (full-screen CTA), offers (contrast against cream). Alternate dark/light to create visual rhythm.
8. **Inline results** — the homepage search resolves within the page; navigating to `/cars` is a secondary "browse all" affordance.
