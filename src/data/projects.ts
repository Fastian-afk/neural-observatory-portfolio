export type ProjectCategory =
  | "Healthcare AI"
  | "Computer Vision"
  | "Agentic AI"
  | "Research & Aviation Safety"
  | "Data & ML"
  | "Creative Engineering"
  | "Hackathon Builds";

export interface ProjectMetric {
  label: string;
  value: string;
  note?: string;
}

export interface ProjectArchitectureStep {
  step: string;
  title: string;
  detail: string;
}

export interface PortfolioProject {
  id: string;
  stationCode: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  category: ProjectCategory;
  tags: ProjectCategory[];
  year: string;
  role: string;
  status: string;
  accent: "amber" | "cyan" | "violet" | "emerald";
  featured: boolean;
  diagramType: "aviation-radar" | "sepsis-waveform" | "dreamtrip-arcs" | "prescription-pipeline" | "gradcam-xray" | "archive-node";
  problem: string;
  roleContribution: string;
  approach: string;
  architecture: ProjectArchitectureStep[];
  dataInputs: string;
  outcome: string;
  limitations: string;
  tools: string[];
  metrics: ProjectMetric[];
  repoUrl?: string;
  demoUrl?: string;
  paperStatusNote?: string;
  image?: string;
}

import { ARCHIVE_ONLY_PROJECTS, archiveProjects } from "./archiveProjects";

export { ARCHIVE_ONLY_PROJECTS, archiveProjects };

export const FEATURED_PROJECTS: PortfolioProject[] = [
  {
    id: "aviation-adsb",
    stationCode: "STN-01 // FLIGHT DECK",
    title: "Early Detection of Unstable Aircraft Approaches Using GenAI & Autonomous Decision Agents",
    subtitle: "Physics-Constrained ADS-B Trajectory Modeling & Sub-50 ms Decision Advisory System",
    shortDescription:
      "First-author research submission (Top 10 from 575+ global submissions in the IEEE IES Generative AI Challenge 2026) combining leakage-corrected XGBoost baselines, physics-filtered Conditional VAE augmentation, SHAP explainability, and a FastAPI autonomous decision-agent dashboard.",
    category: "Research & Aviation Safety",
    tags: ["Research & Aviation Safety", "Agentic AI", "Data & ML"],
    year: "2026",
    role: "First Author & Lead System Architect",
    status: "Submitted to IEEE/IRAI 2026 · Top 10 / 575+ Challenge Finalist",
    accent: "amber",
    featured: true,
    diagramType: "aviation-radar",
    problem:
      "Unstable aircraft approaches remain a primary precursor to approach-and-landing incidents and runway excursions. Traditional threshold alerts trigger late in the descent profile, whereas naive ML classifiers trained on flight telemetry frequently suffer from chronological window leakage and black-box predictions that flight crews cannot audit.",
    roleContribution:
      "Formulated the research problem as First Author, audited and corrected chronological data leakage in the trajectory pipeline, designed the physics-constrained Conditional VAE augmentation module, integrated TreeSHAP feature attribution, and engineered the real-time FastAPI + LLM autonomous decision-agent advisory dashboard.",
    approach:
      "Built an end-to-end ADS-B approach evaluation framework. First identified and removed chronological data leakage that had artificially inflated an initial 0.9513 AUROC down to a rigorous, honest 0.8923 XGBoost baseline. Then introduced a Conditional Variational Autoencoder (cVAE) with hard aerodynamic physics filtering (enforcing sink-rate, groundspeed, and glide-slope kinematic bounds) to synthesize minority unstable trajectories, raising honest test AUROC to 0.8962.",
    architecture: [
      {
        step: "01",
        title: "ADS-B Kinematic Ingestion & Chronological Split",
        detail: "Flight-grouped temporal partitioning preventing trajectory window overlap across train/validation/test splits."
      },
      {
        step: "02",
        title: "cVAE + Hard Physics Feasibility Filter",
        detail: "Generative minority-class trajectory synthesis rejecting samples that violate aerodynamic descent or energy envelopes."
      },
      {
        step: "03",
        title: "XGBoost Classifier + TreeSHAP Telemetry",
        detail: "Calibrated instability probability estimation paired with real-time per-window SHAP feature attributions."
      },
      {
        step: "04",
        title: "Sub-50 ms Autonomous Decision Agent Dashboard",
        detail: "FastAPI inference core streaming structured instability drivers into an LLM advisory agent for go-around decision support."
      }
    ],
    dataInputs:
      "Multi-parameter ADS-B approach trajectories capturing altitude above ground level (AGL), vertical speed, groundspeed, track angle deviation, and energy state across approach gates.",
    outcome:
      "Shortlisted in the Top 10 globally out of 575+ submissions in the IEEE IES Generative AI Challenge 2026 (associated with the IEEE IRAI 2026 Conference, Melbourne). Demonstrated a reproducible improvement from the 0.8923 honest leakage-free baseline to 0.8962 AUROC while maintaining sub-50 ms core inference/advisory latency.",
    limitations:
      "Research prototype and submitted manuscript—not an accepted/published paper yet and not deployed in operational airline avionics. All metrics represent offline and simulated real-time evaluation on historical ADS-B records rather than certified flight-deck instrumentation.",
    tools: ["Python", "XGBoost", "PyTorch (cVAE)", "SHAP", "FastAPI", "LLM Agents", "ADS-B Telemetry"],
    metrics: [
      { label: "Challenge Standing", value: "Top 10 / 575+", note: "IEEE IES GenAI Challenge 2026" },
      { label: "Physics-cVAE AUROC", value: "0.8962", note: "Improved over leakage-free baseline" },
      { label: "Honest Baseline AUROC", value: "0.8923", note: "Corrected from 0.9513 chronological leakage" },
      { label: "Dashboard Latency", value: "< 50 ms", note: "FastAPI + SHAP + Agent pipeline" }
    ],
    paperStatusNote: "First-author manuscript submitted to IEEE/IRAI 2026 (Challenge Top 10 Finalist)."
  },
  {
    id: "sepsis-ai",
    stationCode: "STN-02 // CLINICAL ICU",
    title: "SepsisAI — Early Sepsis Prediction on Clinical Time-Series",
    subtitle: "ICU Early-Warning Pipeline on MIMIC Physiological & Laboratory Trajectories",
    shortDescription:
      "End-to-end clinical time-series machine learning pipeline on the MIMIC dataset achieving 0.927 AUROC with an approximate 24-minute early-warning lead time and 8.9× risk separation across patient cohorts.",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "Data & ML"],
    year: "Jan 2026",
    role: "Lead ML Researcher & Pipeline Engineer",
    status: "Research Prototype · Verified Public Repository",
    accent: "cyan",
    featured: true,
    diagramType: "sepsis-waveform",
    problem:
      "Sepsis progression in intensive care units is rapid and clinically subtle; delayed recognition markedly increases morbidity. Clinical time-series data in EHR systems are irregularly sampled, heavily missing, and prone to high false-alarm rates if temporal dynamics are ignored.",
    roleContribution:
      "Designed and implemented the complete preprocessing, physiological feature engineering, temporal imputation, model training, and risk-stratification evaluation pipeline on de-identified MIMIC ICU records.",
    approach:
      "Constructed causal sliding-window representations over vital signs (heart rate, MAP, respiratory rate, SpO2, temperature) and laboratory panels (lactate, WBC, creatinine, bilirubin). Engineered temporal shock-index deltas, rolling volatility features, and missingness indicators to capture clinical deterioration prior to formal sepsis onset criteria.",
    architecture: [
      {
        step: "01",
        title: "Cohort Alignment & Causal Imputation",
        detail: "Forward-fill with decay and physiological baseline fallback strictly using past observations to prevent lookahead leakage."
      },
      {
        step: "02",
        title: "Hemodynamic & Lab Trajectory Engineering",
        detail: "Shock index ratios, multi-hour vital slopes, and organ-dysfunction interaction terms."
      },
      {
        step: "03",
        title: "Time-Series Sequence & Gradient Modeling",
        detail: "PyTorch and gradient-boosted temporal ensembles calibrated for high sensitivity across pre-onset horizons."
      },
      {
        step: "04",
        title: "Risk Separation & Lead-Time Audit",
        detail: "Stratified evaluation quantifying median warning lead time and high-vs-low risk cohort separation."
      }
    ],
    dataInputs:
      "De-identified ICU patient time-series from the MIMIC clinical database (accessed under MIT/CITI Data or Specimens Only Research credential).",
    outcome:
      "Achieved 0.927 AUROC in retrospective evaluation with an approximate 24-minute median lead time ahead of clinical onset definition and an 8.9× risk separation between high-risk and baseline deciles.",
    limitations:
      "Retrospective research evaluation only. Not a clinically deployed medical device, not FDA-cleared, and not intended for direct patient diagnosis or treatment decisions. All dashboard visuals use synthetic demonstration trajectories.",
    tools: ["Python", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "MIMIC Clinical Time-Series"],
    metrics: [
      { label: "Retrospective AUROC", value: "0.927", note: "MIMIC ICU cohort evaluation" },
      { label: "Early Warning Lead", value: "~24 min", note: "Prior to onset threshold" },
      { label: "Risk Separation", value: "8.9×", note: "High-risk vs baseline cohort" }
    ],
    repoUrl: "https://github.com/Fastian-afk/SepsisAI"
  },
  {
    id: "dreamtrip-hackupc",
    stationCode: "STN-03 // BARCELONA",
    title: "DreamTrip — Emotion-Aware AI Travel Discovery Platform",
    subtitle: "Sentiment-Driven Multi-City Embeddings & Voice-Narrated Discovery (Skyscanner Challenge)",
    shortDescription:
      "Built in under 36 hours at HackUPC 2026 in Barcelona (representing Pakistan and FAST-NUCES). Converts emotion- and intent-rich natural language prompts into ranked destination matches with Gemini reasoning and ElevenLabs narration.",
    category: "Agentic AI",
    tags: ["Agentic AI", "Hackathon Builds", "Creative Engineering"],
    year: "Apr 2026",
    role: "AI/ML & Backend Workflow Engineer",
    status: "Shipped at HackUPC 2026 (Barcelona) · Skyscanner Challenge Entry",
    accent: "violet",
    featured: true,
    diagramType: "dreamtrip-arcs",
    image: "/images/dreamtrip-barcelona.jpg",
    problem:
      "Conventional flight and travel search engines require rigid origin-destination-date inputs, failing travelers who start with an emotional state, atmosphere, architectural vibe, or experiential intent rather than a fixed airport code.",
    roleContribution:
      "Represented FAST-NUCES and Pakistan on-site at Universitat Politècnica de Catalunya (Barcelona). Engineered the Gemini API recommendation workflows, sentiment-aware multi-city vector embeddings, FastAPI service layer, and ElevenLabs voice narration synthesis within the 36-hour sprint.",
    approach:
      "Mapped unstructured user mood and intent prompts into a shared semantic-sentiment space alongside curated multi-city destination profiles. Combined cosine similarity ranking with Gemini structured synthesis to generate tailored itinerary rationales, paired with low-latency ElevenLabs audio storytelling.",
    architecture: [
      {
        step: "01",
        title: "Affective & Intent Prompt Parsing",
        detail: "Extracts mood vectors, pacing preferences, climate constraints, and cultural motifs from free-form input."
      },
      {
        step: "02",
        title: "Sentiment-Aware Multi-City Embeddings",
        detail: "Scores candidate cities across emotional resonance, sensory profile, and seasonal compatibility."
      },
      {
        step: "03",
        title: "Gemini Structured Insight Synthesis",
        detail: "Generates transparent 'why this matches your state' explanations and neighborhood-level itineraries."
      },
      {
        step: "04",
        title: "ElevenLabs Immersive Audio Briefing",
        detail: "Synthesizes natural voice previews for top-ranked destinations through a FastAPI streaming endpoint."
      }
    ],
    dataInputs:
      "Natural-language emotional travel prompts and structured multi-city cultural, atmospheric, and seasonal descriptor datasets.",
    outcome:
      "Delivered a complete working prototype in under 36 hours at HackUPC 2026 in Barcelona for the Skyscanner challenge.",
    limitations:
      "Hackathon prototype built for the Skyscanner challenge; uses curated destination embeddings and simulated route discovery rather than live commercial airline GDS pricing or real-time ticket booking APIs.",
    tools: ["Python", "Gemini API", "ElevenLabs", "FastAPI", "Vector Embeddings"],
    metrics: [
      { label: "Build Window", value: "< 36 hrs", note: "On-site at HackUPC 2026, Barcelona" },
      { label: "Core Engine", value: "Multi-City", note: "Sentiment-aware vector embeddings" },
      { label: "Modalities", value: "Text + Voice", note: "Gemini API + ElevenLabs narration" }
    ],
    repoUrl: "https://github.com/Fastian-afk/HackUPC-Travel-Mirror"
  },
  {
    id: "prescription-ocr-agent",
    stationCode: "STN-04 // MIDL-NCAI",
    title: "Medical Prescription Intelligence & Agentic Clinical Workflow",
    subtitle: "Hybrid VLM Prescription OCR + LangChain Tool-Calling Agents + MedGemMA 4.0",
    shortDescription:
      "Developed during the AI Internship at the Medical Imaging and Diagnostics Lab (MIDL / NCAI). Integrates Nanonets-OCR, Ollama VLMs, LangChain tool-calling agents, and MedGemMA 4.0 for structured prescription extraction and medication safety lookup.",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "Agentic AI", "Computer Vision"],
    year: "Jul – Sep 2025",
    role: "Artificial Intelligence Intern (MIDL — NCAI)",
    status: "Lab Research & Engineering Workflow · Completed at NCAI",
    accent: "cyan",
    featured: true,
    diagramType: "prescription-pipeline",
    problem:
      "Handwritten and noisy clinical prescriptions are difficult for standard OCR engines to parse reliably, while raw LLM outputs risk hallucinating dosage instructions or contraindications without structured retrieval grounding.",
    roleContribution:
      "Advanced the lab's prescription OCR pipeline by combining classical document preprocessing with modern Vision-Language Models (Ollama + Nanonets-OCR), built LangChain tool-calling agents for structured medication instruction and side-effect retrieval, and integrated MedGemMA 4.0 for grounded clinical Q&A.",
    approach:
      "Designed a multi-stage verification pipeline: image normalization and region detection feed into Nanonets-OCR and local Ollama VLM parsers to extract drug names, strengths, and frequency codes. A LangChain agent then invokes deterministic drug-monograph lookup tools before MedGemMA 4.0 synthesizes readable clinical reference summaries.",
    architecture: [
      {
        step: "01",
        title: "Hybrid Document & VLM OCR Extraction",
        detail: "Combines traditional layout normalization with Nanonets-OCR and local Ollama Vision-Language Models."
      },
      {
        step: "02",
        title: "Structured Entity Normalization",
        detail: "Parses medication entity, dosage strength, route, and frequency schedule with field-level confidence flags."
      },
      {
        step: "03",
        title: "LangChain Tool-Calling Retrieval",
        detail: "Queries verified medication instruction and adverse-effect references rather than relying on parametric memory."
      },
      {
        step: "04",
        title: "MedGemMA 4.0 Grounded Clinical Q&A",
        detail: "Synthesizes retrieved safety context with explicit guardrails for educational/research inspection."
      }
    ],
    dataInputs:
      "De-identified/synthetic prescription document images and structured medication reference corpora.",
    outcome:
      "Significantly improved extraction resilience on complex prescription layouts at MIDL/NCAI and earned formal recognition for technical excellence, professionalism, and cross-functional teamwork.",
    limitations:
      "Internal research and engineering workflow developed at MIDL/NCAI—not a certified pharmacy dispensing or prescribing system, and never a substitute for a licensed physician or pharmacist. Sample data shown in the observatory is 100% synthetic.",
    tools: ["Python", "Nanonets-OCR", "Ollama", "Vision-Language Models", "LangChain Agents", "MedGemMA 4.0"],
    metrics: [
      { label: "OCR Architecture", value: "Hybrid VLM", note: "Nanonets-OCR + Ollama VLM" },
      { label: "Agent Framework", value: "LangChain", note: "Deterministic tool-calling lookup" },
      { label: "Clinical LLM", value: "MedGemMA 4.0", note: "Grounded clinical Q&A synthesis" }
    ]
  },
  {
    id: "pneumonia-gradcam",
    stationCode: "STN-05 // VISION LAB",
    title: "Interpretable Pneumonia Detection from Chest X-Rays",
    subtitle: "ResNet18 Thoracic Radiograph Classifier with Grad-CAM Spatial Attention",
    shortDescription:
      "Deep learning medical imaging pipeline in PyTorch pairing a fine-tuned ResNet18 classifier with Gradient-weighted Class Activation Mapping (Grad-CAM) to expose spatial regions driving thoracic radiograph predictions.",
    category: "Computer Vision",
    tags: ["Computer Vision", "Healthcare AI"],
    year: "Jun 2025",
    role: "ML Developer & Researcher",
    status: "Research Prototype · Verified Public Repository",
    accent: "emerald",
    featured: true,
    diagramType: "gradcam-xray",
    problem:
      "High accuracy on chest radiograph classification is insufficient if a convolutional network latches onto spurious hospital tokens, clavicle borders, or background artifacts instead of pulmonary opacities.",
    roleContribution:
      "Built the PyTorch training, augmentation, evaluation, and Grad-CAM visual attribution pipeline on pediatric/thoracic chest X-ray datasets to audit model focus regions.",
    approach:
      "Fine-tuned a ResNet18 convolutional backbone with class-balanced weighting and radiographic augmentations, then hooked final convolutional feature maps to compute Grad-CAM heatmaps overlaid on the original thoracic anatomy.",
    architecture: [
      {
        step: "01",
        title: "Radiograph Normalization & Augmentation",
        detail: "Contrast normalization, controlled rotation, and lung-field cropping for robust training."
      },
      {
        step: "02",
        title: "ResNet18 Transfer & Fine-Tuning",
        detail: "Residual feature extraction optimized for thoracic opacity sensitivity."
      },
      {
        step: "03",
        title: "Grad-CAM Gradient Attribution Hook",
        detail: "Projects final conv-layer gradients onto spatial activation maps to audit pulmonary localization."
      }
    ],
    dataInputs: "Public chest X-ray radiograph research dataset (pneumonia vs. normal cohorts).",
    outcome:
      "Delivered an end-to-end explainable imaging prototype enabling visual inspection of activation heatmaps alongside classification probabilities.",
    limitations:
      "Grad-CAM provides post-hoc visual saliency for research inspection and does not establish clinical diagnostic validity or radiological proof. Not approved or deployed for hospital diagnosis.",
    tools: ["Python", "PyTorch", "ResNet18", "Grad-CAM", "OpenCV", "Matplotlib"],
    metrics: [
      { label: "Backbone", value: "ResNet18", note: "PyTorch convolutional pipeline" },
      { label: "Explainability", value: "Grad-CAM", note: "Spatial activation localization" },
      { label: "Domain", value: "Thoracic CXR", note: "Interpretable medical imaging" }
    ],
    repoUrl: "https://github.com/Fastian-afk/Pneumonia-Detection"
  }
];

export const PROJECTS: PortfolioProject[] = [
  ...FEATURED_PROJECTS,
  ...ARCHIVE_ONLY_PROJECTS
];

export const ARCHIVE_CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Research & Aviation Safety",
  "Healthcare AI",
  "Agentic AI",
  "Computer Vision",
  "Data & ML",
  "Hackathon Builds",
  "Creative Engineering"
];
