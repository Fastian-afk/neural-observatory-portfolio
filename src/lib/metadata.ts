import type { Metadata } from "next";
import { LINKS } from "@/data/links";
import { PROFILE } from "@/data/profile";

export const SITE_METADATA: Metadata = {
  title: "Imaad Fazal — AI/ML Research & Engineering",
  description:
    "AI/ML research and engineering across healthcare AI, computer vision, agentic systems, explainability, and aviation safety.",
  keywords: [
    "Imaad Fazal",
    "AI/ML Researcher",
    "FAST-NUCES Islamabad",
    "Healthcare AI",
    "SepsisAI",
    "Aviation Safety AI",
    "ADS-B Unstable Approach",
    "Explainable AI",
    "Agentic AI"
  ],
  authors: [{ name: PROFILE.name, url: LINKS.linkedin }],
  openGraph: {
    title: "Imaad Fazal — AI/ML Research & Engineering | The Neural Observatory",
    description:
      "AI/ML research and engineering across healthcare AI, computer vision, agentic systems, explainability, and aviation safety.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-neural-observatory.jpg",
        width: 1200,
        height: 675,
        alt: "The Neural Observatory — Imaad Fazal AI/ML Research & Engineering Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Imaad Fazal — AI/ML Research & Engineering",
    description:
      "Building interpretable, resource-aware AI systems across clinical ML, computer vision, agentic workflows, and aviation safety.",
    images: ["/images/og-neural-observatory.jpg"]
  }
};

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: "AI/ML Researcher & Computer Science Undergraduate",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: PROFILE.education.institution
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK"
    },
    email: `mailto:${LINKS.email}`,
    sameAs: [
      LINKS.linkedin,
      LINKS.github,
      LINKS.scholar,
      LINKS.devpost,
      LINKS.kaggle
    ]
  };
}
