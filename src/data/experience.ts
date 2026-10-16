export interface ExperienceItem {
  id: string;
  code: string;
  organization: string;
  shortOrg: string;
  role: string;
  dates: string;
  location: string;
  status: string;
  accent: "cyan" | "amber" | "violet";
  summary: string;
  bullets: string[];
  mentorshipOrRecognition?: string;
  domains: string[];
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "exp-techgis",
    code: "EXP-01 // TECHGIS",
    organization: "TechGIS (Pvt.) Limited",
    shortOrg: "TechGIS",
    role: "Applied AI/ML Intern",
    dates: "15 July 2026 – 15 August 2026",
    location: "Islamabad, Pakistan",
    status: "Completed",
    accent: "violet",
    summary:
      "Engineered and evaluated agentic workflows, semantic retrieval pipelines, and resource-aware inference architectures for production-oriented and sovereign AI deployments.",
    bullets: [
      "Worked across agentic AI, multi-agent reasoning, RAG, semantic retrieval, vector embeddings, generative/cognitive AI, and production-oriented AI engineering.",
      "Explored sovereign, air-gapped, and on-premise AI deployments alongside computer vision, geospatial AI, edge AI, efficient model inference, and neural architecture evaluation.",
      "Contributed to research, experimentation, benchmark evaluation, and deployment-oriented workflows under Manager Hameem Ahmad and Supervisor Inayat Arshad."
    ],
    mentorshipOrRecognition: "Mentored by Manager Hameem Ahmad & Supervisor Inayat Arshad.",
    domains: ["Agentic AI", "Multi-Agent Reasoning", "RAG & Embeddings", "Sovereign / Air-Gapped AI", "Geospatial & Edge AI"]
  },
  {
    id: "exp-midl-ncai",
    code: "EXP-02 // MIDL-NCAI",
    organization: "Medical Imaging and Diagnostics Lab (MIDL) — National Centre for Artificial Intelligence (NCAI)",
    shortOrg: "MIDL / NCAI",
    role: "Artificial Intelligence Intern",
    dates: "July 2025 – September 2025",
    location: "Islamabad, Pakistan",
    status: "Completed",
    accent: "cyan",
    summary:
      "Researched and built hybrid Vision-Language prescription OCR pipelines and tool-calling clinical information agents at Pakistan's flagship national AI research lab.",
    bullets: [
      "Advanced a medical prescription OCR pipeline combining classical document processing and modern Vision-Language Model (VLM) techniques, integrating Nanonets-OCR and Ollama.",
      "Built LangChain agents with deterministic tool-calling for medication instruction and side-effect retrieval, incorporating MedGemMA 4.0 for grounded clinical Q&A.",
      "Recognized by lab leadership for technical excellence, professionalism, and effective cross-functional teamwork."
    ],
    mentorshipOrRecognition: "Recognized for technical excellence, professionalism, and cross-functional teamwork.",
    domains: ["Vision-Language Models", "Nanonets-OCR & Ollama", "LangChain Tool-Calling", "MedGemMA 4.0", "Healthcare AI"]
  },
  {
    id: "exp-nastp",
    code: "EXP-03 // NASTP",
    organization: "NASTP — National Aerospace Science and Technology Park",
    shortOrg: "NASTP",
    role: "AI & ML Intern",
    dates: "August 2024 – October 2024",
    location: "Rawalpindi, Pakistan",
    status: "Completed",
    accent: "amber",
    summary:
      "Collaborated on deep learning model training, physiological signal analysis pipelines, and software quality engineering within an aerospace and defense technology ecosystem.",
    bullets: [
      "Collaborated on AI model training, data visualization and analysis pipelines, and ECG anomaly detection using deep learning (Temporal Convolutional Networks).",
      "Participated in structured code reviews and improved pipeline modularity, execution performance, and agile engineering practices."
    ],
    domains: ["Deep Learning", "ECG Signal Anomaly Detection", "Analysis Pipelines", "Code Quality & Agile"]
  }
];
