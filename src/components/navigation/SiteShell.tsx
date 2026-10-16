"use client";

import React, { useState } from "react";
import type { PortfolioProject } from "@/data/projects";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/navigation/Footer";
import { CinematicHero } from "@/components/hero/CinematicHero";
import { AchievementStrip } from "@/components/hero/AchievementStrip";
import { AboutSection } from "@/sections/AboutSection";
import { FeaturedWorkSection } from "@/sections/FeaturedWorkSection";
import { ResearchSection } from "@/sections/ResearchSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectArchiveSection } from "@/sections/ProjectArchiveSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { CredentialsSection } from "@/sections/CredentialsSection";
import { ContactSection } from "@/sections/ContactSection";
import { ProjectDetailModal } from "@/components/modals/ProjectDetailModal";

export function SiteShell() {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  return (
    <div className="min-h-screen bg-obsidian text-softWhite observatory-grid selection:bg-cyanSignal/25">
      <Navigation />
      <main id="main-content">
        <CinematicHero />
        <AchievementStrip />
        <AboutSection />
        <FeaturedWorkSection onSelectProject={setActiveProject} />
        <ResearchSection onSelectProject={setActiveProject} />
        <ExperienceSection />
        <ProjectArchiveSection onSelectProject={setActiveProject} />
        <SkillsSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />

      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
