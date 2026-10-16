export interface ResearchEntry {
  id: string;
  code: string;
  title: string;
  venueOrContext: string;
  year: string;
  authorship: string;
  statusBadge: "Submitted · Top 10 Global Finalist" | "Submitted Manuscript" | "Active Clinical ML Research";
  accent: "amber" | "cyan" | "violet";
  abstractSummary: string;
  methodologicalHighlights: string[];
  integrityNote: string;
  scholarUrl?: string;
  relatedProjectId?: string;
}

export const RESEARCH_ITEMS: ResearchEntry[] = [
  {
    id: "research-ieee-irai-2026",
    code: "RES-01 // AVIATION-GENAI",
    title: "Early Detection of Unstable Aircraft Approaches Using GenAI & Autonomous Decision Agents",
    venueOrContext: "IEEE IES Generative AI Challenge 2026 — IRAI Conference, Melbourne",
    year: "2026",
    authorship: "First Author (Imaad Fazal et al.)",
    statusBadge: "Submitted · Top 10 Global Finalist",
    accent: "amber",
    abstractSummary:
      "Presents a physics-constrained ADS-B approach analysis pipeline and real-time decision-agent architecture. Audits and resolves chronological window leakage (correcting an initial 0.9513 figure to a rigorous 0.8923 honest XGBoost baseline) before applying Conditional VAE trajectory synthesis with hard aerodynamic filtering to reach 0.8962 AUROC.",
    methodologicalHighlights: [
      "Shortlisted in the Top 10 out of 575+ global submissions in the IEEE IES Generative AI Challenge 2026.",
      "Explicit chronological data-leakage audit: documented the 0.9513 → 0.8923 baseline correction prior to generative augmentation.",
      "Hard physics filtering on cVAE synthetic trajectories enforcing vertical speed, glide-slope, and groundspeed constraints.",
      "Sub-50 ms FastAPI + XGBoost + TreeSHAP + LLM Autonomous Decision Agent dashboard for interpretable approach advisories."
    ],
    integrityNote:
      "Status: Submitted manuscript & Top 10 Challenge Finalist associated with IEEE/IRAI 2026. Evaluated on historical/simulated ADS-B telemetry; not claimed as an already-published journal article or operational avionics deployment.",
    scholarUrl: "https://scholar.google.com/citations?user=8FXOcA0AAAAJ",
    relatedProjectId: "aviation-adsb"
  },
  {
    id: "research-safety-science-2026",
    code: "RES-02 // RUNWAY-RISK",
    title: "Predicting Runway Risk Excursion",
    venueOrContext: "Submitted to Elsevier Safety Science",
    year: "2026",
    authorship: "Research Manuscript Submission",
    statusBadge: "Submitted Manuscript",
    accent: "amber",
    abstractSummary:
      "Investigates predictive risk modeling for aircraft runway excursion precursors during approach and landing rollout phases, emphasizing interpretable risk factors and safety-critical evaluation discipline.",
    methodologicalHighlights: [
      "Submitted to Elsevier Safety Science in 2026.",
      "Focuses on quantifiable precursor modeling and actionable safety telemetry for runway excursion mitigation.",
      "Complements the ADS-B unstable approach framework within a unified aviation safety research agenda."
    ],
    integrityNote:
      "Status: Manuscript submitted to Elsevier Safety Science (under review / submitted status; not presented as accepted or published).",
    scholarUrl: "https://scholar.google.com/citations?user=8FXOcA0AAAAJ"
  },
  {
    id: "research-physionet-mimic-2026",
    code: "RES-03 // CLINICAL-ML",
    title: "Clinical Time-Series & Physiological Signal Modeling on MIMIC-IV / PhysioNet",
    venueOrContext: "PhysioNet / MIT MIMIC-IV Credentialed Clinical ML Research",
    year: "2025 – 2026",
    authorship: "Credentialed Researcher (MIT / CITI Program 100% Completion)",
    statusBadge: "Active Clinical ML Research",
    accent: "cyan",
    abstractSummary:
      "Ongoing empirical research developing and evaluating machine learning pipelines on de-identified intensive-care and physiological waveform datasets, spanning ICU sepsis early warning (SepsisAI) and multi-scale ECG anomaly detection.",
    methodologicalHighlights: [
      "Completed MIT / CITI Data or Specimens Only Research training (100% score, Jan 2026) for authorized MIMIC-IV clinical database research.",
      "Developed SepsisAI achieving 0.927 retrospective AUROC, ~24-minute lead time, and 8.9× risk separation on MIMIC clinical time-series.",
      "Explored Temporal Convolutional Networks (TCNs) and SHAP-explained biomedical voice/signal models across PhysioNet cohorts."
    ],
    integrityNote:
      "Status: Ongoing research activity and credentialed dataset evaluation (no fabricated paper title, DOI, or clinical trial claim; MIT/CITI credential represents research training and database authorization, not MIT employment).",
    relatedProjectId: "sepsis-ai"
  }
];
