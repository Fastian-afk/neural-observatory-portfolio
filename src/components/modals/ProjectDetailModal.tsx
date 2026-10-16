"use client";

import React, { useEffect } from "react";
import { X, Github, AlertTriangle, CheckCircle2, Layers } from "lucide-react";
import type { PortfolioProject } from "@/data/projects";

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/85 p-4 sm:p-6 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-3xl rounded-2xl border border-cyanSignal/40 bg-midnight p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyanSignal">
              <span>{project.stationCode}</span>
              <span>·</span>
              <span>{project.year}</span>
              <span>·</span>
              <span className="text-amberSignal">{project.status}</span>
            </div>
            <h2
              id="modal-project-title"
              className="mt-1.5 text-2xl sm:text-3xl font-display font-bold text-softWhite"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-xs font-mono text-slateSecondary">
              Role: {project.role}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study dossier"
            className="rounded-lg border border-slate-700 bg-obsidian p-2 text-slateSecondary hover:border-cyanSignal hover:text-softWhite"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-slate-800 bg-obsidian/90 p-3"
            >
              <div className="text-lg font-display font-bold text-cyanSignal">
                {m.value}
              </div>
              <div className="text-xs font-medium text-softWhite">{m.label}</div>
              {m.note && (
                <div className="mt-0.5 text-[10px] font-mono text-slateSecondary">
                  {m.note}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-slateSecondary">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-softWhite">
              01 // Problem & High-Stakes Context
            </h3>
            <p className="mt-1.5">{project.problem}</p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-softWhite">
              02 // Specific Role & Engineering Contribution
            </h3>
            <p className="mt-1.5">{project.roleContribution}</p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-softWhite">
              03 // Methodology & Technical Approach
            </h3>
            <p className="mt-1.5">{project.approach}</p>
          </div>

          {project.architecture.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-softWhite flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-cyanSignal" />
                <span>04 // System Architecture Pipeline</span>
              </h3>
              <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-xl border border-slate-800 bg-obsidian/70 p-3.5"
                  >
                    <div className="text-xs font-mono text-cyanSignal">
                      STEP {step.step} — {step.title}
                    </div>
                    <p className="mt-1 text-xs text-slateSecondary">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-emeraldTelemetry/30 bg-obsidian/70 p-4">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-emeraldTelemetry">
                <CheckCircle2 className="h-4 w-4" />
                <span>Verified Outcome</span>
              </div>
              <p className="mt-1.5 text-xs text-slateSecondary">{project.outcome}</p>
            </div>

            <div className="rounded-xl border border-amberSignal/30 bg-obsidian/70 p-4">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-amberSignal">
                <AlertTriangle className="h-4 w-4" />
                <span>Evaluation Scope & Limitations</span>
              </div>
              <p className="mt-1.5 text-xs text-slateSecondary">{project.limitations}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-softWhite">
              Data Inputs & Stack
            </h3>
            <p className="mt-1 text-xs text-slateSecondary">{project.dataInputs}</p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-slate-800 bg-obsidian px-2.5 py-1 text-xs font-mono text-cyanSignal"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-cyanSignal px-4 py-2 text-xs font-mono font-semibold text-obsidian hover:bg-cyanSignal/90"
            >
              <Github className="h-4 w-4" />
              <span>View Verified GitHub Repository</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-slateSecondary">
              {project.paperStatusNote || "Internal Lab / Research Prototype Codebase"}
            </span>
          )}

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 bg-obsidian px-4 py-2 text-xs font-mono text-softWhite hover:border-cyanSignal"
          >
            Close Station Dossier (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
