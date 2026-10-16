"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Responsible Web Audio API Ambient Controller
 * - Strictly OFF by default (never autoplays).
 * - Generates a quiet, original procedural deep-space pad (warm fifth drone + low-pass filtered shimmer)
 *   only when explicitly activated by a user click.
 * - Cleans up AudioContext and nodes on unmount or mute.
 */
export function SoundController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.22);
  const [audioSupported, setAudioSupported] = useState(true);

  const ctxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) {
        setAudioSupported(false);
      }
    }
    return () => {
      stopAudioEngine();
    };
  }, []);

  const stopAudioEngine = () => {
    try {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore already stopped
        }
      });
      oscillatorsRef.current = [];
      if (ctxRef.current && ctxRef.current.state !== "closed") {
        ctxRef.current.close().catch(() => {});
      }
      ctxRef.current = null;
      masterGainRef.current = null;
    } catch {
      // safe cleanup
    }
  };

  const toggleSound = async () => {
    if (!audioSupported) return;

    if (isPlaying) {
      if (masterGainRef.current && ctxRef.current) {
        masterGainRef.current.gain.setTargetAtTime(0.0001, ctxRef.current.currentTime, 0.15);
      }
      setTimeout(() => {
        stopAudioEngine();
      }, 220);
      setIsPlaying(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      ctxRef.current = ctx;

      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(Math.max(0.02, volume * 0.18), ctx.currentTime + 1.2);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(340, ctx.currentTime);

      // Subtle LFO modulating filter cutoff for gentle observatory breathing
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.type = "sine";
      lfo.frequency.setValueAtTime(0.08, ctx.currentTime);
      lfoGain.gain.setValueAtTime(90, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      // Harmonic ambient drone frequencies (D2, A2, F#3, A3)
      const freqs = [73.42, 110.0, 185.0, 220.0];
      const createdOscs: OscillatorNode[] = [lfo];

      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        osc.detune.setValueAtTime((idx - 1.5) * 4, ctx.currentTime);
        oscGain.gain.setValueAtTime(idx < 2 ? 0.32 : 0.12, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
        createdOscs.push(osc);
      });

      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      masterGainRef.current = masterGain;
      oscillatorsRef.current = createdOscs;
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVol = parseFloat(e.target.value);
    setVolume(nextVol);
    if (masterGainRef.current && ctxRef.current && isPlaying) {
      masterGainRef.current.gain.setTargetAtTime(Math.max(0.001, nextVol * 0.18), ctxRef.current.currentTime, 0.1);
    }
  };

  if (!audioSupported) return null;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-midnight/90 px-2.5 py-1 text-xs font-mono text-slateSecondary backdrop-blur-md">
      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Mute ambient observatory audio" : "Enable ambient observatory audio"}
        className="inline-flex items-center gap-1.5 text-softWhite hover:text-cyanSignal transition-colors focus-visible:outline-none"
      >
        {isPlaying ? (
          <Volume2 className="h-3.5 w-3.5 text-cyanSignal animate-pulse" />
        ) : (
          <VolumeX className="h-3.5 w-3.5 text-slateSecondary" />
        )}
        <span>{isPlaying ? "Sound: On" : "Sound: Off"}</span>
      </button>
      {isPlaying && (
        <input
          type="range"
          min="0.05"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Ambient sound volume"
          className="w-14 accent-cyan-400 cursor-pointer"
        />
      )}
    </div>
  );
}
