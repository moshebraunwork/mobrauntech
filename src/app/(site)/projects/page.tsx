import { Metadata } from "next";
import { projects, type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import {
  ExternalLink,
  ArrowRight,
  Globe,
  ShoppingBag,
  LayoutDashboard,
  Boxes,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of websites and custom software built by Mobrauntech for small businesses.",
};

const categoryStyles: Record<
  Project["category"],
  { icon: typeof Globe; label: string; gradient: string }
> = {
  website: {
    icon: Globe,
    label: "Website",
    gradient: "from-accent/30 via-accent-2/20 to-transparent",
  },
  ecommerce: {
    icon: ShoppingBag,
    label: "E-commerce",
    gradient: "from-accent-2/30 via-accent-3/20 to-transparent",
  },
  app: {
    icon: LayoutDashboard,
    label: "Web App",
    gradient: "from-accent-3/30 via-accent/20 to-transparent",
  },
  other: {
    icon: Boxes,
    label: "Project",
    gradient: "from-accent/25 via-accent-2/15 to-transparent",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Portfolio
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Our work
        </h1>
        <p className="mt-4 mb-14 max-w-xl text-lg text-muted">
          Projects we&apos;ve built for small businesses. Each one is unique,
          tailored to the client&apos;s needs and goals.
        </p>
      </Reveal>

      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-24 text-center">
          <p className="text-muted">Projects coming soon.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const style = categoryStyles[project.category];
            return (
              <Reveal key={project.id} delay={i * 90} className="h-full">
                <SpotlightCard className="flex h-full flex-col">
                  {project.imageUrl ? (
                    <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div
                      className={`relative flex aspect-video w-full items-center justify-center border-b border-border bg-gradient-to-br ${style.gradient}`}
                    >
                      <style.icon
                        size={44}
                        strokeWidth={1.5}
                        className="text-foreground/30 transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-wider text-muted">
                        {style.label}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-2 font-display text-lg font-bold">
                      {project.title}
                    </h2>
                    <p className="mb-5 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" asChild className="mt-5">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Live Site <ExternalLink size={14} />
                        </a>
                      </Button>
                    )}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      )}

      {/* CTA */}
      <Reveal>
        <div className="mt-24 border-t border-border pt-16 text-center">
          <h2 className="mb-3 font-display text-2xl font-bold sm:text-3xl">
            Want your project on this page?
          </h2>
          <p className="mx-auto mb-7 max-w-sm text-muted">
            Let&apos;s build something great together.
          </p>
          <Button asChild>
            <Link href="/contact" className="group">
              Get a Free Quote
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
