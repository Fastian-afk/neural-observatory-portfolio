export interface EducationRecord {
  institution: string;
  shortName: string;
  degree: string;
  location: string;
  expectedGraduation: string;
  statusNote: string;
  coursework: string[];
}

export interface ProfileData {
  name: string;
  codename: string;
  roleLine: string;
  headline: string;
  thesis: string;
  location: string;
  statusBadge: string;
  missionLead: string;
  missionParagraphs: string[];
  researchPillars: {
    id: string;
    title: string;
    accent: "cyan" | "amber" | "violet";
    summary: string;
    proofPoint: string;
  }[];
  education: EducationRecord;
}

export const PROFILE: ProfileData = {
  name: "Imaad Fazal",
  codename: "THE NEURAL OBSERVATORY // FLIGHT DECK",
  roleLine: "AI/ML Engineer in Training · Researcher · Applied Systems Builder",
  headline: "Building interpretable, resource-aware AI systems for high-stakes environments.",
  thesis:
    "I design, audit, and engineer machine learning pipelines across clinical prediction, aviation safety, computer vision, and agentic workflows—grounding every model in physical constraints, honest evaluation, and human-interpretable telemetry.",
  location: "Islamabad, Pakistan",
  statusBadge: "BS CS @ FAST-NUCES ('27) · Open to Research & AI Engineering Collaborations",
  missionLead:
    "Bridging rigorous empirical evaluation with deployable real-time tooling where false confidence has a real cost.",
  missionParagraphs: [
    "As a Computer Science undergraduate at FAST-NUCES Islamabad (expected graduation June 2027), my work focuses on turning experimental machine learning into reliable, interpretable systems. Whether modeling ICU sepsis trajectories on MIMIC clinical time-series or auditing ADS-B aircraft approach telemetry, I prioritize honest baselines, leakage-free validation, and post-hoc explainability.",
    "Across internships at TechGIS, the National Centre for Artificial Intelligence (MIDL/NCAI), and the National Aerospace Science and Technology Park (NASTP), I have worked across the full stack of modern applied AI: from deep physiological signal modeling and hybrid Vision-Language OCR pipelines to sovereign/on-prem multi-agent architectures and sub-50 ms decision dashboards."
  ],
  researchPillars: [
    {
      id: "pillar-aviation",
      title: "Physics-Constrained & Aviation Safety ML",
      accent: "amber",
      summary:
        "Coupling generative trajectory augmentation (cVAE) with hard aerodynamic feasibility filters and SHAP explainability for unstable aircraft approach and runway excursion risk modeling.",
      proofPoint: "First Author · IEEE IES GenAI Challenge 2026 Top 10 / 575+ · Safety Science submission"
    },
    {
      id: "pillar-clinical",
      title: "Clinical Time-Series & Medical Imaging AI",
      accent: "cyan",
      summary:
        "Developing early-warning clinical pipelines on MIMIC/PhysioNet datasets, ECG temporal convolutional networks, and Grad-CAM visual attention workflows for transparent decision support.",
      proofPoint: "SepsisAI (0.927 AUROC, ~24m lead time) · MIT/CITI Credentialed Researcher"
    },
    {
      id: "pillar-agentic",
      title: "Agentic Systems, VLM OCR & Edge Inference",
      accent: "violet",
      summary:
        "Architecting multi-agent reasoning, LangChain tool-calling clinical workflows, Nanonets-OCR + Ollama pipelines, and resource-aware inference for sovereign/air-gapped environments.",
      proofPoint: "TechGIS & MIDL/NCAI Internships · HackUPC 2026 Barcelona"
    }
  ],
  education: {
    institution: "National University of Computer and Emerging Sciences (FAST-NUCES)",
    shortName: "FAST-NUCES Islamabad",
    degree: "Bachelor of Science in Computer Science",
    location: "Islamabad, Pakistan",
    expectedGraduation: "June 2027",
    statusNote: "Undergraduate Researcher & CS Student (In Progress)",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Structures & Algorithms",
      "Probability & Statistics",
      "Linear Algebra",
      "Data Mining",
      "Multivariable Calculus",
      "Python Programming",
      "Operating Systems",
      "Compiler Construction",
      "Database Systems",
      "High Performance Computing"
    ]
  }
};
