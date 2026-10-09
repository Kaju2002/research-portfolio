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
  // Percentage of the final module mark, from the module outline.
  marks?: number;
  // Only set this to override the date-based status, e.g. when a milestone is postponed.
  status?: MilestoneStatus;
};

export type Assessment = { name: string; weight: number; outcomes: string };

export type Study = { authors: string; contribution: string; limitation: string };

export type LiteratureReview = {
  componentId: string;
  overview: string;
  studies: Study[];
  gap: string;
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
  { href: "/domain", label: "Domain" },
  { href: "/milestones", label: "Milestones" },
  { href: "/documents", label: "Documents" },
  { href: "/presentations", label: "Presentations" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
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

// Use the OneDrive "Share" link (view only), not the address copied from the browser bar.
export const demo = {
  url: "https://mysliit-my.sharepoint.com/my?id=%2Fpersonal%2Fit22224002%5Fmy%5Fsliit%5Flk%2FDocuments%2FResearch%20Demo",
  description:
    "Watch the complete system in action: demonstration videos of the mobile app and the web platform, together with the slides explaining the idea behind the system.",
  contents: ["Mobile app demo video", "Web platform demo video", "System overview slides"],
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
        { layer: "App & infrastructure", items: ["FastAPI", "React Native", "MongoDB Atlas"] },
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
        { layer: "Model", items: ["Python", "Scikit-learn"] },
        { layer: "App & infrastructure", items: ["FastAPI", "MongoDB Atlas"] },
      ],
    },
  },
];

// Summarised from the literature review of each member's proposal report.
export const literature: LiteratureReview[] = [
  {
    componentId: "fake-job-post-detection",
    overview:
      "Earlier work treats fake job detection as an English-only, real-or-fake classification problem. Most studies use the EMSCAD dataset with machine learning or deep learning classifiers and report accuracy above 94%, but very few are deployed, and almost none explain their predictions or give users a graded risk level.",
    studies: [
      {
        authors: "Dutta & Bandyopadhyay (2020)",
        contribution: "Compared seven ML classifiers on EMSCAD; Random Forest reached 98.27% accuracy.",
        limitation: "Little NLP beyond basic features and no handling of class imbalance.",
      },
      {
        authors: "Pillai (2023)",
        contribution: "Bidirectional LSTM with word embeddings, reaching 98.71% accuracy.",
        limitation: "No interpretability and no risk levels for end users.",
      },
      {
        authors: "Allam et al. (2025)",
        contribution: "Tested six class-balancing strategies across four classifiers.",
        limitation: "Research prototype only, with no user interface or explanations.",
      },
      {
        authors: "Pangare et al. (2026)",
        contribution: "JobScamShield: ML classification plus company checks through the GST registry and Glassdoor.",
        limitation: "Works only in India and real-time API calls add latency.",
      },
      {
        authors: "Singh et al. (2025)",
        contribution: "Heuristic signals such as free email domains and scam keywords with Logistic Regression.",
        limitation: "No deep semantic understanding from transformer models.",
      },
      {
        authors: "Sathwika et al. (2024)",
        contribution: "Django web app with several ML classifiers; Logistic Regression reached 98% accuracy.",
        limitation: "English only, with no retraining pipeline or explanations for users.",
      },
    ],
    gap: "All published fake job detection research covers English only and returns a binary verdict. No study combines transformer models with SHAP/LIME explanations in this domain, and no trilingual (English, Sinhala, Tamil) dataset exists from real Sri Lankan job portals.",
  },
  {
    componentId: "employer-legitimacy-verification",
    overview:
      "Researchers have applied machine learning, NLP and data mining to detect fraudulent job postings. Most studies analyse the job advertisement itself (description, title, salary and posting attributes) with classifiers such as Random Forest, Logistic Regression and SVM, rather than the credibility of the employer behind it.",
    studies: [
      {
        authors: "Vidros et al. (2017)",
        contribution: "Introduced the public EMSCAD dataset and analysed the characteristics of fraudulent job posts.",
        limitation: "Focuses on advert content, not the legitimacy of the employer behind the post.",
      },
      {
        authors: "Alghamdi & Alharby (2019)",
        contribution: "Intelligent ML model for recruitment fraud detection using job metadata and text.",
        limitation: "Remains limited to job advertisement analysis.",
      },
      {
        authors: "Dutta & Bandyopadhyay (2020)",
        contribution: "ML classification of job text and metadata to identify fraud patterns.",
        limitation: "Employer identity and company credibility are not considered.",
      },
      {
        authors: "Allam et al. (2025)",
        contribution: "Data balancing with ML classifiers improved fake job detection accuracy.",
        limitation: "Uses advertisement data rather than employer credibility.",
      },
      {
        authors: "Singh et al. (2025)",
        contribution: "Showed the strong performance of Random Forest in detecting fake jobs.",
        limitation: "Relies heavily on textual job features.",
      },
      {
        authors: "Ansar & Hussain (2025)",
        contribution: "Survey showing how job scams reduce trust in online job platforms.",
        limitation: "Proposes no technical model for detecting fraudulent employers.",
      },
    ],
    gap: "Employer credibility indicators such as company name and website domain consistency, recruiter email alignment and profile completeness are rarely analysed, and most systems give only a binary label without explaining why an employer is suspicious.",
  },
  {
    componentId: "scam-communication-detection",
    overview:
      "Most research classifies job advertisements as fake or real, usually on the EMSCAD dataset. A second strand detects scam messages on SMS or WhatsApp with BERT-based models, and a third uses OCR to read scam text from screenshots. Behavioural studies have mapped the manipulation tactics scammers use, but these findings have not been built into an automated detector.",
    studies: [
      {
        authors: "Alghamdi & Alharby (2019)",
        contribution: "SVM and Random Forest on EMSCAD, reaching 97.41% accuracy on fake job ads.",
        limitation: "Analyses only the advert text, not recruiter–candidate conversations.",
      },
      {
        authors: "Taneja et al. (2025)",
        contribution: "Fraud-BERT, a fine-tuned transformer reaching an F1 score of 0.93 on EMSCAD.",
        limitation: "Limited to job posts; no protection once chats move to private channels.",
      },
      {
        authors: "Jain et al. (2025)",
        contribution: "BERT-based SMS smishing detection that outperformed keyword-based classifiers.",
        limitation: "Single platform only, with a binary scam or legitimate label.",
      },
      {
        authors: "Shinde et al. (2024)",
        contribution: "OCR to extract scam text from screenshots without platform API access.",
        limitation: "Traditional classifiers after OCR miss paraphrased scam expressions.",
      },
      {
        authors: "Anagha et al. (2026)",
        contribution: "Identified four job scam tactics: urgency, FOMO, sunk-cost influence and social proof.",
        limitation: "Purely theoretical; never built into a real-time detection system.",
      },
      {
        authors: "Tyszkiewicz & Noor (2025)",
        contribution: "SafeChat: cumulative risk scores for conversation-level scam detection on SMS.",
        limitation: "General scams on SMS only, without identifying the manipulation tactic.",
      },
    ],
    gap: "No existing system analyses the recruiter–candidate conversation where money is actually lost, or identifies which manipulation tactic is being used, across multiple platforms and in a way non-technical job seekers can understand.",
  },
  {
    componentId: "fraud-aware-job-recommendation",
    overview:
      "Job recommendation research matches job seekers to jobs by skills, experience and preferences, using collaborative, content-based and hybrid filtering. These approaches optimise relevance and accuracy but never check whether a job posting is safe, and existing risk- or trust-aware recommenders target other domains rather than recruitment fraud.",
    studies: [
      {
        authors: "Zhang et al. (2014)",
        contribution: "Job recommender using user-based and item-based collaborative filtering.",
        limitation: "Cold-start problems and no check on whether postings are legitimate.",
      },
      {
        authors: "Nadar et al.",
        contribution: "Content-based recommender matching profiles to jobs with TF-IDF and cosine similarity.",
        limitation: "Considers relevance only, not the safety of postings.",
      },
      {
        authors: "Çano & Morisio (2017)",
        contribution: "Reviewed hybrid recommenders that tackle sparsity and cold start.",
        limitation: "Focused on accuracy and ignores fraudulent job postings.",
      },
      {
        authors: "Bouneffouf (2013)",
        contribution: "DRARS, a risk-aware recommender using a contextual bandit for situational risk.",
        limitation: "General recommendation risk only, not fraud on job platforms.",
      },
      {
        authors: "Masrom et al. (2018)",
        contribution: "Trust-aware recommender using trust relationships between users.",
        limitation: "Covers trust between users, not fraudulent postings or employers.",
      },
      {
        authors: "Madanchian & Taherdoost (2020)",
        contribution: "Described TOPSIS for ranking options by distance from ideal solutions.",
        limitation: "General decision-making; not designed to include fraud risk.",
      },
    ],
    gap: "No existing system brings skill matching and multiple fraud signals (fake job, employer legitimacy and scam communication) together with a ranking method, so jobs are never ranked by both relevance and safety.",
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
    description:
      "Submission of the project proposal document. The report is marked together with the proposal presentation.",
  },
  {
    title: "Proposal Presentation",
    date: "16 – 18 March 2026",
    end: "2026-03-18",
    description:
      "Presentation of the proposed research to the panel. Marked together with the proposal report.",
    marks: 12,
  },
  {
    title: "Progress Presentation 1",
    date: "11 – 13 May 2026",
    end: "2026-05-13",
    description: "Demonstration of around 50% completion of the system.",
    marks: 15,
  },
  {
    title: "Progress Presentation 2",
    date: "31 August – 2 September 2026",
    end: "2026-09-02",
    description: "Demonstration of around 90% completion of the system.",
    marks: 18,
  },
  {
    title: "Draft Thesis & Website Submission",
    date: "11 October 2026",
    end: "2026-10-11",
    description:
      "Submission of the draft thesis and the research website. The marks shown are for the website.",
    marks: 2,
  },
  {
    title: "Final Presentation & Viva",
    date: "19 – 21 October 2026",
    end: "2026-10-21",
    description: "Final system demonstration, viva and website evaluation.",
    marks: 20,
  },
  {
    title: "Research Paper Submission",
    date: "23 October 2026",
    end: "2026-10-23",
    description: "Submission of the research paper for publication.",
    marks: 10,
  },
  {
    title: "Final Thesis Submission",
    date: "28 October 2026",
    end: "2026-10-28",
    description: "Submission of the final individual and group thesis reports.",
    marks: 19,
  },
];

// Continuous assessment breakdown from the module outline. Weights add up to 100.
export const assessments: Assessment[] = [
  { name: "Proposal Presentation & Report", weight: 12, outcomes: "LO1 – LO5" },
  { name: "Progress Presentation I", weight: 15, outcomes: "LO1 – LO5" },
  { name: "Progress Presentation II", weight: 18, outcomes: "LO1 – LO5" },
  { name: "Final Presentation and Viva", weight: 20, outcomes: "LO1 – LO5" },
  { name: "Final Report", weight: 19, outcomes: "LO1 – LO5" },
  { name: "Research Paper (published)", weight: 10, outcomes: "LO1 – LO4" },
  { name: "Website", weight: 2, outcomes: "LO4" },
  { name: "Research Logbook, Status Documents 1 & 2", weight: 4, outcomes: "LO4" },
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
    title: "Topic Assessment Form",
    description: "The approved Topic Assessment Form (TAF) for the research topic, submitted in January 2026.",
    category: "Document",
    file: "/documents/taf.pdf",
    available: true,
  },
  {
    title: "Project Charter",
    description: "The project charter defining the scope, team roles and plan of the research project.",
    category: "Document",
    file: "",
    available: false,
  },
  {
    title: "Project Proposal",
    description: "The individual proposal report for each of the four components, submitted in March 2026.",
    category: "Document",
    file: "",
    available: true,
    files: [
      { label: "Santhosh S · IT22113740", file: "/documents/proposal-IT22113740-santhosh.pdf" },
      { label: "Bandara H.M.N.T · IT22251664", file: "/documents/proposal-IT22251664-bandara.pdf" },
      { label: "Kajanthan U · IT22224002", file: "/documents/proposal-IT22224002-kajanthan.pdf" },
      { label: "Methmi N P C S · IT22188618", file: "/documents/proposal-IT22188618-methmi.pdf" },
    ],
  },
  {
    title: "Check List Documents",
    description: "The check list documents submitted throughout the project.",
    category: "Document",
    file: "",
    available: false,
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
    title: "Final Report – Individual",
    description: "The individual final report for each of the four components.",
    category: "Document",
    file: "",
    available: false,
  },
  {
    title: "Final Report – Group",
    description: "The main final report covering the complete system.",
    category: "Document",
    file: "",
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
    linkedin: "https://www.linkedin.com/in/karthiga-rajendran-6492b3171/",
    image: "/images/team/karthiga-rajendran.jpg",
    interests: ["Machine learning & AI", "Software engineering", "ICT for development", "e-Learning", "HCI"],
  },
  {
    name: "Ms. Thilini Jayalath",
    role: "Co-Supervisor",
    title: "Senior Lecturer",
    department: "Department of Software Engineering, Faculty of Computing",
    email: "thilini.j@sliit.lk",
    linkedin: "https://www.linkedin.com/in/thilini-jayalath-2815b4b0/",
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

const memberLinkedIn: Record<string, string> = {
  IT22113740: "https://www.linkedin.com/in/sirithar-santhosh-566375255/",
  IT22251664: "https://www.linkedin.com/in/nipuni-bandara-a84588277/",
  IT22224002: "https://www.linkedin.com/in/kajanthu7/",
  IT22188618: "https://www.linkedin.com/in/chethya-methmi/",
};

export const members: Person[] = components.map((c) => ({
  name: c.owner,
  role: c.ownerId === site.leaderId ? "Group Leader" : "Team Member",
  title: `${c.ownerId} · BSc (Hons) IT, Software Engineering`,
  email: `${c.ownerId.toLowerCase()}@my.sliit.lk`,
  linkedin: memberLinkedIn[c.ownerId],
  image: memberPhotos[c.ownerId],
  component: c.title,
}));

export const achievements: Achievement[] = [];

export const contact = {
  email: "kajanthan2k1@gmail.com",
  phone: "+94 76 453 9863",
  address: "SLIIT, New Kandy Road, Malabe, Sri Lanka",
  mapQuery: "Sri Lanka Institute of Information Technology, Malabe",
};
