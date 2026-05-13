export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  category: "website" | "app" | "ecommerce" | "other";
};

// Add your projects here. Each project will appear as a card on the Projects page.
export const projects: Project[] = [
  {
    id: "1",
    title: "Sample Business Website",
    description:
      "A clean, modern marketing website built for a local service business. Features a responsive design, contact form, and Google Maps integration.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "website",
    // imageUrl: "/projects/sample.png",  // Add a screenshot to /public/projects/
    // liveUrl: "https://example.com",
  },
  {
    id: "2",
    title: "E-commerce Store",
    description:
      "A full-featured online store with product catalog, shopping cart, and Stripe payment integration for a retail client.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    category: "ecommerce",
  },
  {
    id: "3",
    title: "Custom Booking App",
    description:
      "A custom scheduling and appointment management application for a service-based small business.",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "app",
  },
];
