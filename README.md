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

### 4. Contact
A way for potential clients to reach out directly.

**Sections:**
- Contact form (Name, Email, Company, Message, optional: Project type / Budget range)
- Business email: **support@mobrauntech.com**
- Social links (TBD)
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
