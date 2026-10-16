import React from "react";

interface SectionHeadingProps {
  stationCode: string;
  eyebrow: string;
  title: string;
  description?: string;
  accent?: "cyan" | "amber" | "violet" | "emerald";
}

const ACCENT_STYLES = {
  cyan: "text-cyanSignal border-cyanSignal/30 bg-cyanSignal/10",
  amber: "text-amberSignal border-amberSignal/30 bg-amberSignal/10",
  violet: "text-violetNeural border-violetNeural/30 bg-violetNeural/10",
  emerald: "text-emeraldTelemetry border-emeraldTelemetry/30 bg-emeraldTelemetry/10"
};

export function SectionHeading({
  stationCode,
  eyebrow,
  title,
  description,
  accent = "cyan"
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono uppercase tracking-widest border ${ACCENT_STYLES[accent]}`}
        >
          {stationCode}
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-slateSecondary">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold tracking-tight text-softWhite max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-slateSecondary max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
