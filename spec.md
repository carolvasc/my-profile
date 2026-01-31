# Professional Portfolio — Specification (v1)

## 1. Objective
Build and publish a professional portfolio website that helps recruiters and tech leads quickly understand:
- Who the developer is
- Technical focus and strengths
- Key projects and impact
- Senior-level technical judgment

**Principle:** ship fast with quality. Scope discipline is mandatory.
**Design workflow:** always use the `frontend-design` skill when creating or restyling screens, components, or UI features to maintain a consistent visual pattern across the portfolio.
**Content workflow:** before implementing any milestone, always read and extract text from `docs/cv.pdf` to align content and details.
**Language:** use Brazil portuguese as main language

---

## 2. Target Audience
- Technical recruiters
- Tech leads / senior engineers
- Engineering and product managers

---

## 3. Tech Stack (Non-negotiable)
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Local static content (TypeScript / JSON)
- Deployment target: Vercel

### Rendering requirements
- SSG for static pages
- SSR for at least one page (Project Detail) to demonstrate SSR knowledge

---

## 4. Scope — MVP (v1)

### Required Pages
- Home (`/`)
- About (`/about`)
- Projects list (`/projects`)
- Project detail (`/projects/[slug]`)
- Contact (`/contact`)

No additional pages in v1.

---

## 5. Navigation
- Header with links to: Home, About, Projects, Contact
- Footer with:
  - External links (GitHub, LinkedIn)
  - Email address

---

## 6. Functional Requirements

### 6.1 Home
**Goal:** communicate “who I am” in under 10 seconds.

**Requirements:**
- Clear headline (role + focus)
- Short professional summary (2–3 sentences)
- Primary tech stack (list or tags)
- CTAs:
  - “View Projects” → `/projects`
  - “Contact” → `/contact`

**Rendering:** SSG  
**SEO:** static metadata (title and description)

---

### 6.2 About
**Goal:** provide professional context and seniority.

**Requirements:**
- Background (1–2 paragraphs)
- Areas of expertise (bulleted list)
- Way of working (mentorship, collaboration with product/design, etc.)
- External links: GitHub and LinkedIn

**Rendering:** SSG  
**SEO:** static metadata

---

### 6.3 Projects List
**Goal:** showcase projects in a scannable and clear way.

**Requirements:**
- Project cards displaying:
  - Name
  - Short description
  - Tech stack
  - Link to detail page (`/projects/[slug]`)
  - External links (repo/demo) when available

**Rendering:** SSG  
**SEO:** static metadata

---

### 6.4 Project Detail (SSR)
**Goal:** demonstrate depth and technical decision-making.

**Requirements:**
- Real server-side rendered page
- Content must include:
  - Context / problem statement
  - Technical decisions (what and why)
  - Stack
  - Results and impact (performance, UX, accessibility, etc.)
  - External links (repo/demo if available)
- Dynamic metadata (title and description based on project)

**Rendering:** SSR (must not rely on client-only rendering)

---

### 6.5 Contact
**Goal:** enable conversion and easy contact.

**Requirements:**
- Visible and copyable email address
- Links to LinkedIn and GitHub
- Short invitation text

**Rendering:** SSG  
**No backend form in v1**

---

## 7. Non-functional Requirements

### Accessibility (Baseline)
- Semantic HTML
- Correct heading hierarchy (one H1 per page)
- Keyboard navigation with visible focus
- Adequate color contrast
- Descriptive link text

### Performance
- Minimize client-side JavaScript
- Server Components by default
- Use `use client` only when strictly necessary

### Responsiveness
- Mobile-first layout
- Consistent experience across breakpoints

---

## 8. Content & Data

### Data Source (v1)
Use a local `data/projects.ts` file exporting a list of projects.

**Required fields:**
- `slug: string`
- `title: string`
- `summary: string`
- `stack: string[]`
- `problem: string`
- `decisions: string[]`
- `results: string[]`
- `links?: { repo?: string; demo?: string }`

---

## 9. Project Structure (Suggested)
app/
layout.tsx
page.tsx
about/page.tsx
projects/page.tsx
projects/[slug]/page.tsx
contact/page.tsx
components/
Header.tsx
Footer.tsx
ProjectCard.tsx
data/
projects.ts

---

## 10. Milestones & Execution Checklist

### 🟢 Milestone 1 — Project Foundation
**Goal:** project ready for feature development.

**Tasks**
- [x] Initialize Next.js project (App Router + TypeScript)
- [x] Configure Tailwind CSS
- [x] Define base folder structure (`app/`, `components/`, `data/`)
- [x] Implement global layout (`app/layout.tsx`)
- [x] Create responsive container pattern
- [x] Implement Header with navigation
- [x] Implement Footer with external links and email

**Done when**
- [x] App runs locally without errors
- [x] Layout applied to all pages
- [x] Header and Footer visible and responsive

---

### 🟢 Milestone 2 — Static Pages (SSG)
**Goal:** core content and navigation in place.

**Tasks**
- [x] Implement Home page (`/`)
- [x] Implement About page (`/about`)
- [x] Implement Contact page (`/contact`)
- [x] Add real content (no lorem ipsum)
- [x] Add static metadata for each page
- [x] Ensure all pages are statically rendered (SSG)

**Done when**
- [x] Navigation works across all pages
- [x] Pages render without client-side JS
- [x] Metadata visible in page source

---

### 🟢 Milestone 3 — Projects List (SSG)
**Goal:** projects visible and easy to scan.

**Tasks**
- [x] Create `data/projects.ts` with required fields
- [x] Add at least 2 meaningful projects
- [x] Implement `/projects` page
- [x] Create reusable `ProjectCard` component
- [x] Link cards to detail pages
- [x] Ensure static generation (SSG)

**Done when**
- [x] Project list renders correctly
- [x] Cards are consistent and responsive
- [x] Detail links work

---

### 🟢 Milestone 4 — Project Detail (SSR)
**Goal:** demonstrate real SSR and technical depth.

**Tasks**
- [x] Implement dynamic route `/projects/[slug]`
- [x] Fetch project data on the server
- [x] Render page fully on the server
- [x] Handle invalid slugs (not-found)
- [x] Add dynamic metadata
- [x] Document in code where and why SSR is used

**Done when**
- [x] Content is server-rendered
- [x] No `use client` for core rendering
- [x] Metadata changes per project
- [x] Invalid routes handled gracefully

---

### 🟢 Milestone 5 — Quality & Delivery
**Goal:** portfolio ready for real-world evaluation.

**Tasks**
- [x] Review semantic HTML
- [x] Verify heading hierarchy
- [x] Test keyboard navigation and focus
- [x] Check color contrast
- [x] Review responsiveness
- [x] Remove unused code/dependencies
- [x] Deploy to Vercel

**Done when**
- [x] Site is publicly accessible
- [x] Navigation is smooth
- [x] Build passes cleanly
- [x] Lighthouse scores are reasonable (>80)

---

### 🟦 Milestone 6 — Internationalization (PT/EN toggle)
**Goal:** allow recruiters/tech leads to read the portfolio in English.

**Constraints**
- English content must be derived from the same facts as Portuguese (no inventing).
- Keep URLs stable and clear (choose one approach and apply consistently).

**Recommended approach**
- Dictionary-based translation (no CMS). Either:
  - A) Route-based: `/pt` and `/en`, or
  - B) UI toggle with stored preference and language in URL (preferred for clarity)

**Tasks**
- [ ] Decide i18n strategy: route-based (`/pt`, `/en`) or locale segment in Next App Router
- [ ] Create translation dictionaries for core UI copy (e.g., `data/i18n/pt.ts`, `data/i18n/en.ts`)
- [ ] Implement a language toggle in the Header (PT / EN)
- [ ] Translate: Home, About, Projects list, Project detail, Contact
- [ ] Ensure metadata (title/description) is localized
- [ ] Ensure the selected language persists (cookie or localStorage) and is reflected in navigation

**Done when**
- [ ] Recruiter can switch PT ↔ EN from the UI
- [ ] All pages have PT and EN versions
- [ ] Project content is consistently translated (same meaning, same facts)
- [ ] Metadata is correct for both languages

---

### 🟦 Milestone 7 — Themes (3 selectable portfolio themes)
**Goal:** provide 3 visually distinct themes that can be switched easily.

**Constraints**
- Keep layout structure the same; only visual theme changes.
- Maintain accessibility (contrast, focus) for all themes.
- Avoid heavy gradients; keep professional.

**Tasks**
- [ ] Define a design token system using CSS variables (e.g., `--bg`, `--fg`, `--muted`, `--accent`, `--border`)
- [ ] Create 3 themes with meaningful names (e.g., `classic`, `minimal`, `bold`) and distinct token values
- [ ] Implement a theme switcher UI (header or settings area)
- [ ] Persist selected theme (localStorage) and apply on first paint to avoid flash
- [ ] Ensure focus styles remain visible across themes
- [ ] Ensure all main pages render correctly under each theme

**Done when**
- [ ] Recruiter can switch among 3 themes in the UI
- [ ] Theme persists after refresh
- [ ] No “flash” of incorrect theme on page load
- [ ] Lighthouse + accessibility remain reasonable on all themes

---

### 🟦 Milestone 8 — CV Update Workflow (detect changes and update site content)
**Goal:** when a new CV is uploaded, the agent can identify what changed and update the portfolio accordingly.

**Key idea**
- Treat a text version as the canonical source for diffs.
- Keep a simple “content mapping” so the agent knows which sections/pages depend on which CV fields.

**Tasks**
- [ ] Add a canonical text source for CV: `docs/cv.md` (primary) and keep `docs/cv.pdf` as reference
- [ ] Create `docs/cv_versions/` and store snapshots (e.g., `cv_2026-01-29.md`, `cv_YYYY-MM-DD.md`)
- [ ] Add a `docs/cv_change_log.md` template for recording updates (what changed, date, why)
- [ ] Create `docs/content_map.md` describing where each CV section maps into the site (e.g., Summary → Home/About; Experience → About; Projects → Projects pages)
- [ ] Update AGENTS.md with a “CV update mode” procedure (see below)
- [ ] Define a repeatable process: when `docs/cv.md` changes, agent must compare against latest snapshot and update only impacted pages/data

**Done when**
- [ ] There is a clear canonical CV text file (`docs/cv.md`)
- [ ] There is at least one version snapshot in `docs/cv_versions/`
- [ ] Agent can produce a changelist: “what changed” and “which site sections must change”
- [ ] Updating the CV results in targeted edits (no random rewriting of unrelated copy)

**CV update mode (procedure to add to AGENTS.md)**
- [ ] Add instructions: when CV changes, diff `docs/cv.md` vs latest file in `docs/cv_versions/`
- [ ] Extract a “Change Summary” (new roles, dates, skills, projects, metrics)
- [ ] Update only the mapped sections in code/data according to `docs/content_map.md`
- [ ] Create a new snapshot in `docs/cv_versions/` after updates

---

## 11. Explicit Non-goals (Out of Scope v1)
Do NOT implement:
- CMS
- Blog
- Internationalization
- Dark mode
- Complex animations
- Authentication
- Database
- Custom backend or APIs
- Edge or streaming optimizations

---

## 12. Acceptance Criteria (Definition of Done)
- All milestones completed and checked
- Required pages implemented and linked
- `/projects/[slug]` uses SSR
- Final content (no placeholders)
- Deployed on Vercel
- Accessibility baseline met
- Responsive layout across devices

---

## 13. Guiding Principle
This portfolio should demonstrate **senior-level judgment**:
- Choosing the right tools
- Knowing when NOT to add complexity
- Explaining decisions clearly

When in doubt, prefer simplicity.
