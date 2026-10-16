"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { SceneFallback } from "./SceneFallback";

interface NeuralObservatorySceneProps {
  onSelectStation?: (sectionId: string) => void;
}

const HOTSPOTS = [
  { id: "work", code: "STN-01", label: "Selected Work", sub: "ADS-B · SepsisAI · DreamTrip", pos: "top-5 left-5", color: "border-amberSignal/50 text-amberSignal" },
  { id: "research", code: "STN-02", label: "Research Log", sub: "IEEE IRAI · Safety Science", pos: "top-5 right-5", color: "border-cyanSignal/50 text-cyanSignal" },
  { id: "experience", code: "STN-03", label: "Field Telemetry", sub: "TechGIS · NCAI · NASTP", pos: "bottom-12 left-5", color: "border-violetNeural/50 text-violetNeural" },
  { id: "contact", code: "STN-07", label: "Signal Link", sub: "Direct Collaborations", pos: "bottom-12 right-5", color: "border-emeraldTelemetry/50 text-emeraldTelemetry" }
];

export default function NeuralObservatoryScene({ onSelectStation }: NeuralObservatorySceneProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [webglFailed, setWebglFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [telemetryMode, setTelemetryMode] = useState<"all" | "aviation" | "clinical" | "agentic">("all");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container || reducedMotion) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      setWebglFailed(true);
      return;
    }

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 440;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 6.4);
    camera.lookAt(0, 0, 0);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Neural Core (Icosahedron wireframe + inner glowing core)
    const coreGeo = new THREE.IcosahedronGeometry(1.05, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x69e1ff,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreWireMat);
    rootGroup.add(coreMesh);

    const innerGeo = new THREE.IcosahedronGeometry(0.58, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffbf69,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerMesh);

    // 2. Orbital Rings (Aviation Amber Ring + Clinical Cyan Ring + Agentic Violet Ring)
    const ring1Geo = new THREE.TorusGeometry(1.75, 0.012, 12, 96);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xffbf69, transparent: true, opacity: 0.65 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.set(Math.PI / 2.6, 0.35, 0);
    rootGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.15, 0.01, 12, 96);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x69e1ff, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.set(Math.PI / 1.8, -0.45, 0.2);
    rootGroup.add(ring2);

    // 3. Subtle Runway Grid Floor beneath the core
    const gridHelper = new THREE.GridHelper(7, 14, 0x69e1ff, 0x1e293b);
    gridHelper.position.y = -1.75;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.28;
    scene.add(gridHelper);

    // 4. Sparse Constellation Particles
    const particleCount = window.innerWidth < 768 ? 55 : 110;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 1.4 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0x69e1ff, size: 0.045, transparent: true, opacity: 0.75 });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    let pointerX = 0;
    let pointerY = 0;
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.55;
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.35;
    };
    container.addEventListener("pointermove", onPointerMove);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || 520;
      const h = container.clientHeight || 440;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (document.hidden) return;
      coreMesh.rotation.y += 0.0032;
      coreMesh.rotation.x += 0.0014;
      innerMesh.rotation.y -= 0.0045;
      ring1.rotation.z += 0.0025;
      ring2.rotation.z -= 0.002;
      particles.rotation.y += 0.0012;

      rootGroup.rotation.y += (pointerX - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (pointerY - rootGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
    };
  }, [reducedMotion, telemetryMode]);

  if (webglFailed || reducedMotion) {
    return <SceneFallback onSelectStation={onSelectStation} />;
  }

  return (
    <div
      className="relative h-[380px] sm:h-[450px] w-full rounded-2xl border border-slate-800/80 bg-gradient-to-b from-midnight/80 via-obsidian to-obsidian overflow-hidden shadow-2xl"
      role="region"
      aria-label="Interactive 3D Neural Observatory Command Core"
    >
      <div ref={mountRef} className="h-full w-full cursor-grab active:cursor-grabbing" />

      {/* Station Shortcut Nodes */}
      {HOTSPOTS.map((spot) => (
        <button
          key={spot.id}
          type="button"
          onClick={() => onSelectStation?.(spot.id)}
          className={`absolute ${spot.pos} group text-left rounded-lg border bg-obsidian/85 px-3 py-1.5 backdrop-blur-md transition-all hover:scale-105 hover:bg-midnight ${spot.color}`}
        >
          <div className="text-[10px] font-mono uppercase tracking-wider opacity-80">{spot.code}</div>
          <div className="text-xs font-medium text-softWhite group-hover:underline">{spot.label}</div>
          <div className="hidden sm:block text-[10px] text-slateSecondary">{spot.sub}</div>
        </button>
      ))}

      {/* Bottom Telemetry Mode Bar */}
      <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-800/80 bg-obsidian/90 px-3 py-1.5 text-[11px] font-mono text-slateSecondary">
        <span className="text-cyanSignal">CORE TELEMETRY // WEBGL ACTIVE</span>
        <div className="flex items-center gap-1.5">
          {(["all", "aviation", "clinical", "agentic"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setTelemetryMode(mode)}
              className={`px-2 py-0.5 rounded uppercase transition-colors ${
                telemetryMode === mode
                  ? "bg-cyanSignal/20 text-cyanSignal border border-cyanSignal/40"
                  : "text-slateSecondary hover:text-softWhite"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
