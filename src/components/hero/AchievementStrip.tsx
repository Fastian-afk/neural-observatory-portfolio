import React from "react";
import { EVIDENCE_STRIP } from "@/data/achievements";

const ACCENT_BORDER = {
  amber: "border-amberSignal/30 hover:border-amberSignal/70",
  cyan: "border-cyanSignal/30 hover:border-cyanSignal/70",
  violet: "border-violetNeural/30 hover:border-violetNeural/70",
  emerald: "border-emeraldTelemetry/30 hover:border-emeraldTelemetry/70"
};

const ACCENT_TEXT = {
  amber: "text-amberSignal",
  cyan: "text-cyanSignal",
  violet: "text-violetNeural",
  emerald: "text-emeraldTelemetry"
};

export function AchievementStrip() {
  return (
    <section
      aria-label="Verified Research and Engineering Highlights"
      className="border-b border-slate-800/80 bg-midnight/40 py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slateSecondary">
            CREDIBILITY CONSTELLATION // VERIFIED TELEMETRY
          </span>
          <span className="text-xs font-mono text-slateSecondary hidden sm:inline">
            SELECT SIGNAL TO INSPECT EVIDENCE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EVIDENCE_STRIP.map((item) => (
            <a
              key={item.id}
              href={item.targetSection}
              className={`group rounded-xl border bg-obsidian/75 p-4 transition-all hover:-translate-y-0.5 ${ACCENT_BORDER[item.accent]}`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className={`text-xl sm:text-2xl font-display font-bold ${ACCENT_TEXT[item.accent]}`}>
                  {item.metric}
                </span>
                <span className="text-[11px] font-mono text-slateSecondary group-hover:text-softWhite">
                  {item.targetSection.replace("#", "→ ").toUpperCase()}
                </span>
              </div>
              <div className="mt-1 text-sm font-medium text-softWhite">
                {item.label}
              </div>
              <p className="mt-1 text-xs text-slateSecondary leading-relaxed">
                {item.detail}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
