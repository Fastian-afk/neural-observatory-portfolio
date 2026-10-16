"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight, FileText, Github, Linkedin, Sparkles } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { LINKS } from "@/data/links";
import { SceneErrorBoundary } from "@/components/scene/SceneErrorBoundary";
import { SceneFallback } from "@/components/scene/SceneFallback";

const NeuralObservatoryScene = dynamic(
  () => import("@/components/scene/NeuralObservatoryScene"),
  {
    ssr: false,
    loading: () => <SceneFallback />
  }
);

interface CinematicHeroProps {
  onOpenResumeModal?: () => void;
}

export function CinematicHero({ onOpenResumeModal }: CinematicHeroProps) {
  const handleSelectStation = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="overview"
      className="relative scroll-mt-24 pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Foreground HTML Editorial Layer */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-cyanSignal/30 bg-midnight/80 px-3.5 py-1.5 text-xs font-mono text-cyanSignal">
              <Sparkles className="h-3.5 w-3.5 text-amberSignal" />
              <span>{PROFILE.statusBadge}</span>
            </div>

            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-amberSignal">
                {PROFILE.roleLine}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-softWhite leading-[1.08]">
                {PROFILE.name}
              </h1>
              <p className="text-xl sm:text-2xl font-display font-medium text-cyanSignal/95 pt-1">
                {PROFILE.headline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slateSecondary leading-relaxed max-w-2xl">
              {PROFILE.thesis}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg bg-cyanSignal px-5 py-3 text-sm font-semibold text-obsidian shadow-lg shadow-cyanSignal/20 hover:bg-cyanSignal/90 transition-all"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={LINKS.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenResumeModal) {
                    e.preventDefault();
                    onOpenResumeModal();
                  }
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-midnight/90 px-5 py-3 text-sm font-medium text-softWhite hover:border-amberSignal hover:text-amberSignal transition-colors"
              >
                <FileText className="h-4 w-4 text-amberSignal" />
                <span>View Résumé</span>
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Imaad Fazal on GitHub"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-midnight/60 px-3 py-2.5 text-xs font-mono text-slateSecondary hover:border-cyanSignal hover:text-softWhite transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Imaad Fazal on LinkedIn"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-midnight/60 px-3 py-2.5 text-xs font-mono text-slateSecondary hover:border-cyanSignal hover:text-softWhite transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Telemetry Metadata Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 max-w-xl">
              <div>
                <div className="text-[11px] font-mono uppercase text-slateSecondary">BASE STATION</div>
                <div className="text-xs sm:text-sm font-medium text-softWhite">Islamabad, PK</div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-slateSecondary">INSTITUTION</div>
                <div className="text-xs sm:text-sm font-medium text-softWhite">FAST-NUCES (’27)</div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-slateSecondary">PRIMARY FOCUS</div>
                <div className="text-xs sm:text-sm font-medium text-amberSignal">Clinical · Aviation · XAI</div>
              </div>
            </div>
          </div>

          {/* Isolated Lazy-Loaded 3D Neural Observatory Core */}
          <div className="lg:col-span-5">
            <SceneErrorBoundary onSelectStation={handleSelectStation}>
              <NeuralObservatoryScene onSelectStation={handleSelectStation} />
            </SceneErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
}
