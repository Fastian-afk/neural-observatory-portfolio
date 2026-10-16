"use client";

import React from "react";
import { BookOpen, ExternalLink, FileCheck2 } from "lucide-react";
import { RESEARCH_ITEMS } from "@/data/research";
import { PROJECTS, type PortfolioProject } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ResearchSectionProps {
  onSelectProject?: (project: PortfolioProject) => void;
}

export function ResearchSection({ onSelectProject }: ResearchSectionProps) {
  return (
    <section
      id="research"
      className="scroll-mt-24 py-16 md:py-24 border-b border-slate-800/70 bg-midnight/25"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          stationCode="OBS-02 // RESEARCH LOG"
          eyebrow="Manuscript Submissions & Empirical Evaluation"
          title="Research outputs with transparent methodology and explicit publication status."
          description="Distinguishing submitted manuscripts, global competition recognition, and ongoing credentialed clinical dataset investigations."
          accent="cyan"
        />

        <div className="space-y-6">
          {RESEARCH_ITEMS.map((item) => {
            const linkedProject = item.relatedProjectId
              ? PROJECTS.find((p) => p.id === item.relatedProjectId)
              : undefined;

            return (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-800/90 bg-obsidian/85 p-6 sm:p-7 transition-colors hover:border-cyanSignal/40"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyanSignal">
                      {item.code}
                    </span>
                    <span className="text-xs font-mono text-slateSecondary">
                      · {item.year} · {item.authorship}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amberSignal/40 bg-amberSignal/10 px-3 py-1 text-xs font-mono font-medium text-amberSignal">
                    <FileCheck2 className="h-3.5 w-3.5" />
                    <span>{item.statusBadge}</span>
                  </span>
                </div>

                <h3 className="mt-3 text-xl sm:text-2xl font-display font-semibold text-softWhite">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-mono text-cyanSignal/90">
                  {item.venueOrContext}
                </p>

                <p className="mt-3 text-sm sm:text-base text-slateSecondary leading-relaxed">
                  {item.abstractSummary}
                </p>

                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {item.methodologicalHighlights.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="rounded-lg border border-slate-800/80 bg-midnight/50 p-3 text-xs text-slateSecondary leading-relaxed"
                    >
                      <span className="font-mono text-cyanSignal mr-1.5">[{idx + 1}]</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-mono text-slateSecondary max-w-2xl">
                    {item.integrityNote}
                  </p>

                  <div className="flex items-center gap-2.5">
                    {linkedProject && onSelectProject && (
                      <button
                        type="button"
                        onClick={() => onSelectProject(linkedProject)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-cyanSignal/40 bg-cyanSignal/10 px-3 py-1.5 text-xs font-mono text-cyanSignal hover:bg-cyanSignal hover:text-obsidian transition-colors"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Open Technical Dossier</span>
                      </button>
                    )}
                    {item.scholarUrl && (
                      <a
                        href={item.scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-midnight px-3 py-1.5 text-xs font-mono text-softWhite hover:border-cyanSignal"
                      >
                        <span>Google Scholar Profile</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
