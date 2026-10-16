"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Compass, FileText } from "lucide-react";
import { NAV_ITEMS, LINKS } from "@/data/links";
import { SoundController } from "@/components/audio/SoundController";

interface NavigationProps {
  onOpenResumeModal?: () => void;
}

export function Navigation({ onOpenResumeModal }: NavigationProps) {
  const [activeId, setActiveId] = useState<string>("overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const offsets = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top - 140) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0] && offsets[0].top < Infinity) {
        setActiveId(offsets[0].id);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "border-b border-slate-800/80 bg-obsidian/90 backdrop-blur-xl py-2.5"
          : "bg-obsidian/70 backdrop-blur-md py-3.5"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-cyanSignal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-obsidian"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#overview"
          className="flex items-center gap-2.5 text-left group"
          aria-label="Imaad Fazal — Neural Observatory Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyanSignal/40 bg-midnight text-cyanSignal group-hover:border-amberSignal group-hover:text-amberSignal transition-colors">
            <Compass className="h-4 w-4" />
          </span>
          <div>
            <span className="block text-sm font-display font-semibold tracking-tight text-softWhite">
              IMAAD FAZAL
            </span>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-cyanSignal">
              NEURAL OBSERVATORY
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                  isActive
                    ? "bg-cyanSignal/15 text-cyanSignal border border-cyanSignal/30"
                    : "text-slateSecondary hover:text-softWhite hover:bg-midnight/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <SoundController />
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
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-amberSignal/40 bg-amberSignal/10 px-3 py-1.5 text-xs font-mono font-medium text-amberSignal hover:bg-amberSignal/20 transition-colors"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Résumé</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex lg:hidden items-center justify-center rounded-lg border border-slate-800 bg-midnight p-2 text-softWhite hover:border-cyanSignal"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-slate-800 bg-obsidian/95 px-4 py-4 space-y-1"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-mono text-softWhite hover:bg-midnight"
            >
              <span>{item.label}</span>
              <span className="text-xs text-cyanSignal">{item.code}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
