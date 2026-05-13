import { Metadata } from "next";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of websites and custom software built by Mobrauntech for small businesses.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--text)] mb-4">Our Work</h1>
        <p className="text-[var(--text-muted)] text-lg max-w-xl">
          Projects we&apos;ve built for small businesses. Each one is unique,
          tailored to the client&apos;s needs and goals.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-[var(--border)] rounded-xl">
          <p className="text-[var(--text-muted)]">Projects coming soon.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden">
              {project.imageUrl && (
                <div className="relative w-full aspect-video bg-[var(--bg-secondary)]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {!project.imageUrl && (
                <div className="w-full aspect-video bg-[var(--bg-secondary)] flex items-center justify-center border-b border-[var(--border)]">
                  <span className="text-[var(--text-muted)] text-sm">No preview</span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live Site <ExternalLink size={14} />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-20 text-center border-t border-[var(--border)] pt-16">
        <h2 className="text-2xl font-bold text-[var(--text)] mb-3">
          Want to be on this page?
        </h2>
        <p className="text-[var(--text-muted)] mb-6 max-w-sm mx-auto">
          Let&apos;s build something great together.
        </p>
        <Button asChild>
          <Link href="/contact">
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
