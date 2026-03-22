# Mobrauntech.com — Portfolio & Marketing Website

A professional multi-page marketing website for **Moshe Braun** and **Mobrauntech.com** — a software development studio focused on building websites and custom software for small businesses.

---

## Purpose

This website is the primary marketing platform for Mobrauntech. It exists to:

- Attract small business clients who need a website or custom software
- Showcase completed projects and capabilities
- Make it easy for potential clients to reach out and get started
- Provide a seamless payment experience for existing clients

---

## Pages

### 1. Home (Landing / Marketing)
The main marketing page. This is the first impression for potential clients.

**Sections:**
- **Hero** — Bold headline, short value proposition, primary CTA (e.g. "Get a Free Quote")
- **Services** — What Mobrauntech offers (website development, custom software, etc.)
- **Why Choose Us** — Trust signals, key differentiators, short pitch
- **Social Proof** — Testimonials or client logos (if available)
- **Call to Action** — Bottom CTA driving visitors to Contact or Projects

---

### 2. Projects
A showcase of past and current work — the portfolio page.

**Sections:**
- Grid/list of project cards (screenshot, title, short description, tech stack tags)
- Each card links to a detail view or external live URL
- Optional: filter by category (website, app, etc.)

---

### 3. Payments
A dedicated page for clients to pay for their project or invoice.

**Implementation:** Stripe Checkout
- Client receives a link or visits this page
- Enters amount or selects a pre-defined package/invoice
- Completes payment via Stripe's hosted checkout
- Confirmation screen after successful payment

---

### 4. Pricing Packages
A section (on the Home page and/or a dedicated Pricing page) that clearly presents the 3 available service packages so visitors can understand their options before reaching out.

**The 3 packages:**

| Package | What's Included | Price |
|---------|----------------|-------|
| **Starter** | Single-page website — clean, modern design, mobile-responsive, contact form, basic SEO setup | **$499** |
| **Business** | Multi-page website (up to 5 pages) — everything in Starter plus custom branding, blog or portfolio section, social media integration, and priority support | **$999** |
| **Custom** | Fully custom web application or software — tailored features, custom database, admin dashboard, third-party API integrations, ongoing support agreement | **Starting at $2,500** (quote-based) |

**Important — No payment required upfront:**
- Customers do **not** pay before the product is delivered
- Payment is only collected once the client reviews and approves the finished work
- This policy must be clearly stated on the pricing section (e.g. "You only pay when you're happy with the result")

**Package selection + Contact form integration:**
- Each package card has a "Get Started" or "Choose Plan" button
- Clicking it scrolls to / opens the Contact form with the selected plan pre-filled in a hidden (or visible read-only) field
- The submitted form data includes the chosen package so Moshe knows which plan the lead is interested in
- Contact form fields: Name, Email, Company (optional), Message, **Selected Plan** (auto-filled from package choice, editable)

---

### 5. Contact
A way for potential clients to reach out directly.

**Sections:**
- Contact form (Name, Email, Company, Message, Selected Plan — pre-filled from pricing section)
- Business email and/or social links
- Optional: Short FAQ or "What happens next" step list to set expectations

---

## Design System

| Property       | Decision                          |
|----------------|-----------------------------------|
| Component lib  | [shadcn/ui](https://ui.shadcn.com) |
| Primitives     | [Radix UI](https://www.radix-ui.com) |
| Styling        | Tailwind CSS                      |
| Color scheme   | **TBD** — to be decided by Moshe  |
| Border radius  | **TBD** — to be decided by Moshe  |
| Typography     | **TBD** — to be decided by Moshe  |
| Dark/Light mode| **TBD**                           |

> Design decisions (colors, radius, fonts, dark/light) will be finalized before development begins.

---

## Tech Stack

| Layer          | Technology                        |
|----------------|-----------------------------------|
| Framework      | Next.js (App Router)              |
| Language       | TypeScript                        |
| Styling        | Tailwind CSS                      |
| Components     | shadcn/ui + Radix UI              |
| Payments       | Stripe Checkout                   |
| Deployment     | TBD (Vercel recommended)          |
| Contact form   | TBD (email service / form handler)|

---

## Target Audience

Small business owners who:
- Need a professional website or web presence
- Are looking for a reliable developer to handle custom software needs
- Want quality work at a fair price

---

## Social Branding & Identity

### Favicon (Browser Tab Icon)
Every page must include a proper favicon so the Mobrauntech logo appears in the browser tab, bookmarks bar, and history — just like any professional website.

**Requirements:**
- `favicon.ico` placed in `/public` for legacy browser support
- `icon.png` (32×32 and 192×192) for modern browsers and PWA
- `apple-touch-icon.png` (180×180) for iOS home screen shortcuts
- All configured in the Next.js `<head>` / `metadata` export so they apply site-wide

---

### Social Sharing Preview (Open Graph / Twitter Card)
When anyone shares a link to mobrauntech.com on WhatsApp, iMessage, Slack, LinkedIn, Twitter/X, Facebook, or any other social platform, the preview should show a branded image (not a blank card).

**Requirements:**
- A dedicated OG image (`/public/og-image.png`) — recommended size **1200×630 px** — featuring the Mobrauntech logo, tagline, and a clean branded background
- The following `<meta>` tags set on every page (global in `layout.tsx` metadata, with page-level overrides where relevant):
  - `og:title` — page title
  - `og:description` — short description of the page / site
  - `og:image` — absolute URL to the OG image (e.g. `https://mobrauntech.com/og-image.png`)
  - `og:url` — canonical URL of the current page
  - `og:type` — `website`
  - `twitter:card` — `summary_large_image`
  - `twitter:image` — same OG image URL
- Next.js `metadata` API (or `generateMetadata`) should be used so tags are server-rendered and crawlable

---

### Embeddable "Built by Mobrauntech" Footer Badge
Clients whose websites were built by Mobrauntech should be able to add a small, unobtrusive badge to the footer of their own sites. This badge:
- Displays the Mobrauntech logo + "Built by Mobrauntech" (or similar short text)
- Links back to `https://mobrauntech.com`
- Helps with brand recognition and inbound referral traffic

**Implementation plan:**
- A dedicated public page or route, e.g. `/badge`, that renders *only* the badge component (no nav, no footer) — suitable for embedding via `<iframe>` if needed
- A copyable HTML snippet hosted at `/embed` or documented on the site, e.g.:
  ```html
  <a href="https://mobrauntech.com" target="_blank" rel="noopener">
    <img src="https://mobrauntech.com/badge.png" alt="Built by Mobrauntech" height="32" />
  </a>
  ```
- A static `badge.png` image (`/public/badge.png`) — a clean horizontal lockup of the logo + name on a transparent or dark background, sized for use at small heights (32–40 px tall)
- Optionally: a lightweight JS snippet (`/embed.js`) that injects a styled `<a>` tag, so clients don't depend on the image CDN being up
- The badge should be visually consistent with the site's branding (same colors, same logo)

---

## Out of Scope (for now)

- Blog / articles page
- Client dashboard or login
- CMS integration
- E-commerce beyond payment links

---

## Design & Development Workflow

1. **Plan** — Define all pages, sections, and content (this README)
2. **Design decisions** — Finalize colors, radius, typography, dark/light mode
3. **Component setup** — Initialize Next.js, install shadcn/ui, configure Tailwind
4. **Page by page** — Build Home → Projects → Contact → Payments
5. **Stripe integration** — Wire up payment flows and test in Stripe test mode
6. **QA & polish** — Responsive design, accessibility, performance
7. **Deploy** — Go live on custom domain (mobrauntech.com)
