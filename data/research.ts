// Replace every placeholder in this file with your real content.
// All pages read from here, so no component needs to change.

export type NavLink = { href: string; label: string };

export type ResearchComponent = {
  id: string;
  title: string;
  owner: string;
  ownerId: string;
  novelty: string;
  mainObjective: string;
  subObjectives: string[];
  methodology: {
    summary: string;
    steps: string[];
    technologies: string[];
  };
};

export type MilestoneStatus = "completed" | "current" | "upcoming";

export type Milestone = {
  title: string;
  date: string;
  description: string;
  status: MilestoneStatus;
};

export type DownloadItem = {
  title: string;
  description: string;
  category: "Document" | "Presentation";
  file: string;
  available: boolean;
};

export type Person = {
  name: string;
  role: string;
  title: string;
  email: string;
  linkedin?: string;
  image?: string;
  component?: string;
};

export type Achievement = {
  title: string;
  event: string;
  date: string;
  description: string;
  image?: string;
};

export const site = {
  shortName: "Research Portfolio",
  groupId: "R26-SE-002",
  university: "Sri Lanka Institute of Information Technology",
  faculty: "Faculty of Computing",
  year: "2026",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/methodology", label: "Methodology" },
  { href: "/timeline", label: "Milestones" },
  { href: "/downloads", label: "Downloads" },
  { href: "/about", label: "About Us" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export const project = {
  title: "AI Ecosystem for Fake Job Scam Detection and Fraud-Aware Job Recommendation",
  tagline:
    "An AI-powered mobile ecosystem that protects job seekers across the whole recruitment journey: detecting fake job posts, verifying employers, flagging scam conversations and recommending jobs that are both relevant and safe.",
  domain: "Artificial Intelligence",
  introduction: [
    "Write two or three short paragraphs introducing the research area. Explain the background, why the topic matters today, and who is affected by the problem.",
    "Describe what currently exists and where it falls short, then introduce your system at a high level and the value it brings to its users.",
  ],
  keywords: [
    "Recruitment Fraud",
    "Machine Learning",
    "NLP",
    "Explainable AI",
    "Job Recommendation",
  ],
  // Put the image in public/images/diagrams/ and set e.g. "/images/diagrams/architecture.png"
  architectureDiagram: "",
};

export const scope = {
  researchGap: {
    summary:
      "Summarise what existing research and products have not solved. Reference the limitations you found in the literature review.",
    points: [
      "Limitation found in existing work number one.",
      "Limitation found in existing work number two.",
      "Limitation found in existing work number three.",
    ],
  },
  problem: {
    statement:
      "State the research problem in one or two clear sentences. This is the core question your project answers.",
    points: [
      "Specific sub-problem or pain point one.",
      "Specific sub-problem or pain point two.",
      "Specific sub-problem or pain point three.",
    ],
  },
  solution: {
    summary:
      "Describe the proposed solution: what the system is, how its components work together, and how it addresses the research gap.",
    points: [
      "Key capability of the proposed system one.",
      "Key capability of the proposed system two.",
      "Key capability of the proposed system three.",
    ],
  },
  mainObjective:
    "State the overall main objective of the research project in one sentence.",
};

export const components: ResearchComponent[] = [
  {
    id: "fake-job-post-detection",
    title: "Fake Job Post Detection",
    owner: "Member Name",
    ownerId: "IT00000000",
    novelty: "Explain what is new about fake job post detection compared with existing solutions.",
    mainObjective: "The main objective of the fake job post detection component in one clear sentence.",
    subObjectives: [
      "Sub-objective one for this component.",
      "Sub-objective two for this component.",
      "Sub-objective three for this component.",
    ],
    methodology: {
      summary: "Summarise the approach used to build and evaluate this component.",
      steps: [
        "Data collection and preparation",
        "Model or algorithm design",
        "Implementation and integration",
        "Testing and evaluation",
      ],
      technologies: ["Python", "Scikit-learn", "React Native"],
    },
  },
  {
    id: "employer-legitimacy-verification",
    title: "Employer Legitimacy Verification",
    owner: "Bandara H.M.N.T",
    ownerId: "IT22251664",
    novelty:
      "Verifies the employer behind a job post, not just the advertisement text. Company-level credibility indicators such as domain consistency, recruiter email alignment, LinkedIn presence and profile completeness are classified with machine learning and explained with SHAP and a confidence level.",
    mainObjective:
      "To design and develop an explainable ML-based Employer Legitimacy Verification System that analyses company-level credibility indicators and identity consistency features to classify employers as legitimate or potentially suspicious, with risk indicator highlighting and verification confidence levels.",
    subObjectives: [
      "Identify employer credibility indicators such as company name and website domain consistency, recruiter email domain alignment, verifiable contact details, LinkedIn presence and profile completeness.",
      "Build an employer dataset from public job postings and company sources, and engineer structured ML features from it.",
      "Train classification models, primarily Random Forest, to classify employers as legitimate or potentially suspicious.",
      "Apply SHAP to highlight the credibility indicators that drive each prediction.",
      "Integrate the model into the backend so users can verify employers and view explanations in the mobile app.",
      "Evaluate the model using accuracy, precision, recall and F1-score, plus a user study on usefulness.",
    ],
    methodology: {
      summary:
        "Employer data from public sources is turned into credibility indicators through feature engineering, classified with Random Forest (compared against Logistic Regression and XGBoost), and explained with SHAP before being returned to the mobile app.",
      steps: [
        "Employer dataset construction from public job posts and company sources",
        "Feature engineering: domain extraction, fuzzy name matching, email alignment and profile completeness",
        "Model training with Random Forest, Logistic Regression and XGBoost",
        "SHAP explainability and verification confidence scoring",
        "Integration with the React Native app through a REST API",
        "Evaluation with ML metrics and a Likert-scale user study (50+ participants)",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "XGBoost",
        "SHAP",
        "RapidFuzz",
        "Pandas",
        "React Native",
        "MongoDB",
      ],
    },
  },
  {
    id: "scam-communication-detection",
    title: "Scam Conversation & Manipulation Tactic Detection (BSTD)",
    owner: "Kajanthan U",
    ownerId: "IT22224002",
    novelty:
      "The first system to detect psychological manipulation tactics (urgency pressure, FOMO, sunk-cost influence and social proof) in real-time recruiter–candidate conversations. It turns the behavioural findings of Anagha et al. into a working detector that works across platforms through OCR and gives plain-language warnings.",
    mainObjective:
      "To design, develop and evaluate a Behaviour-Inspired Semantic Tactic Detection (BSTD) system that analyses recruiter–candidate messages with NLP, detects manipulation tactics in real time and delivers explainable warnings, achieving an F1 score of at least 0.90 and a SUS score of 70 or above.",
    subObjectives: [
      "Review existing literature on recruitment fraud, scam communication and manipulation tactics to identify research gaps.",
      "Build and annotate a multi-platform dataset of recruiter–candidate scam messages with scam and tactic labels.",
      "Implement a TF-IDF and Logistic Regression baseline to benchmark performance.",
      "Fine-tune a DistilBERT multi-label classifier to identify the four manipulation tactics.",
      "Develop an OCR screenshot pipeline for cross-platform detection without platform API access.",
      "Deploy a mobile app with a Flask REST API that delivers real-time results and plain-language warnings.",
    ],
    methodology: {
      summary:
        "Following Design Science Research, a fine-tuned DistilBERT model performs scam classification and multi-label tactic detection on messages from a built-in chat, pasted text or OCR-processed screenshots, with an explanation engine generating plain-language warnings.",
      steps: [
        "Dataset construction and annotation (Cohen's Kappa ≥ 0.80)",
        "TF-IDF and Logistic Regression baseline model",
        "DistilBERT fine-tuning for scam and tactic classification",
        "OCR screenshot pipeline with OpenCV and Tesseract",
        "Explanation engine mapping tactics to plain-language warnings",
        "Evaluation: F1 ≥ 0.90 and SUS ≥ 70 user study",
      ],
      technologies: [
        "Python",
        "Hugging Face",
        "DistilBERT",
        "Scikit-learn",
        "OpenCV",
        "Tesseract",
        "Flask",
        "React Native",
        "MongoDB Atlas",
      ],
    },
  },
  {
    id: "fraud-aware-job-recommendation",
    title: "Fraud-Aware Job Recommendation & Ranking",
    owner: "Methmi N P C S",
    ownerId: "IT22188618",
    novelty:
      "Combines skill relevance with fraud risk from all three detection modules. Risk indicators are aggregated with the Entropy Weight Method into a safety score, and jobs are ranked with TOPSIS so recommendations are both relevant and safe.",
    mainObjective:
      "To develop a risk-aware job recommendation and ranking model that integrates skill matching and fraud risk analysis to recommend relevant and safer job opportunities for job seekers.",
    subObjectives: [
      "Match user profiles with job descriptions using TF-IDF and cosine similarity.",
      "Convert results from fake job, employer legitimacy and scam communication detection into risk indicators.",
      "Calculate an overall risk score for each job using the Entropy Weight Method.",
      "Convert the risk score into a safety score representing job trustworthiness.",
      "Rank candidate jobs with TOPSIS using both skill match and safety scores.",
      "Generate final recommendations that balance relevance and safety.",
    ],
    methodology: {
      summary:
        "Using a Design Science approach, candidate jobs are found through skill matching, their fraud risk is aggregated from the other three components, and the TOPSIS multi-criteria method ranks them by skill match and safety.",
      steps: [
        "Skill matching with TF-IDF and cosine similarity",
        "Candidate job selection from top matches",
        "Collecting risk indicators from the three detection modules",
        "Risk score calculation with the Entropy Weight Method",
        "Safety score conversion (1 − risk score)",
        "TOPSIS ranking and safe job recommendations",
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLP libraries", "MongoDB"],
    },
  },
];

export const milestones: Milestone[] = [
  {
    title: "Project Initialization",
    date: "November 2025",
    description: "Group formation, topic selection and supervisor allocation.",
    status: "completed",
  },
  {
    title: "Topic Assessment Form (TAF)",
    date: "January 2026",
    description: "Submission and approval of the research topic assessment.",
    status: "completed",
  },
  {
    title: "Proposal Submission",
    date: "15 March 2026",
    description: "Submission of the project proposal document.",
    status: "completed",
  },
  {
    title: "Proposal Presentation",
    date: "16 – 18 March 2026",
    description: "Presentation of the proposed research to the panel.",
    status: "completed",
  },
  {
    title: "Progress Presentation 1",
    date: "11 – 13 May 2026",
    description: "Demonstration of around 50% completion of the system.",
    status: "completed",
  },
  {
    title: "Progress Presentation 2",
    date: "31 August – 2 September 2026",
    description: "Demonstration of around 90% completion of the system.",
    status: "completed",
  },
  {
    title: "Draft Thesis & Website Submission",
    date: "11 October 2026",
    description: "Submission of the draft thesis and research portfolio website.",
    status: "current",
  },
  {
    title: "Final Presentation & Viva",
    date: "19 – 21 October 2026",
    description: "Final system demonstration, viva and website evaluation.",
    status: "upcoming",
  },
  {
    title: "Research Paper Submission",
    date: "23 October 2026",
    description: "Submission of the research paper for publication.",
    status: "upcoming",
  },
  {
    title: "Final Thesis Submission",
    date: "28 October 2026",
    description: "Submission of the final individual and group thesis reports.",
    status: "upcoming",
  },
];

export const downloads: DownloadItem[] = [
  {
    title: "Project Proposal",
    description: "The approved research proposal document.",
    category: "Document",
    file: "/documents/proposal-document.pdf",
    available: false,
  },
  {
    title: "Topic Assessment Form",
    description: "The TAF submitted for topic approval.",
    category: "Document",
    file: "/documents/taf.pdf",
    available: false,
  },
  {
    title: "Proposal Presentation",
    description: "Slides from the proposal presentation.",
    category: "Presentation",
    file: "/documents/proposal-presentation.pdf",
    available: false,
  },
  {
    title: "Progress Presentation 1",
    description: "Slides from the first progress presentation.",
    category: "Presentation",
    file: "/documents/pp1-presentation.pdf",
    available: false,
  },
  {
    title: "Progress Presentation 2",
    description: "Slides from the second progress presentation.",
    category: "Presentation",
    file: "/documents/pp2-presentation.pdf",
    available: false,
  },
  {
    title: "Final Presentation",
    description: "Slides from the final presentation and viva.",
    category: "Presentation",
    file: "/documents/final-presentation.pdf",
    available: false,
  },
  {
    title: "Thesis Report",
    description: "The final thesis report.",
    category: "Document",
    file: "/documents/thesis-report.pdf",
    available: false,
  },
  {
    title: "Research Paper",
    description: "The research paper submitted for publication.",
    category: "Document",
    file: "/documents/research-paper.pdf",
    available: false,
  },
];

export const supervisors: Person[] = [
  {
    name: "Ms. Thilini Jayalath",
    role: "Supervisor",
    title: "Senior Lecturer, Faculty of Computing",
    email: "supervisor@university.edu",
    linkedin: "",
  },
  {
    name: "Ms. Karthiga Rajendran",
    role: "Co-Supervisor",
    title: "Lecturer, Faculty of Computing",
    email: "cosupervisor@university.edu",
    linkedin: "",
  },
];

export const members: Person[] = components.map((c) => ({
  name: c.owner,
  role: "Team Member",
  title: `${c.ownerId} · BSc (Hons) IT, Software Engineering`,
  email: `${c.ownerId.toLowerCase()}@my.sliit.lk`,
  linkedin: "",
  component: c.title,
}));

export const achievements: Achievement[] = [];

export const contact = {
  email: "your.group.email@gmail.com",
  phone: "",
  address: "SLIIT, New Kandy Road, Malabe, Sri Lanka",
};
