export interface SkillCluster {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  accent: "cyan" | "amber" | "violet" | "emerald";
  appliedContext: string;
  items: {
    name: string;
    contextTag: string;
  }[];
}

export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    id: "cluster-ml-ai",
    code: "DOM-01 // CORE ML & XAI",
    title: "Machine Learning, Deep Learning & Explainability",
    subtitle: "Predictive modeling, neural architectures, and post-hoc interpretability",
    accent: "cyan",
    appliedContext: "Applied across SepsisAI (MIMIC), ADS-B cVAE + XGBoost, Chest X-Ray ResNet18, and ECG TCN pipelines.",
    items: [
      { name: "PyTorch", contextTag: "cVAE, ResNet18, Time-Series" },
      { name: "TensorFlow", contextTag: "Deep Learning Pipelines" },
      { name: "Scikit-Learn", contextTag: "Baselines & Calibration" },
      { name: "XGBoost", contextTag: "Leakage-Audited Tabular & Time-Series" },
      { name: "LightGBM", contextTag: "Gradient Boosted Ensembles" },
      { name: "Hugging Face Transformers", contextTag: "Sequence & Multimodal" },
      { name: "SHAP", contextTag: "TreeSHAP & Clinical Attribution" },
      { name: "Grad-CAM", contextTag: "Radiograph Spatial Saliency" }
    ]
  },
  {
    id: "cluster-genai-agents",
    code: "DOM-02 // GENAI & AGENTS",
    title: "Generative AI, VLMs & Agentic Workflows",
    subtitle: "Tool-calling agents, multimodal OCR, semantic retrieval, and real-time APIs",
    accent: "violet",
    appliedContext: "Applied at TechGIS, MIDL/NCAI (prescription intelligence), HackUPC 2026 (DreamTrip), and IEEE IRAI advisory agents.",
    items: [
      { name: "LangChain Agents", contextTag: "Tool-Calling & Orchestration" },
      { name: "RAG & Semantic Retrieval", contextTag: "Grounded Knowledge Pipelines" },
      { name: "Vector Embeddings", contextTag: "Multi-City & Clinical Retrieval" },
      { name: "Gemini API", contextTag: "Structured Reasoning & DreamTrip" },
      { name: "Claude API", contextTag: "Agentic Evaluation Workflows" },
      { name: "Ollama", contextTag: "Local / On-Prem VLM & LLM Inference" },
      { name: "Nanonets-OCR", contextTag: "Hybrid Medical Document OCR" },
      { name: "MedGemMA 4.0", contextTag: "Clinical Q&A Synthesis" },
      { name: "ElevenLabs", contextTag: "Low-Latency Voice Synthesis" },
      { name: "FastAPI", contextTag: "Sub-50 ms Inference & Agent APIs" }
    ]
  },
  {
    id: "cluster-research-domains",
    code: "DOM-03 // RESEARCH FOCUS",
    title: "High-Stakes Research & Application Domains",
    subtitle: "Physical constraints, clinical rigor, and resource-aware deployment",
    accent: "amber",
    appliedContext: "Core research themes spanning IEEE/IRAI, Elsevier Safety Science, MIT/CITI MIMIC-IV, and sovereign AI internships.",
    items: [
      { name: "Healthcare AI & Clinical ML", contextTag: "ICU Sepsis & Physiological Signals" },
      { name: "Aviation Safety ML", contextTag: "ADS-B Unstable Approach & Runway Risk" },
      { name: "Trustworthy & Explainable ML", contextTag: "Leakage Audits, SHAP & Grad-CAM" },
      { name: "Computer Vision", contextTag: "Medical Imaging & VLM Document Parsing" },
      { name: "Agentic & Multi-Agent AI", contextTag: "Tool-Calling & Autonomous Advisories" },
      { name: "Edge & Resource-Constrained AI", contextTag: "Sovereign / Air-Gapped & Low-Latency" },
      { name: "Geospatial AI", contextTag: "TechGIS & Thermal Risk Radar" }
    ]
  },
  {
    id: "cluster-languages",
    code: "DOM-04 // LANGUAGES",
    title: "Programming & Scientific Computing Languages",
    subtitle: "Systems programming, numerical computing, and full-stack implementation",
    accent: "emerald",
    appliedContext: "Used across research codebases, FAST-NUCES systems coursework, and native C++ engines.",
    items: [
      { name: "Python", contextTag: "Primary ML, Research & FastAPI Stack" },
      { name: "C++", contextTag: "Systems, Algorithms & SFML Engine" },
      { name: "C", contextTag: "Operating Systems & Low-Level" },
      { name: "SQL", contextTag: "Relational Querying & Cohort Extraction" },
      { name: "Java", contextTag: "Object-Oriented Engineering" },
      { name: "MATLAB", contextTag: "Numerical & Signal Analysis" },
      { name: "HTML / CSS", contextTag: "Web Interfaces & Dashboards" },
      { name: "PHP", contextTag: "Backend Web Scripting" }
    ]
  },
  {
    id: "cluster-data-tools",
    code: "DOM-05 // DATA & INFRA",
    title: "Data Engineering, Databases & Interactive Tooling",
    subtitle: "Analysis pipelines, relational systems, and rapid ML prototyping",
    accent: "cyan",
    appliedContext: "Daily engineering stack for dataset curation, reproducible experiments, and interactive research demos.",
    items: [
      { name: "Pandas & NumPy", contextTag: "Time-Series & Vectorized Processing" },
      { name: "Matplotlib", contextTag: "Scientific & Telemetry Plotting" },
      { name: "Jupyter", contextTag: "Reproducible Research Notebooks" },
      { name: "Gradio & Streamlit", contextTag: "Interactive Model Demos" },
      { name: "Git & GitHub", contextTag: "Version Control & Code Review" },
      { name: "MySQL / SQL Server / Oracle", contextTag: "Relational Database Systems" },
      { name: "VS Code & PyCharm", contextTag: "Development Environments" },
      { name: "Bootstrap", contextTag: "Responsive UI Prototyping" }
    ]
  }
];
