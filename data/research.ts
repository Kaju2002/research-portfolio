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
    technologies: TechnologyGroup[];
  };
};

export type TechnologyGroup = { layer: string; items: string[] };

export type MilestoneStatus = "completed" | "current" | "upcoming";

export type Milestone = {
  title: string;
  date: string;
  // Last day of the milestone (YYYY-MM-DD). The status is worked out from this date.
  end: string;
  description: string;
  // Only set this to override the date-based status, e.g. when a milestone is postponed.
  status?: MilestoneStatus;
};

export type ResolvedMilestone = Milestone & { status: MilestoneStatus };

export type DownloadItem = {
  title: string;
  description: string;
  category: "Document" | "Presentation";
  file: string;
  available: boolean;
  // Use instead of `file` when the item has one file per member, e.g. individual proposals.
  files?: { label: string; file: string }[];
};

export type Person = {
  name: string;
  role: string;
  title: string;
  email: string;
  linkedin?: string;
  image?: string;
  component?: string;
  department?: string;
  interests?: string[];
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
  leaderId: "IT22224002",
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
    "Online recruitment platforms such as LinkedIn, ikman.lk and TopJobs.lk have become the main way job seekers in Sri Lanka find work. Alongside this growth, recruitment fraud has become a serious cybersecurity threat. Scammers publish fake job advertisements, impersonate legitimate employers, and move conversations to private channels such as WhatsApp and Telegram to obtain money, personal documents and banking details. Scam-based conversational fraud has been linked to an estimated $75 billion in global losses, and Sri Lanka's Computer Crimes Investigation Division (CCID) reports a steady rise in online employment scam complaints, especially among young job seekers and recent graduates.",
    "Existing research tackles this problem in pieces. Most detection systems only classify the text of English job advertisements, leaving Sinhala and Tamil speakers unprotected. Few verify the employer behind a post, and none analyse the recruiter–candidate conversation where financial harm actually happens. Job recommendation systems rank jobs purely on skill relevance without considering whether they are safe. Most solutions also return a simple \"fake or real\" label with no explanation that a non-technical job seeker can understand or act on.",
    "This research proposes an AI ecosystem that protects job seekers across the entire recruitment journey through four integrated components: Fake Job Post Detection, Employer Legitimacy Verification, Scam Conversation and Manipulation Tactic Detection (BSTD), and Fraud-Aware Job Recommendation. The outputs of the three detection components are combined into a single safety score, so the system recommends jobs that are both relevant and safe. Clear, plain-language explanations are delivered through a React Native mobile application. The work supports SDG 8 (Decent Work and Economic Growth) and SDG 16 (Peace, Justice and Strong Institutions).",
  ],
  surveyHighlights: [
    { value: "85%", label: "have seen suspicious job adverts online" },
    { value: "68%", label: "have received suspicious recruiter messages" },
    { value: "82%", label: "believe recruitment scams are increasing" },
    { value: "78", label: "job seekers and students surveyed" },
  ],
  keywords: [
    "Recruitment Fraud",
    "Machine Learning",
    "NLP",
    "Explainable AI",
    "Job Recommendation",
  ],
  // Put the image in public/images/diagrams/ and set e.g. "/images/diagrams/architecture.png"
  architectureDiagram: "/images/diagrams/architecture.jpg",
};

export const scope = {
  researchGap: {
    summary:
      "Existing research and tools tackle recruitment fraud in isolated pieces. They focus mainly on the text of job advertisements and treat fraud detection and job recommendation as separate problems.",
    points: [
      "Fake job detection models work only in English and analyse only the job advert text, ignoring Sinhala and Tamil speakers, the employer behind the post and the conversation that follows.",
      "Employer credibility indicators such as website domain consistency, recruiter email alignment and LinkedIn presence are rarely analysed systematically.",
      "Scam message detectors work on a single platform (SMS or WhatsApp), give only a \"scam or not\" label, and don't identify the manipulation tactics scammers use.",
      "Job recommendation systems rank jobs by skill relevance alone and never consider fraud risk.",
    ],
  },
  problem: {
    statement:
      "How can job seekers be protected across the entire recruitment journey (the job post, the employer and the recruiter's messages) and be guided towards jobs that are both relevant and safe, with explanations they can understand?",
    points: [
      "Fraudulent job posts look professional and get past basic moderation on popular job platforms.",
      "Scammers hide behind fake or impersonated employer identities that job seekers can't easily verify.",
      "Financial harm happens in private chats on WhatsApp, Telegram and SMS, through tactics like urgency pressure and fear of missing out, where no protection exists.",
      "A plain \"fake or real\" label without a reason gives non-technical users little to trust or act on.",
    ],
  },
  solution: {
    summary:
      "An AI-powered mobile ecosystem of four integrated components that checks every stage of recruitment and combines their results into a single safety score, which is then used to recommend safer jobs.",
    points: [
      "Fake Job Post Detection: flags fraudulent job posts in English, Sinhala and Tamil with XLM-RoBERTa, giving a Low / Medium / High suspicion score and SHAP/LIME explanations.",
      "Employer Legitimacy Verification: scores employer credibility with Random Forest and explains the result using SHAP.",
      "BSTD: detects manipulation tactics in recruiter conversations in real time using DistilBERT, with OCR to read screenshots from any platform.",
      "Fraud-Aware Recommendation: combines all the risk signals into one score and ranks jobs by both skill match and safety, using the Entropy Weight Method and TOPSIS.",
    ],
  },
  mainObjective:
    "To design and develop an AI-powered mobile ecosystem that detects recruitment fraud across job posts, employers and recruiter conversations, and uses the combined fraud risk to recommend job opportunities that are both relevant and safe, with clear explanations for job seekers.",
};

export const components: ResearchComponent[] = [
  {
    id: "fake-job-post-detection",
    title: "Multilingual Fake Job Post Detection",
    owner: "Santhosh S",
    ownerId: "IT22113740",
    novelty:
      "The first fake job detection system for English, Sinhala and Tamil. It is trained on a new trilingual dataset built from real Sri Lankan job portals, gives a three-tier Low / Medium / High suspicion score instead of a plain real-or-fake verdict, and explains every prediction with SHAP and LIME.",
    mainObjective:
      "To design, develop and evaluate a multilingual AI-powered mobile application that detects fake job postings in Sinhala, Tamil and English using XLM-RoBERTa, assigns a three-tier suspicion score and provides SHAP/LIME-based explanations, achieving an F1-score of at least 90% across all three languages.",
    subObjectives: [
      "Build a trilingual fake job dataset by scraping topjobs.lk and ikman.lk and labelling each post as fake or legitimate (Cohen's Kappa ≥ 0.80).",
      "Fine-tune XLM-RoBERTa on the dataset with SMOTE-based class balancing to reach an F1-score of at least 90% in every language.",
      "Design a three-tier suspicion score combining model probability, risky keywords, missing fields and free email domains.",
      "Integrate SHAP and LIME to explain the top features behind each prediction, validated with at least 30 participants.",
      "Develop a React Native mobile app with a REST API backend, supporting all three languages in the interface.",
      "Evaluate the full system on a held-out test set and through a user study with at least 50 participants.",
    ],
    methodology: {
      summary:
        "Following Design Science Research, job posts scraped from Sri Lankan portals are labelled and used to fine-tune XLM-RoBERTa. A weighted suspicion score and SHAP/LIME explanations are returned to the mobile app, with Tesseract OCR handling image-based posts such as WhatsApp screenshots.",
      steps: [
        "Trilingual dataset scraping (Scrapy, Selenium) and manual labelling",
        "Class balancing with SMOTE-ENN",
        "XLM-RoBERTa fine-tuning for fake or legitimate classification",
        "Three-tier suspicion scoring with fuzzy logic (Low / Medium / High)",
        "SHAP and LIME explanations in the user's language",
        "Evaluation: F1 ≥ 90%, ROC-AUC, SUS > 70 user study",
      ],
      technologies: [
        { layer: "Data", items: ["Scrapy", "Selenium", "Tesseract OCR"] },
        { layer: "Model", items: ["Python", "Hugging Face", "XLM-RoBERTa"] },
        { layer: "Explainability", items: ["SHAP", "LIME"] },
        {
          layer: "App & infrastructure",
          items: ["FastAPI", "React Native", "AWS", "MongoDB Atlas"],
        },
      ],
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
        { layer: "Data", items: ["Pandas", "RapidFuzz"] },
        { layer: "Model", items: ["Python", "Scikit-learn", "XGBoost"] },
        { layer: "Explainability", items: ["SHAP"] },
        { layer: "App & infrastructure", items: ["FastAPI", "React Native", "MongoDB"] },
      ],
    },
  },
  {
    id: "scam-communication-detection",
    title: "Scam Conversation & Manipulation Tactic Detection (BSTD)",
    owner: "Kajanthan U",
    ownerId: "IT22224002",
    novelty:
      "The first system to detect psychological manipulation tactics (urgency pressure, FOMO, sunk-cost influence and social proof) in real-time recruiter–candidate conversations. It turns the behavioural findings of Anagha et al. into a working detector with plain-language warnings, and supports three input modes: a built-in recruiter chat analysed as messages arrive, pasted messages from WhatsApp, Telegram, SMS, LinkedIn or email, and uploaded screenshots read with OCR.",
    mainObjective:
      "To design, develop and evaluate a Behaviour-Inspired Semantic Tactic Detection (BSTD) system that analyses recruiter–candidate messages with NLP, detects manipulation tactics in real time and delivers explainable warnings, achieving an F1 score of at least 0.90 and a SUS score of 70 or above.",
    subObjectives: [
      "Review existing literature on recruitment fraud, scam communication and manipulation tactics to identify research gaps.",
      "Build and annotate a multi-platform dataset of recruiter–candidate scam messages with scam and tactic labels.",
      "Implement a TF-IDF and Logistic Regression baseline to benchmark performance.",
      "Fine-tune a DistilBERT multi-label classifier to identify the four manipulation tactics.",
      "Develop an OCR screenshot pipeline for cross-platform detection without platform API access.",
      "Deploy a mobile app with a FastAPI REST API that delivers real-time results and plain-language warnings.",
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
        { layer: "Data", items: ["OpenCV", "Tesseract OCR"] },
        { layer: "Model", items: ["Python", "Hugging Face", "DistilBERT", "Scikit-learn"] },
        { layer: "App & infrastructure", items: ["FastAPI", "React Native", "MongoDB Atlas"] },
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
      technologies: [
        { layer: "Data", items: ["Pandas", "NumPy"] },
        { layer: "Model", items: ["Python", "Scikit-learn", "NLP libraries"] },
        { layer: "App & infrastructure", items: ["FastAPI", "MongoDB"] },
      ],
    },
  },
];

export const milestones: Milestone[] = [
  {
    title: "Project Initialization",
    date: "November 2025",
    end: "2025-11-30",
    description: "Group formation, topic selection and supervisor allocation.",
  },
  {
    title: "Topic Assessment Form (TAF)",
    date: "January 2026",
    end: "2026-01-31",
    description: "Submission and approval of the research topic assessment.",
  },
  {
    title: "Proposal Submission",
    date: "15 March 2026",
    end: "2026-03-15",
    description: "Submission of the project proposal document.",
  },
  {
    title: "Proposal Presentation",
    date: "16 – 18 March 2026",
    end: "2026-03-18",
    description: "Presentation of the proposed research to the panel.",
  },
  {
    title: "Progress Presentation 1",
    date: "11 – 13 May 2026",
    end: "2026-05-13",
    description: "Demonstration of around 50% completion of the system.",
  },
  {
    title: "Progress Presentation 2",
    date: "31 August – 2 September 2026",
    end: "2026-09-02",
    description: "Demonstration of around 90% completion of the system.",
  },
  {
    title: "Draft Thesis & Website Submission",
    date: "11 October 2026",
    end: "2026-10-11",
    description: "Submission of the draft thesis and research portfolio website.",
  },
  {
    title: "Final Presentation & Viva",
    date: "19 – 21 October 2026",
    end: "2026-10-21",
    description: "Final system demonstration, viva and website evaluation.",
  },
  {
    title: "Research Paper Submission",
    date: "23 October 2026",
    end: "2026-10-23",
    description: "Submission of the research paper for publication.",
  },
  {
    title: "Final Thesis Submission",
    date: "28 October 2026",
    end: "2026-10-28",
    description: "Submission of the final individual and group thesis reports.",
  },
];

// `today` is a YYYY-MM-DD string, so plain string comparison orders dates correctly.
export function resolveMilestones(today: string): ResolvedMilestone[] {
  let hasCurrent = false;
  return milestones.map((m) => {
    const status: MilestoneStatus =
      m.status ?? (m.end < today ? "completed" : hasCurrent ? "upcoming" : "current");
    if (status === "current") hasCurrent = true;
    return { ...m, status };
  });
}

export const downloads: DownloadItem[] = [
  {
    title: "Project Proposal",
    description: "The individual proposal report for each of the four components, submitted in March 2026.",
    category: "Document",
    file: "",
    available: true,
    files: [
      { label: "Santhosh S · IT22113740", file: "/documents/proposal-IT22113740-santhosh.docx" },
      { label: "Bandara H.M.N.T · IT22251664", file: "/documents/proposal-IT22251664-bandara.pdf" },
      { label: "Kajanthan U · IT22224002", file: "/documents/proposal-IT22224002-kajanthan.pdf" },
      { label: "Methmi N P C S · IT22188618", file: "/documents/proposal-IT22188618-methmi.pdf" },
    ],
  },
  {
    title: "Topic Assessment Form",
    description: "The approved Topic Assessment Form (TAF) for the research topic, submitted in January 2026.",
    category: "Document",
    file: "/documents/taf.pdf",
    available: true,
  },
  {
    title: "Proposal Presentation",
    description: "Slides from the proposal presentation.",
    category: "Presentation",
    file: "/documents/proposal-presentation.pptx",
    available: true,
  },
  {
    title: "Progress Presentation 1",
    description: "Slides from the first progress presentation.",
    category: "Presentation",
    file: "/documents/pp1-presentation.pptx",
    available: true,
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
    name: "Ms. Karthiga Rajendran",
    role: "Supervisor",
    title: "Lecturer",
    department: "Department of Software Engineering, Faculty of Computing",
    email: "karthiga.r@sliit.lk",
    linkedin: "",
    image: "/images/team/karthiga-rajendran.jpg",
    interests: ["Machine learning & AI", "Software engineering", "ICT for development", "e-Learning", "HCI"],
  },
  {
    name: "Ms. Thilini Jayalath",
    role: "Co-Supervisor",
    title: "Senior Lecturer",
    department: "Department of Software Engineering, Faculty of Computing",
    email: "thilini.j@sliit.lk",
    linkedin: "",
    image: "/images/team/thilini-jayalath.jpg",
    interests: ["Software complexity metrics", "Machine learning", "ICT for development", "e-Learning", "HCI"],
  },
];

// Photos live in public/images/team/<student ID>.jpg (square, head and shoulders).
const memberPhotos: Record<string, string> = {
  IT22113740: "/images/team/IT22113740.jpg",
  IT22251664: "/images/team/IT22251664.jpg",
  IT22224002: "/images/team/IT22224002.jpg",
  IT22188618: "/images/team/IT22188618.jpg",
};

export const members: Person[] = components.map((c) => ({
  name: c.owner,
  role: c.ownerId === site.leaderId ? "Group Leader" : "Team Member",
  title: `${c.ownerId} · BSc (Hons) IT, Software Engineering`,
  email: `${c.ownerId.toLowerCase()}@my.sliit.lk`,
  linkedin: "",
  image: memberPhotos[c.ownerId],
  component: c.title,
}));

export const achievements: Achievement[] = [];

export const contact = {
  email: "kajanthan2k1@gmail.com",
  phone: "",
  address: "SLIIT, New Kandy Road, Malabe, Sri Lanka",
  mapQuery: "Sri Lanka Institute of Information Technology, Malabe",
};
