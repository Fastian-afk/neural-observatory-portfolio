export interface EvidenceStripItem {
  id: string;
  metric: string;
  label: string;
  detail: string;
  targetSection: string;
  accent: "amber" | "cyan" | "violet" | "emerald";
}

export const EVIDENCE_STRIP: EvidenceStripItem[] = [
  {
    id: "ev-ieee",
    metric: "Top 10 / 575+",
    label: "IEEE IES GenAI Challenge 2026",
    detail: "Global finalist shortlisted for IRAI Conference, Melbourne",
    targetSection: "#work",
    accent: "amber"
  },
  {
    id: "ev-author",
    metric: "First Author",
    label: "Aviation Safety AI Research",
    detail: "Physics-constrained ADS-B & sub-50 ms decision agents",
    targetSection: "#research",
    accent: "amber"
  },
  {
    id: "ev-sepsis",
    metric: "0.927 AUROC",
    label: "SepsisAI Clinical Pipeline",
    detail: "~24-min lead time & 8.9× risk separation on MIMIC",
    targetSection: "#work",
    accent: "cyan"
  },
  {
    id: "ev-hackupc",
    metric: "HackUPC ’26",
    label: "Barcelona International Build",
    detail: "Represented Pakistan & FAST-NUCES in Skyscanner challenge",
    targetSection: "#credentials",
    accent: "violet"
  },
  {
    id: "ev-internships",
    metric: "3 AI Labs",
    label: "TechGIS · MIDL/NCAI · NASTP",
    detail: "Applied ML across healthcare, aerospace & agentic systems",
    targetSection: "#experience",
    accent: "cyan"
  },
  {
    id: "ev-ielts",
    metric: "Band 8.0 / 9.0",
    label: "IELTS Academic & MIT CITI 100%",
    detail: "Credentialed for international research & MIMIC-IV access",
    targetSection: "#credentials",
    accent: "emerald"
  }
];

export type HackathonParticipationStatus =
  | "Attended & Built On-Site"
  | "Prototype Built"
  | "Benchmark Entry Submitted"
  | "Selected / Invited (Upcoming)"
  | "Selected / Invited"
  | "Selected (Could Not Attend)";

export interface HackathonRecord {
  id: string;
  event: string;
  locationOrHost: string;
  date: string;
  status: HackathonParticipationStatus;
  badgeTone: "emerald" | "cyan" | "amber" | "slate";
  detail: string;
}

export const HACKATHON_LEDGER: HackathonRecord[] = [
  {
    id: "hack-upc-2026",
    event: "HackUPC 2026",
    locationOrHost: "Universitat Politècnica de Catalunya · Barcelona, Spain",
    date: "April 2026",
    status: "Attended & Built On-Site",
    badgeTone: "emerald",
    detail:
      "Represented Pakistan and FAST-NUCES in person in Barcelona; built DreamTrip (emotion-aware AI travel recommender with Gemini API, ElevenLabs, and multi-city embeddings) for the Skyscanner challenge in under 36 hours."
  },
  {
    id: "hack-fortyguard-2026",
    event: "FortyGuard Hackathon ’26 (HeatShield AI)",
    locationOrHost: "International Hackathon",
    date: "2026",
    status: "Prototype Built",
    badgeTone: "cyan",
    detail: "Developed FortyGuard HeatShield AI, an AI-driven urban heat-risk radar prototype."
  },
  {
    id: "hack-deepmind-kaggle-2026",
    event: "Google DeepMind × Kaggle — Measuring Progress Toward AGI",
    locationOrHost: "Cognitive Abilities Track",
    date: "March 2026",
    status: "Benchmark Entry Submitted",
    badgeTone: "cyan",
    detail: "Submitted a cognitive-abilities benchmark and evaluation entry to the Google DeepMind × Kaggle challenge."
  },
  {
    id: "hack-junction-2026",
    event: "Junction 2026",
    locationOrHost: "Finland",
    date: "Late 2026 (Upcoming)",
    status: "Selected / Invited (Upcoming)",
    badgeTone: "amber",
    detail: "Selected for participation in Junction 2026 Finland (upcoming as of October 2026; status configurable in src/data/achievements.ts)."
  },
  {
    id: "hack-ethglobal-2026",
    event: "ETHGlobal Lisbon & ETHGlobal Tokyo",
    locationOrHost: "Lisbon & Tokyo",
    date: "2026",
    status: "Selected / Invited",
    badgeTone: "slate",
    detail: "Selected/accepted for participation in ETHGlobal Lisbon and ETHGlobal Tokyo (listed as selection/invitation only, not claimed as attended)."
  },
  {
    id: "hack-mhacks-2026",
    event: "MHacks 2026",
    locationOrHost: "University of Michigan",
    date: "2026",
    status: "Selected (Could Not Attend)",
    badgeTone: "slate",
    detail: "Selected as a participant for MHacks 2026; could not attend in person."
  },
  {
    id: "hack-global-selections-2026",
    event: "Additional 2026 International Selections & Civic AI Programs",
    locationOrHost: "Global / Hybrid Cohorts",
    date: "2026",
    status: "Selected / Invited",
    badgeTone: "slate",
    detail:
      "Selected/accepted across AI for Civic Innovation (Code for Pakistan / Ctrl+Aid), Hack-Nation Global AI Hackathon, Hack Dearborn: Conjure Reality, DeepTech GigaHack, Knight Hacks, and HackUMBC."
  }
];

export interface HonourOrCredential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "Honour & Competition" | "Research & Professional Credential" | "Language & Leadership";
  metricOrBadge: string;
  description: string;
}

export const HONOURS_AND_CREDENTIALS: HonourOrCredential[] = [
  {
    id: "cred-ieee-genai",
    title: "IEEE IES Generative AI Challenge 2026 — Top 10 Global Finalist",
    issuer: "IEEE Industrial Electronics Society / IRAI Conference, Melbourne",
    date: "May 2026",
    category: "Honour & Competition",
    metricOrBadge: "Top 10 / 575+",
    description:
      "Shortlisted in the global Top 10 from 575+ submissions as First Author for 'Early Detection of Unstable Aircraft Approaches Using GenAI & Autonomous Decision Agents'."
  },
  {
    id: "cred-icpc-2024",
    title: "ICPC 2024 — Honorable Mention",
    issuer: "International Collegiate Programming Contest",
    date: "December 2024",
    category: "Honour & Competition",
    metricOrBadge: "Honorable Mention",
    description: "Recognized in the International Collegiate Programming Contest (ICPC) for algorithmic problem-solving."
  },
  {
    id: "cred-citi-mimic",
    title: "CITI Program — Data or Specimens Only Research Training",
    issuer: "MIT / PhysioNet MIMIC-IV Research Credential",
    date: "January 2026",
    category: "Research & Professional Credential",
    metricOrBadge: "100% Score",
    description:
      "Completed mandatory human-subjects data ethics and governance training with a 100% score, authorizing research access to the MIT MIMIC-IV clinical database."
  },
  {
    id: "cred-mckinsey-forward",
    title: "McKinsey.org Forward Program — Graduate Credential",
    issuer: "McKinsey & Company (McKinsey.org)",
    date: "December 2025",
    category: "Research & Professional Credential",
    metricOrBadge: "Graduate",
    description: "Completed structured problem-solving, analytical communication, and digital leadership curriculum."
  },
  {
    id: "cred-ielts",
    title: "IELTS Academic — English Proficiency",
    issuer: "IELTS Official Assessment",
    date: "September 2026",
    category: "Language & Leadership",
    metricOrBadge: "Overall Band 8.0 / 9.0",
    description: "C1/C2 academic English proficiency credential supporting international research and graduate study."
  },
  {
    id: "cred-efset",
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF Standard English Test",
    date: "July 2025",
    category: "Language & Leadership",
    metricOrBadge: "C1 Advanced (62/100)",
    description: "Certified C1 Advanced English reading and listening proficiency."
  },
  {
    id: "cred-google-soft-skills",
    title: "Google Soft Skills Program — Certificate",
    issuer: "Google",
    date: "December 2024",
    category: "Language & Leadership",
    metricOrBadge: "Certified",
    description: "Professional communication and collaborative engineering program completion."
  }
];

export const LEADERSHIP_AND_ENGAGEMENT: string[] = [
  "Research & Planning Team Member, Meri Kahani — FAST Outreach & Engagement Society, Islamabad.",
  "Community Service: Mentored and guided pre-university students preparing for engineering and CS entrance examinations.",
  "Healthcare AI Chatbot Assistant — recognized/mentioned by Rise & Recognize, Dubai.",
  "Technical Conferences & Workshops: Agentic AI Masterclass (AI Data Yard), Indus AI Week 2026 (AI Data Yard), Indus Hospital Healthcare Conference, AI Business Meetup (NICAT/NASTP), EduNautics Workshop (NSTP).",
  "Extracurricular: Member, FAST Futsal Team — competed in NASCON (National Speed Contest)."
];
