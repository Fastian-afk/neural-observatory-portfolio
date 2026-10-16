import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import type { PortfolioProject } from "@/data/projects";
import { TelemetryDiagram } from "@/components/ui/TelemetryDiagram";

interface FeaturedProjectCardProps {
  project: PortfolioProject;
  onSelect: (project: PortfolioProject) => void;
}

export function FeaturedProjectCard({ project, onSelect }: FeaturedProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-800/90 bg-midnight/50 hover:border-cyanSignal/50 transition-all duration-300 overflow-hidden flex flex-col justify-between p-6">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-cyanSignal">
            {project.stationCode}
          </span>
          <span className="rounded-full border border-slate-700 bg-obsidian/90 px-2.5 py-0.5 text-[11px] font-mono text-amberSignal">
            {project.status}
          </span>
        </div>

        <TelemetryDiagram
          type={project.diagramType}
          image={project.image}
          title={project.title}
        />

        <div className="mt-5">
          <div className="text-xs font-mono text-slateSecondary">
            {project.category} · {project.year} · {project.role}
          </div>
          <h3 className="mt-1.5 text-xl sm:text-2xl font-display font-semibold text-softWhite group-hover:text-cyanSignal transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-xs font-mono text-amberSignal/90">
            {project.subtitle}
          </p>
          <p className="mt-3 text-sm text-slateSecondary leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Key Verified Metrics */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {project.metrics.slice(0, 3).map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-slate-800/90 bg-obsidian/80 p-2.5"
            >
              <div className="text-sm sm:text-base font-display font-bold text-softWhite">
                {m.value}
              </div>
              <div className="text-[11px] font-mono text-slateSecondary">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded bg-obsidian px-2 py-0.5 text-[11px] font-mono text-slateSecondary border border-slate-800"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-obsidian px-3 py-1.5 text-xs font-mono text-softWhite hover:border-cyanSignal"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Repo</span>
            </a>
          )}
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-cyanSignal/15 border border-cyanSignal/40 px-3.5 py-1.5 text-xs font-mono font-medium text-cyanSignal hover:bg-cyanSignal hover:text-obsidian transition-colors"
          >
            <span>Inspect Station Dossier</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
