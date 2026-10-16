import React from "react";

interface SceneFallbackProps {
  onSelectStation?: (sectionId: string) => void;
}

export function SceneFallback({ onSelectStation }: SceneFallbackProps) {
  const stations = [
    { id: "work", label: "STN-01 · Selected Work", x: "18%", y: "24%", tone: "border-amberSignal/50 text-amberSignal" },
    { id: "research", label: "STN-02 · Research Log", x: "72%", y: "22%", tone: "border-cyanSignal/50 text-cyanSignal" },
    { id: "experience", label: "STN-03 · Field Telemetry", x: "16%", y: "74%", tone: "border-violetNeural/50 text-violetNeural" },
    { id: "contact", label: "STN-07 · Signal Link", x: "70%", y: "76%", tone: "border-emeraldTelemetry/50 text-emeraldTelemetry" }
  ];

  return (
    <div
      className="relative h-[380px] sm:h-[440px] w-full rounded-2xl border border-slate-800/80 bg-midnight/70 overflow-hidden flex items-center justify-center p-6"
      role="region"
      aria-label="Neural Observatory schematic fallback view"
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full max-w-[400px] max-h-[400px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#69E1FF" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#FFBF69" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#070A12" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="250" r="195" fill="url(#coreGlow)" />
        <ellipse cx="250" cy="250" rx="185" ry="72" fill="none" stroke="rgba(105,225,255,0.28)" strokeWidth="1.2" strokeDasharray="6 4" transform="rotate(-22 250 250)" />
        <ellipse cx="250" cy="250" rx="165" ry="64" fill="none" stroke="rgba(255,191,105,0.32)" strokeWidth="1.2" transform="rotate(28 250 250)" />
        <circle cx="250" cy="250" r="110" fill="none" stroke="rgba(157,123,255,0.25)" strokeWidth="1" />
        <circle cx="250" cy="250" r="44" fill="#0B1224" stroke="#69E1FF" strokeWidth="2" />
        <circle cx="250" cy="250" r="14" fill="#FFBF69" />
      </svg>

      {stations.map((st) => (
        <button
          key={st.id}
          type="button"
          onClick={() => onSelectStation?.(st.id)}
          style={{ left: st.x, top: st.y }}
          className={`absolute px-2.5 py-1 rounded-md border bg-obsidian/90 text-[11px] font-mono backdrop-blur-md transition-transform hover:scale-105 ${st.tone}`}
        >
          {st.label}
        </button>
      ))}

      <div className="bottom-3 left-4 right-4 absolute flex items-center justify-between text-[11px] font-mono text-slateSecondary">
        <span>STATIC SCHEMATIC MODE // REDUCED MOTION READY</span>
        <span>CLICK STATION TO JUMP</span>
      </div>
    </div>
  );
}
