"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  FileText,
  ExternalLink,
  Github,
  Linkedin,
  GraduationCap,
  Code2,
  Database
} from "lucide-react";
import { LINKS } from "@/data/links";
import { copyTextWithFallback } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ContactSectionProps {
  onOpenResumeModal?: () => void;
}

export function ContactSection({ onOpenResumeModal }: ContactSectionProps) {
  const [copied, setCopied] = useState<"idle" | "copied" | "failed">("idle");

  const handleCopyEmail = async () => {
    const ok = await copyTextWithFallback(LINKS.email);
    setCopied(ok ? "copied" : "failed");
    setTimeout(() => setCopied("idle"), 2800);
  };

  const platforms = [
    {
      label: "LinkedIn",
      handle: "in/imaad-fazal",
      url: LINKS.linkedin,
      icon: Linkedin
    },
    {
      label: "GitHub",
      handle: "github.com/Fastian-afk",
      url: LINKS.github,
      icon: Github
    },
    {
      label: "Google Scholar",
      handle: "Citations & Submissions",
      url: LINKS.scholar,
      icon: GraduationCap
    },
    {
      label: "Devpost",
      handle: "devpost.com/imdufazal",
      url: LINKS.devpost,
      icon: Code2
    },
    {
      label: "Kaggle",
      handle: "kaggle.com/imaadfazal",
      url: LINKS.kaggle,
      icon: Database
    }
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          stationCode="OBS-07 // SIGNAL LINK"
          eyebrow="Direct Research & Engineering Contact"
          title="Let’s build AI systems that earn trust."
          description="Available for AI/ML research collaborations, clinical or aviation safety ML projects, graduate research inquiries, and applied AI engineering opportunities."
          accent="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Primary Contact Card */}
          <div className="lg:col-span-7 rounded-2xl border border-cyanSignal/40 bg-midnight/70 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyanSignal">
                PRIMARY TRANSMISSION CHANNEL
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-softWhite break-all">
                {LINKS.email}
              </h3>
              <p className="mt-2 text-sm text-slateSecondary leading-relaxed">
                Direct email is the fastest way to reach me regarding research supervision, applied ML internships, hackathon builds, or technical collaborations.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={LINKS.mailto}
                  className="inline-flex items-center gap-2 rounded-lg bg-cyanSignal px-5 py-3 text-sm font-semibold text-obsidian hover:bg-cyanSignal/90 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Compose Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-obsidian px-4 py-3 text-sm font-mono text-softWhite hover:border-cyanSignal transition-colors"
                >
                  {copied === "copied" ? (
                    <>
                      <Check className="h-4 w-4 text-emeraldTelemetry" />
                      <span className="text-emeraldTelemetry">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-cyanSignal" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

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
                  className="inline-flex items-center gap-2 rounded-lg border border-amberSignal/40 bg-amberSignal/10 px-4 py-3 text-sm font-mono text-amberSignal hover:bg-amberSignal/20 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  <span>Open / Download Résumé (PDF)</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slateSecondary">
              <span>LOCATION: ISLAMABAD, PAKISTAN (UTC+5)</span>
              <span>FAST-NUCES BS CS ’27</span>
            </div>
          </div>

          {/* Verified External Profiles */}
          <div className="lg:col-span-5 space-y-3">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.label}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-slate-800/90 bg-obsidian/85 p-4 hover:border-cyanSignal/50 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-midnight text-cyanSignal group-hover:border-cyanSignal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-display font-semibold text-softWhite group-hover:text-cyanSignal">
                        {platform.label}
                      </div>
                      <div className="text-xs font-mono text-slateSecondary">
                        {platform.handle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slateSecondary group-hover:text-cyanSignal" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
