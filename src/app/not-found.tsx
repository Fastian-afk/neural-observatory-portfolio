import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-obsidian text-softWhite observatory-grid flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-2xl border border-amberSignal/40 bg-midnight/85 p-8 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-amberSignal/40 bg-obsidian text-amberSignal">
          <Compass className="h-6 w-6" />
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-amberSignal">
          TELEMETRY CODE // 404 SIGNAL LOST
        </div>
        <h1 className="text-2xl font-display font-bold text-softWhite">
          Coordinates Outside Observatory Range
        </h1>
        <p className="text-sm text-slateSecondary leading-relaxed">
          The requested station or route does not exist in The Neural Observatory. Return to the main command deck to explore verified research and systems.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-cyanSignal px-5 py-2.5 text-xs font-mono font-semibold text-obsidian hover:bg-cyanSignal/90"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Command Deck</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
