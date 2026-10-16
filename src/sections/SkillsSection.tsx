import React from "react";
import { SKILL_CLUSTERS } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-16 md:py-24 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          stationCode="OBS-05 // TECHNICAL ATLAS"
          eyebrow="Capabilities by Engineering Domain"
          title="Structured domain clusters grounded in real research pipelines—no arbitrary percentage bars."
          description="Every tool and framework listed below maps directly to coursework, lab internships, or verified repository builds."
          accent="emerald"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CLUSTERS.map((cluster) => (
            <article
              key={cluster.id}
              className="rounded-2xl border border-slate-800/90 bg-midnight/50 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyanSignal">
                  {cluster.code}
                </div>
                <h3 className="mt-1 text-xl font-display font-semibold text-softWhite">
                  {cluster.title}
                </h3>
                <p className="mt-1 text-xs text-slateSecondary">
                  {cluster.subtitle}
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cluster.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-lg border border-slate-800 bg-obsidian/80 px-3 py-2"
                    >
                      <div className="text-xs font-semibold text-softWhite">
                        {skill.name}
                      </div>
                      <div className="text-[10px] font-mono text-slateSecondary mt-0.5">
                        {skill.contextTag}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-xs font-mono text-amberSignal/90">
                {cluster.appliedContext}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
