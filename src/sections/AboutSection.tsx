import React from "react";
import { GraduationCap, Cpu, ShieldCheck } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 md:py-24 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          stationCode="OBS-00 // MISSION BRIEF"
          eyebrow="Research Identity & Systems Philosophy"
          title={PROFILE.missionLead}
          accent="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5">
            {PROFILE.missionParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg text-slateSecondary leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Three Research Pillars */}
            <div className="pt-4 grid grid-cols-1 gap-4">
              {PROFILE.researchPillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="rounded-xl border border-slate-800/90 bg-midnight/60 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-display font-semibold text-softWhite flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-cyanSignal" />
                      <span>{pillar.title}</span>
                    </h3>
                    <span className="text-xs font-mono text-amberSignal">
                      {pillar.proofPoint}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slateSecondary leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Dossier Card */}
          <div className="lg:col-span-5 rounded-2xl border border-cyanSignal/30 bg-midnight/70 p-6 sm:p-7 space-y-5">
            <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyanSignal">
                  ACADEMIC TELEMETRY
                </div>
                <h3 className="mt-1 text-xl font-display font-bold text-softWhite">
                  {PROFILE.education.shortName}
                </h3>
                <p className="text-xs text-slateSecondary mt-0.5">
                  {PROFILE.education.institution}
                </p>
              </div>
              <GraduationCap className="h-6 w-6 text-amberSignal shrink-0" />
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slateSecondary">Degree Program</span>
                <span className="font-medium text-softWhite">
                  {PROFILE.education.degree}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slateSecondary">Expected Graduation</span>
                <span className="font-mono text-amberSignal">
                  {PROFILE.education.expectedGraduation}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slateSecondary">Campus</span>
                <span className="text-softWhite">{PROFILE.education.location}</span>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slateSecondary mb-2.5">
                Relevant Coursework & Foundations
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PROFILE.education.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-md border border-slate-800 bg-obsidian/90 px-2.5 py-1 text-xs font-mono text-softWhite/90"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-emeraldTelemetry/30 bg-obsidian/80 p-3.5 flex items-start gap-2.5">
              <ShieldCheck className="h-4 w-4 text-emeraldTelemetry shrink-0 mt-0.5" />
              <p className="text-xs text-slateSecondary leading-relaxed">
                <strong className="text-softWhite">Evaluation Integrity Principle:</strong>{" "}
                Every metric reported in this observatory distinguishes between retrospective research prototypes, leakage-corrected baselines, and submitted manuscripts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
