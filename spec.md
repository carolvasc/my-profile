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
- [ ] Create `data/projects.ts` with required fields
- [ ] Add at least 2 meaningful projects
- [ ] Implement `/projects` page
- [ ] Create reusable `ProjectCard` component
- [ ] Link cards to detail pages
- [ ] Ensure static generation (SSG)

**Done when**
- [ ] Project list renders correctly
- [ ] Cards are consistent and responsive
- [ ] Detail links work

---

### 🟢 Milestone 4 — Project Detail (SSR)
**Goal:** demonstrate real SSR and technical depth.

**Tasks**
- [ ] Implement dynamic route `/projects/[slug]`
- [ ] Fetch project data on the server
- [ ] Render page fully on the server
- [ ] Handle invalid slugs (not-found)
- [ ] Add dynamic metadata
- [ ] Document in code where and why SSR is used

**Done when**
- [ ] Content is server-rendered
- [ ] No `use client` for core rendering
- [ ] Metadata changes per project
- [ ] Invalid routes handled gracefully

---

### 🟢 Milestone 5 — Quality & Delivery
**Goal:** portfolio ready for real-world evaluation.

**Tasks**
- [ ] Review semantic HTML
- [ ] Verify heading hierarchy
- [ ] Test keyboard navigation and focus
- [ ] Check color contrast
- [ ] Review responsiveness
- [ ] Remove unused code/dependencies
- [ ] Deploy to Vercel

**Done when**
- [ ] Site is publicly accessible
- [ ] Navigation is smooth
- [ ] Build passes cleanly
- [ ] Lighthouse scores are reasonable (>80)

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
