import React from "react";
import { LINKS, NAV_ITEMS } from "@/data/links";
import { PROFILE } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-obsidian py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-display font-semibold text-softWhite">
              {PROFILE.name} — {PROFILE.codename}
            </div>
            <p className="mt-1 text-xs font-mono text-slateSecondary">
              BS Computer Science @ FAST-NUCES Islamabad (Expected Grad: June 2027)
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-slateSecondary">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-cyanSignal transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slateMuted">
          <span>
            All research metrics, competition standings, and hackathon statuses verified against primary records.
          </span>
          <div className="flex flex-wrap gap-4">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-softWhite">
              GitHub
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-softWhite">
              LinkedIn
            </a>
            <a href={LINKS.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-softWhite">
              Scholar
            </a>
            <a href={LINKS.devpost} target="_blank" rel="noopener noreferrer" className="hover:text-softWhite">
              Devpost
            </a>
            <a href={LINKS.kaggle} target="_blank" rel="noopener noreferrer" className="hover:text-softWhite">
              Kaggle
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
