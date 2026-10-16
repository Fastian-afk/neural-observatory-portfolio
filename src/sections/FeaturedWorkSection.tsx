"use client";

import React from "react";
import { FEATURED_PROJECTS, type PortfolioProject } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProjectCard } from "@/components/cards/FeaturedProjectCard";

interface FeaturedWorkSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export function FeaturedWorkSection({ onSelectProject }: FeaturedWorkSectionProps) {
  return (
    <section
      id="work"
      className="scroll-mt-24 py-16 md:py-24 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          stationCode="OBS-01 // FLAGSHIP STATIONS"
          eyebrow="Selected Research & Engineering Case Studies"
          title="Systems engineered for interpretability, physical constraints, and real-world telemetry."
          description="Select any research station below to inspect its full problem formulation, system architecture, leakage-audited metrics, and evaluation scope."
          accent="amber"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
