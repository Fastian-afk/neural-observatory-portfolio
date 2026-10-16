export interface SocialLinks {
  email: string;
  mailto: string;
  linkedin: string;
  github: string;
  scholar: string;
  devpost: string;
  kaggle: string;
  currentPortfolio: string;
  resumePdf: string;
}

export const LINKS: SocialLinks = {
  email: "imdufazal@gmail.com",
  mailto: "mailto:imdufazal@gmail.com",
  linkedin: "https://www.linkedin.com/in/imaad-fazal/",
  github: "https://github.com/Fastian-afk",
  scholar: "https://scholar.google.com/citations?user=8FXOcA0AAAAJ",
  devpost: "https://devpost.com/imdufazal",
  kaggle: "https://www.kaggle.com/imaadfazal",
  currentPortfolio: "https://imaad-fazal-portfolio-hub.vercel.app/",
  resumePdf: "/imaad-fazal-resume.pdf"
};

export interface NavItem {
  id: string;
  label: string;
  code: string;
  stationTitle: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Overview", code: "OBS-00", stationTitle: "Command Deck" },
  { id: "work", label: "Selected Work", code: "OBS-01", stationTitle: "Flagship Systems" },
  { id: "research", label: "Research", code: "OBS-02", stationTitle: "Research Log" },
  { id: "experience", label: "Experience", code: "OBS-03", stationTitle: "Field Telemetry" },
  { id: "archive", label: "Archive", code: "OBS-04", stationTitle: "System Archive" },
  { id: "skills", label: "Skills", code: "OBS-05", stationTitle: "Technical Atlas" },
  { id: "credentials", label: "Credentials", code: "OBS-06", stationTitle: "Honours & Dossier" },
  { id: "contact", label: "Contact", code: "OBS-07", stationTitle: "Signal Link" }
];
