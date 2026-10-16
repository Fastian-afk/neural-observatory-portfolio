import React from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { EXPERIENCE_ITEMS } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-16 md:py-24 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          stationCode="OBS-03 // FIELD TELEMETRY"
          eyebrow="Applied AI & Research Internships"
          title="Hands-on engineering across national AI labs, aerospace technology parks, and industry R&D."
          description="Reverse-chronological record of technical internships in Islamabad and Rawalpindi."
          accent="violet"
        />

        <div className="relative border-l border-slate-800 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {EXPERIENCE_ITEMS.map((exp) => (
            <article
              key={exp.id}
              className="relative rounded-2xl border border-slate-800/90 bg-midnight/50 p-6 sm:p-7 hover:border-cyanSignal/40 transition-colors"
            >
              <span
                className="absolute -left-[31px] sm:-left-[39px] top-7 h-3.5 w-3.5 rounded-full border-2 border-cyanSignal bg-obsidian"
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyanSignal">
                  {exp.code}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emeraldTelemetry/30 bg-emeraldTelemetry/10 px-2.5 py-0.5 text-xs font-mono text-emeraldTelemetry">
                  {exp.status}
                </span>
              </div>

              <h3 className="mt-2 text-xl sm:text-2xl font-display font-bold text-softWhite">
                {exp.role}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-mono text-amberSignal">
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5" />
                  {exp.organization}
                </span>
                <span className="inline-flex items-center gap-1 text-slateSecondary">
                  <Calendar className="h-3.5 w-3.5" />
                  {exp.dates}
                </span>
                <span className="inline-flex items-center gap-1 text-slateSecondary">
                  <MapPin className="h-3.5 w-3.5" />
                  {exp.location}
                </span>
              </div>

              <p className="mt-3 text-sm sm:text-base text-slateSecondary leading-relaxed">
                {exp.summary}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slateSecondary">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-cyanSignal font-mono text-xs mt-1">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.mentorshipOrRecognition && (
                <p className="mt-4 text-xs font-mono text-emeraldTelemetry">
                  {exp.mentorshipOrRecognition}
                </p>
              )}

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {exp.domains.map((d) => (
                  <span
                    key={d}
                    className="rounded bg-obsidian px-2.5 py-1 text-xs font-mono text-slateSecondary border border-slate-800"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
