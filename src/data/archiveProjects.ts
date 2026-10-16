import type { PortfolioProject } from "./projects";

export const ARCHIVE_ONLY_PROJECTS: PortfolioProject[] = [
  {
    id: "parkinsons-voice-ml",
    stationCode: "ARC-01 // VOICE BIOMARKERS",
    title: "Parkinson’s Disease Early Detection via Biomedical Voice Telemetry",
    subtitle: "Acoustic Biomarker Pipeline with XGBoost & SHAP Explainability",
    shortDescription:
      "Biomedical voice ML pipeline comparing classification architectures on vocal fundamental frequency jitter, shimmer, and harmonic-to-noise ratio biomarkers, paired with SHAP feature attributions for medical interpretability.",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "Data & ML"],
    year: "Dec 2025",
    role: "ML Engineer",
    status: "Completed Research Build · Verified Public Repo",
    accent: "cyan",
    featured: false,
    diagramType: "archive-node",
    problem:
      "Subtle vocal dysphonia biomarkers precede motor symptoms in Parkinson's disease, but black-box classifiers over high-collinearity acoustic features lack transparent feature attribution for clinical screening evaluation.",
    roleContribution:
      "Built the end-to-end voice feature preprocessing, multi-model benchmark comparison, XGBoost hyperparameter tuning, and TreeSHAP explainability visualization pipeline.",
    approach:
      "Evaluated gradient-boosted and ensemble classifiers across vocal fundamental frequency variations (jitter, shimmer, NHR, HNR, RPDE, DFA, PPE) with stratified cross-validation and SHAP summary/force attributions.",
    architecture: [
      {
        step: "01",
        title: "Acoustic Biomarker Normalization",
        detail: "Standardizes fundamental frequency jitter, amplitude shimmer, and harmonic-to-noise ratio features."
      },
      {
        step: "02",
        title: "Multi-Model Comparative Benchmark",
        detail: "Evaluates XGBoost against baseline classifiers under stratified validation splits."
      },
      {
        step: "03",
        title: "SHAP Medical Interpretability Layer",
        detail: "Computes per-feature and per-patient SHAP attributions highlighting nonlinear dysphonia predictors."
      }
    ],
    dataInputs: "Public biomedical voice phonation dataset (sustained vowel phonations and acoustic perturbation metrics).",
    outcome:
      "Delivered a reproducible, explainable biomedical voice classification pipeline isolating the dominant nonlinear acoustic predictors driving early Parkinson's risk scores.",
    limitations:
      "Evaluated on benchmark biomedical voice data; intended for research interpretability and not approved for clinical diagnosis.",
    tools: ["Python", "XGBoost", "Scikit-Learn", "SHAP", "Pandas", "Matplotlib"],
    metrics: [
      { label: "Primary Model", value: "XGBoost", note: "Multi-model comparison" },
      { label: "Explainability", value: "TreeSHAP", note: "Biomarker attribution" },
      { label: "Modality", value: "Voice Telemetry", note: "Jitter / Shimmer / HNR" }
    ],
    repoUrl: "https://github.com/Fastian-afk/Parkinson-s"
  },
  {
    id: "ecg-anomaly-tcn",
    stationCode: "ARC-02 // CARDIAC TCN",
    title: "ECG Anomaly Detection with Temporal Convolutional Networks",
    subtitle: "Dilated Causal TCN Modeling on ECG-5000 Physiological Signals",
    shortDescription:
      "Deep physiological signal classification pipeline using Temporal Convolutional Networks (TCNs) on the ECG-5000 dataset to detect cardiac waveform anomalies at scale.",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "Data & ML"],
    year: "Aug 2024",
    role: "AI & ML Intern / Developer",
    status: "Completed Pipeline · Verified Public Repo",
    accent: "amber",
    featured: false,
    diagramType: "archive-node",
    problem:
      "Detecting arrhythmia and morphological anomalies across continuous ECG waveforms requires long effective receptive fields and stable gradient propagation without recurrent bottleneck latency.",
    roleContribution:
      "Implemented causal dilated Temporal Convolutional Networks (TCNs) and physiological waveform visualization/evaluation pipelines on the ECG-5000 dataset.",
    approach:
      "Constructed multi-layer dilated causal 1D convolutions with residual skip connections to capture P-QRS-T complex morphology across 5,000 heartbeat sequences.",
    architecture: [
      {
        step: "01",
        title: "ECG-5000 Waveform Windowing",
        detail: "Time-aligned heartbeat segmentation and amplitude Z-score normalization."
      },
      {
        step: "02",
        title: "Dilated Causal TCN Backbone",
        detail: "Exponentially dilated residual 1D convolution blocks capturing multi-scale temporal dependencies."
      },
      {
        step: "03",
        title: "Anomaly Classification & Audit",
        detail: "Multi-class beat morphology evaluation and error-profile visualization."
      }
    ],
    dataInputs: "ECG-5000 physiological waveform dataset (5,000 annotated cardiac cycles).",
    outcome:
      "Achieved scalable, high-accuracy sequence anomaly detection across normal and pathological cardiac beat morphologies.",
    limitations:
      "Evaluated offline on the benchmark ECG-5000 cohort; not certified or deployed on clinical bedside patient monitors.",
    tools: ["Python", "Temporal Convolutional Networks (TCN)", "Deep Learning", "NumPy", "Matplotlib"],
    metrics: [
      { label: "Architecture", value: "Dilated TCN", note: "Causal sequence model" },
      { label: "Dataset", value: "ECG-5000", note: "5,000 cardiac waveforms" },
      { label: "Domain", value: "Physiological ML", note: "Arrhythmia anomaly detection" }
    ],
    repoUrl: "https://github.com/Fastian-afk/ECG-5000"
  },
  {
    id: "fortyguard-heatshield",
    stationCode: "ARC-03 // HEATSHIELD AI",
    title: "FortyGuard HeatShield AI — Urban Heat-Risk Radar Prototype",
    subtitle: "AI-Driven Microclimate & Thermal Exposure Risk Modeling",
    shortDescription:
      "Developed an AI-driven heat-risk radar prototype through the FortyGuard Hackathon ’26, modeling urban thermal vulnerability and actionable heat-safety advisories.",
    category: "Hackathon Builds",
    tags: ["Hackathon Builds", "Data & ML", "Research & Aviation Safety"],
    year: "2026",
    role: "AI Prototype Developer",
    status: "Hackathon Prototype Built (FortyGuard ’26)",
    accent: "amber",
    featured: false,
    diagramType: "archive-node",
    problem:
      "Coarse city-wide ambient weather reports obscure localized urban heat-island pockets and surface radiation hazards that disproportionately impact outdoor workers, commuters, and vulnerable neighborhoods.",
    roleContribution:
      "Designed and implemented the AI heat-risk scoring pipeline and interactive thermal radar prototype during the FortyGuard Hackathon ’26.",
    approach:
      "Fused localized microclimate indicators, surface thermal profiles, and exposure duration curves into an interpretable heat-stress risk index with spatial radar visualization.",
    architecture: [
      {
        step: "01",
        title: "Microclimate Telemetry Ingestion",
        detail: "Aggregates localized surface temperature, humidity, and solar exposure feeds."
      },
      {
        step: "02",
        title: "HeatShield AI Risk Scoring",
        detail: "Computes stratified thermal stress indices and neighborhood vulnerability tiers."
      },
      {
        step: "03",
        title: "Urban Heat-Risk Radar Overlay",
        detail: "Renders spatial hazard zones and actionable cooling/hydration advisories."
      }
    ],
    dataInputs: "Urban surface temperature and microclimate demonstration telemetry.",
    outcome:
      "Delivered a functional AI heat-risk radar prototype recognized in the FortyGuard ’26 international hackathon.",
    limitations:
      "Hackathon concept prototype built on demonstration microclimate layers rather than live municipal sensor networks.",
    tools: ["Python", "Geospatial AI", "Thermal Risk Modeling", "Radar Visualization"],
    metrics: [
      { label: "Hackathon", value: "FortyGuard ’26", note: "International AI Hackathon" },
      { label: "System", value: "HeatShield AI", note: "Urban heat-risk radar" },
      { label: "Focus", value: "Geospatial ML", note: "Microclimate hazard scoring" }
    ]
  },
  {
    id: "smart-music-recommender",
    stationCode: "ARC-04 // AUDIO REC",
    title: "Smart Music Recommender",
    subtitle: "Audio Feature & Genre Pattern Collaborative Filtering on Gradio",
    shortDescription:
      "Collaborative and content-aware music recommendation engine operating on acoustic feature vectors and genre patterns, deployed with an interactive Gradio interface for real-time personalized suggestions.",
    category: "Data & ML",
    tags: ["Data & ML", "Creative Engineering"],
    year: "Jun 2025",
    role: "ML Developer",
    status: "Completed & Deployed via Gradio · Verified Public Repo",
    accent: "violet",
    featured: false,
    diagramType: "archive-node",
    problem:
      "Cold-start and popularity-biased playlists fail listeners seeking tracks matched on fine-grained acoustic attributes such as energy, valence, tempo, danceability, and spectral timbre.",
    roleContribution:
      "Engineered the Scikit-Learn feature-space similarity and collaborative filtering pipeline and built the interactive Gradio web interface.",
    approach:
      "Normalized multi-dimensional audio feature vectors and genre embeddings, combining cosine neighborhood retrieval with collaborative preference weighting.",
    architecture: [
      {
        step: "01",
        title: "Acoustic Feature Vectorization",
        detail: "Normalizes tempo, valence, energy, acousticness, and genre descriptors."
      },
      {
        step: "02",
        title: "Collaborative & Cosine Similarity Engine",
        detail: "Ranks nearest-neighbor tracks in Scikit-Learn across hybrid acoustic-genre space."
      },
      {
        step: "03",
        title: "Interactive Gradio Web App",
        detail: "Serves real-time personalized track recommendations from user seed selections."
      }
    ],
    dataInputs: "Structured track catalog with acoustic descriptors and genre metadata.",
    outcome:
      "Shipped a responsive, user-facing Gradio recommendation app capable of real-time music discovery.",
    limitations:
      "Operates over a curated static catalog dataset rather than live streaming API playback.",
    tools: ["Python", "Scikit-Learn", "Gradio", "Pandas", "NumPy"],
    metrics: [
      { label: "Engine", value: "Scikit-Learn", note: "Collaborative + feature similarity" },
      { label: "Interface", value: "Gradio UI", note: "Real-time interactive demo" }
    ],
    repoUrl: "https://github.com/Fastian-afk/Smart-Music-Recommender"
  },
  {
    id: "candy-crush-sfml",
    stationCode: "ARC-05 // C++ ENGINE",
    title: "Candy Crush Clone (Academic Team-Lead Project)",
    subtitle: "Cross-Platform C++ & SFML Match-3 Engine with Custom State Machine",
    shortDescription:
      "Led an academic engineering team building a feature-complete match-3 game in C++ and SFML with cascading board physics, score combos, cross-platform compatibility, and a polished UI.",
    category: "Creative Engineering",
    tags: ["Creative Engineering"],
    year: "Aug 2024",
    role: "Academic Team Lead & Systems Programmer",
    status: "Completed Academic Lead Project · Verified Public Repo",
    accent: "emerald",
    featured: false,
    diagramType: "archive-node",
    problem:
      "Implementing deterministic grid-matching cascades, special tile combinations, smooth frame-rate-independent animations, and clean resource management in native C++ without a commercial game engine.",
    roleContribution:
      "Led the student development team, architected the object-oriented C++ board state machine and cascade resolution algorithms, and integrated the SFML rendering/audio loop.",
    approach:
      "Designed a modular C++ / SFML architecture separating grid logic, match detection, gravity refill cascades, and UI rendering, and presented the completed system to faculty.",
    architecture: [
      {
        step: "01",
        title: "Deterministic Grid & Match-3 Resolver",
        detail: "2D matrix scanning for horizontal, vertical, and special combo intersections."
      },
      {
        step: "02",
        title: "Cascade & Gravity Refill State Machine",
        detail: "Iterative tile clearing, animated drop physics, and deadlock shuffle detection."
      },
      {
        step: "03",
        title: "SFML Cross-Platform Rendering & UI",
        detail: "Hardware-accelerated 2D sprites, score HUD, level progression, and event polling."
      }
    ],
    dataInputs: "Real-time keyboard/mouse input events and level configuration states.",
    outcome:
      "Delivered a polished, cross-platform C++/SFML game presented to FAST-NUCES faculty with strong positive feedback.",
    limitations:
      "Native desktop C++/SFML build requiring local compilation rather than browser WebAssembly execution.",
    tools: ["C++", "SFML Library", "OOP Architecture", "State Machines", "Git"],
    metrics: [
      { label: "Leadership", value: "Team Lead", note: "Academic engineering project" },
      { label: "Core Stack", value: "C++ / SFML", note: "Cross-platform 2D engine" }
    ],
    repoUrl: "https://github.com/Fastian-afk/Candy-Crush-in-C-"
  }
];

export const archiveProjects: PortfolioProject[] = ARCHIVE_ONLY_PROJECTS;
export default ARCHIVE_ONLY_PROJECTS;
