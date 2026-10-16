"use client";

import React, { useMemo, useState } from "react";
import { Search, ArrowUpRight, Github } from "lucide-react";
import {
  PROJECTS,
  ARCHIVE_CATEGORIES,
  type PortfolioProject,
  type ProjectCategory
} from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ProjectArchiveSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export function ProjectArchiveSection({ onSelectProject }: ProjectArchiveSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory ||
        project.tags.includes(selectedCategory);
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;
      const hay = `${project.title} ${project.subtitle} ${project.shortDescription} ${project.tools.join(" ")}`.toLowerCase();
      return matchesCategory && hay.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="archive"
      className="scroll-mt-24 py-16 md:py-24 border-b border-slate-800/70 bg-midnight/25"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          stationCode="OBS-04 // SYSTEM ARCHIVE"
          eyebrow="Complete Engineering & Research Index"
          title="Filterable archive across clinical ML, computer vision, hackathons, and systems programming."
          accent="cyan"
        />

        {/* Filter & Search Bar */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div
            className="flex flex-wrap gap-1.5"
            role="group"
            aria-label="Filter projects by domain"
          >
            {ARCHIVE_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={active}
                  className={`rounded-lg px-3 py-1.5 text-xs font-mono transition-colors ${
                    active
                      ? "bg-cyanSignal text-obsidian font-semibold"
                      : "border border-slate-800 bg-obsidian/80 text-slateSecondary hover:text-softWhite hover:border-slate-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="h-4 w-4 text-slateSecondary absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools, models, datasets..."
              aria-label="Search projects by keyword"
              className="w-full rounded-lg border border-slate-800 bg-obsidian py-2 pl-9 pr-3 text-xs font-mono text-softWhite placeholder:text-slateMuted focus:border-cyanSignal focus:outline-none"
            />
          </div>
        </div>

        {/* Archive Grid */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-xl border border-slate-800 bg-obsidian/60 p-8 text-center">
            <p className="text-sm font-mono text-slateSecondary">
              No projects matched that filter combination.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 rounded-lg border border-cyanSignal/40 bg-cyanSignal/10 px-4 py-1.5 text-xs font-mono text-cyanSignal"
            >
              Reset Archive Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-xl border border-slate-800/90 bg-obsidian/85 p-5 flex flex-col justify-between hover:border-cyanSignal/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                    <span className="text-cyanSignal">{project.stationCode}</span>
                    <span className="text-slateSecondary">{project.year}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-display font-semibold text-softWhite">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-amberSignal/90">
                    {project.status}
                  </p>
                  <p className="mt-2.5 text-xs text-slateSecondary leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tools.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded bg-midnight px-2 py-0.5 text-[10px] font-mono text-slateSecondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-cyanSignal hover:underline"
                    >
                      <span>Inspect Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-slateSecondary hover:text-softWhite"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
