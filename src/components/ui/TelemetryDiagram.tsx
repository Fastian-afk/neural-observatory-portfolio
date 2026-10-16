import React from "react";
import type { PortfolioProject } from "@/data/projects";

interface TelemetryDiagramProps {
  type: PortfolioProject["diagramType"];
  image?: string;
  title: string;
}

export function TelemetryDiagram({ type, image, title }: TelemetryDiagramProps) {
  if (type === "dreamtrip-arcs" && image) {
    return (
      <div className="relative h-52 w-full overflow-hidden rounded-lg border border-slate-800/80 bg-obsidian">
        <img
          src={image}
          alt={`${title} — Barcelona geodesic route discovery illustration`}
          className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className=" inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        <div className="bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-cyanSignal">
          <span>BCN // HACKUPC 2026</span>
          <span>MULTI-CITY SENTIMENT EMBEDDINGS</span>
        </div>
      </div>
    );
  }

  if (type === "aviation-radar") {
    return (
      <div className="relative h-52 w-full overflow-hidden rounded-lg border border-amberSignal/25 bg-obsidian p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono text-amberSignal">
          <span>ADS-B GLIDESLOPE TELEMETRY // 3.0° REF</span>
          <span>cVAE + PHYSICS FILTER</span>
        </div>
        <svg viewBox="0 0 400 130" className="w-full h-28 overflow-visible" role="img" aria-label="ADS-B unstable approach glide slope vs nominal corridor diagram">
          <defs>
            <linearGradient id="amberGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFBF69" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFBF69" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <line x1="20" y1="110" x2="380" y2="110" stroke="rgba(148,163,184,0.2)" strokeDasharray="3 3" />
          <path d="M 25 25 L 365 108" stroke="rgba(105,225,255,0.45)" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
          <path d="M 25 18 Q 140 12, 210 62 T 365 108" stroke="url(#amberGrad)" strokeWidth="2.5" fill="none" />
          <circle cx="210" cy="62" r="4.5" fill="#FFBF69" />
          <text x="155" y="46" fill="#FFBF69" fontSize="10" fontFamily="monospace">SHAP: High Sink-Rate + Energy Dev</text>
          <text x="28" y="102" fill="#69E1FF" fontSize="9.5" fontFamily="monospace">Honest Baseline: 0.8923 → cVAE: 0.8962</text>
        </svg>
        <div className="flex items-center justify-between text-[10px] font-mono text-slateSecondary">
          <span>10 NM APPROACH GATE</span>
          <span>THRESHOLD // &lt;50MS AGENT ADVISORY</span>
        </div>
      </div>
    );
  }

  if (type === "sepsis-waveform") {
    return (
      <div className="relative h-52 w-full overflow-hidden rounded-lg border border-cyanSignal/25 bg-obsidian p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono text-cyanSignal">
          <span>MIMIC ICU // HEMODYNAMIC TRAJECTORY</span>
          <span>AUROC 0.927 · ~24M LEAD</span>
        </div>
        <svg viewBox="0 0 400 130" className="w-full h-28" role="img" aria-label="Synthetic ICU sepsis early-warning risk trajectory">
          <line x1="280" y1="10" x2="280" y2="115" stroke="#FFBF69" strokeWidth="1.2" strokeDasharray="4 3" />
          <path
            d="M 15 95 C 70 92, 120 88, 175 74 C 220 58, 250 35, 375 18"
            stroke="#69E1FF"
            strokeWidth="2.5"
            fill="none"
          />
          <circle cx="235" cy="44" r="4" fill="#69E1FF" />
          <text x="145" y="34" fill="#69E1FF" fontSize="10" fontFamily="monospace">SepsisAI Alert (-24 min)</text>
          <text x="286" y="26" fill="#FFBF69" fontSize="10" fontFamily="monospace">Clinical Onset</text>
          <text x="20" y="112" fill="#94A3B8" fontSize="9.5" fontFamily="monospace">8.9× Cohort Risk Separation (Synthetic Demo Curve)</text>
        </svg>
        <div className="flex items-center justify-between text-[10px] font-mono text-slateSecondary">
          <span>HR · MAP · LACTATE · WBC</span>
          <span>RESEARCH EVALUATION ONLY</span>
        </div>
      </div>
    );
  }

  if (type === "prescription-pipeline") {
    return (
      <div className="relative h-52 w-full overflow-hidden rounded-lg border border-violetNeural/25 bg-obsidian p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono text-violetNeural">
          <span>MIDL / NCAI // HYBRID VLM + AGENT WORKFLOW</span>
          <span>SYNTHETIC TRACE</span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="rounded border border-slate-800 bg-midnight/90 p-2.5">
            <div className="text-[10px] font-mono text-cyanSignal">01. OCR + VLM</div>
            <div className="mt-1 text-xs font-medium text-softWhite">Nanonets + Ollama</div>
            <div className="mt-0.5 text-[10px] text-slateSecondary">Handwritten layout parse</div>
          </div>
          <div className="rounded border border-slate-800 bg-midnight/90 p-2.5">
            <div className="text-[10px] font-mono text-violetNeural">02. TOOL AGENT</div>
            <div className="mt-1 text-xs font-medium text-softWhite">LangChain Lookup</div>
            <div className="mt-0.5 text-[10px] text-slateSecondary">Dosage & side-effects</div>
          </div>
          <div className="rounded border border-slate-800 bg-midnight/90 p-2.5">
            <div className="text-[10px] font-mono text-emeraldTelemetry">03. CLINICAL Q&A</div>
            <div className="mt-1 text-xs font-medium text-softWhite">MedGemMA 4.0</div>
            <div className="mt-0.5 text-[10px] text-slateSecondary">Grounded synthesis</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono text-slateSecondary">
          <span>NON-PRESCRIBING RESEARCH PIPELINE</span>
          <span>NCAI ISLAMABAD</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-52 w-full overflow-hidden rounded-lg border border-emeraldTelemetry/25 bg-obsidian p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between text-[11px] font-mono text-emeraldTelemetry">
        <span>RESNET18 // GRAD-CAM SALIENCY AUDIT</span>
        <span>PYTORCH VISION</span>
      </div>
      <svg viewBox="0 0 400 120" className="w-full h-28" role="img" aria-label="Conceptual Grad-CAM spatial attention schematic">
        <rect x="30" y="12" width="110" height="96" rx="8" fill="#0B1224" stroke="rgba(148,163,184,0.3)" />
        <ellipse cx="68" cy="60" rx="18" ry="30" fill="none" stroke="rgba(105,225,255,0.4)" />
        <ellipse cx="102" cy="60" rx="18" ry="30" fill="none" stroke="rgba(105,225,255,0.4)" />
        <circle cx="102" cy="64" r="14" fill="rgba(255,191,105,0.38)" />
        <circle cx="102" cy="64" r="7" fill="rgba(255,191,105,0.75)" />
        <path d="M 155 60 L 215 60" stroke="#69E1FF" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="225" y="22" width="145" height="76" rx="6" fill="#0B1224" stroke="rgba(52,211,153,0.35)" />
        <text x="238" y="46" fill="#F2F5FA" fontSize="10.5" fontFamily="monospace">Conv5_x Gradient Hook</text>
        <text x="238" y="65" fill="#34D399" fontSize="10" fontFamily="monospace">Lobar Opacity Focus</text>
        <text x="238" y="83" fill="#94A3B8" fontSize="9" fontFamily="monospace">Explanatory Saliency Only</text>
      </svg>
      <div className="flex items-center justify-between text-[10px] font-mono text-slateSecondary">
        <span>SPATIAL ATTRIBUTION LAYER</span>
        <span>RESEARCH PROTOTYPE</span>
      </div>
    </div>
  );
}
