import React from "react";
import { Award, Globe2, ShieldCheck, Users } from "lucide-react";
import {
  HONOURS_AND_CREDENTIALS,
  HACKATHON_LEDGER,
  LEADERSHIP_AND_ENGAGEMENT,
  type HackathonRecord
} from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BADGE_STYLES: Record<HackathonRecord["badgeTone"], string> = {
  emerald: "border-emeraldTelemetry/40 bg-emeraldTelemetry/10 text-emeraldTelemetry",
  cyan: "border-cyanSignal/40 bg-cyanSignal/10 text-cyanSignal",
  amber: "border-amberSignal/40 bg-amberSignal/10 text-amberSignal",
  slate: "border-slate-700 bg-obsidian text-slateSecondary"
};

export function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="scroll-mt-24 py-16 md:py-24 border-b border-slate-800/70 bg-midnight/25"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          stationCode="OBS-06 // HONOURS & DOSSIER"
          eyebrow="Awards, Credentials & International Engagement"
          title="Verified honours, research ethics credentials, and transparent hackathon status tracking."
          description="Every international event entry explicitly distinguishes between in-person attendance, prototype builds, upcoming selections, and invitations."
          accent="amber"
        />

        {/* Honours & Formal Credentials Grid */}
        <div className="mb-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyanSignal mb-4 flex items-center gap-2">
            <Award className="h-4 w-4 text-amberSignal" />
            <span>01 // Honours, Research Authorizations & Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HONOURS_AND_CREDENTIALS.map((cred) => (
              <article
                key={cred.id}
                className="rounded-xl border border-slate-800/90 bg-obsidian/85 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slateSecondary">
                      {cred.date}
                    </span>
                    <span className="rounded-full border border-amberSignal/35 bg-amberSignal/10 px-2.5 py-0.5 text-[11px] font-mono text-amberSignal">
                      {cred.metricOrBadge}
                    </span>
                  </div>
                  <h4 className="mt-2.5 text-base font-display font-semibold text-softWhite">
                    {cred.title}
                  </h4>
                  <p className="mt-0.5 text-xs font-mono text-cyanSignal/90">
                    {cred.issuer}
                  </p>
                  <p className="mt-2 text-xs text-slateSecondary leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* International Hackathon & Competition Ledger */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyanSignal flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-cyanSignal" />
              <span>02 // International Hackathon & Global Selection Ledger (Status-Audited)</span>
            </h3>
            <span className="text-[11px] font-mono text-slateSecondary">
              Explicit Distinction: Attended vs. Prototype Built vs. Selected/Invited
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HACKATHON_LEDGER.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-800/90 bg-obsidian/85 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slateSecondary">
                    {item.date} · {item.locationOrHost}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-mono font-medium ${BADGE_STYLES[item.badgeTone]}`}
                  >
                    {item.status}
                  </span>
                </div>
                <h4 className="mt-2 text-base font-display font-semibold text-softWhite">
                  {item.event}
                </h4>
                <p className="mt-1.5 text-xs text-slateSecondary leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership, Service & Technical Engagement */}
        <div className="rounded-2xl border border-slate-800/90 bg-obsidian/80 p-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyanSignal mb-3 flex items-center gap-2">
            <Users className="h-4 w-4 text-emeraldTelemetry" />
            <span>03 // Leadership, Community Service & Technical Engagement</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slateSecondary">
            {LEADERSHIP_AND_ENGAGEMENT.map((entry, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-cyanSignal shrink-0 mt-0.5" />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
