/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Utkarsh Prakash',
  displayName: 'Utkarsh Prakash',
  firstName: 'UTKARSH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN UTKARSH ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'ML', 'DL'],
  intro:
    'A B.Tech Artificial Intelligence & Machine Learning student (CGPA 8.2) and full-stack developer building AI-powered platforms, payment systems and multi-tenant SaaS with  Python, React, Node.js and Docker.',
  location: 'Lucknow, Uttar Pradesh',
  email: 'utkarshprakash081105@gmail.com',
  links: {
    linkedin: '',
    github: '',
  },
  resumePdf: '/assets/utkarsh-4.pdf',
  portrait: {
    src: '/assets/portrait-1110.webp',
    srcSet: '/assets/portrait-1100.webp 420w, /assets/portrait-1100.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Utkarsh',
  },
  interests: ['Backend Design', 'Machine Learning'],
};

export const education = [
  {
    school: 'BBDITM',
    place: 'Lucknow',
    degree: 'Bachelor of Technology — Artificial Intelligence and Machine Learning',
    period: 'October 2023 – Present',
    score: 'CGPA 8.2',
  },
  {
    school: 'Bradford International School',
    place: 'Patna',
    degree: 'CBSE',
    period: 'June 2020 – May 2022',
    score: 'Score 400/500',
  },
];

export const experience = [
  {
  company: 'GRAS Tech — Industrial Training',
  role: 'Machine Learning Trainee',
  place: 'Lucknow, UP',
  period: 'May 2026 – June 2026',
  points: [
    'Completed industrial training in Machine Learning using Python, covering data preprocessing, feature engineering, and exploratory data analysis (EDA).',
    'Studied supervised and unsupervised learning techniques and explored deep learning fundamentals using TensorFlow and Keras.',
    'Learned model evaluation using Precision, Recall, F1-Score, ROC-AUC, and Silhouette Score.',
  ],
},
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'Astra',
    title: 'Astra ',
    year: '2026',
    genre: 'Full-Stack • Payments • Real-Time',
    logline: 'An appointment-booking platform combining payment verification, slot reservations, and real-time video consultations.',
    stack: ['React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma ORM',
      'Tailwind CSS',
      'REST APIs',
      'WebRTC',
      'Socket.IO',
      'Razorpay'],
    build: [
    'Built an end-to-end appointment booking and payment workflow covering slot reservation, Razorpay payment verification, booking confirmation, and failure/expiry handling to maintain booking consistency under concurrent requests.',
      'Developed modular REST APIs for authentication, bookings, payments, and consultations using Node.js and Express, with PostgreSQL and Prisma ORM for type-safe queries and migrations.',
      'Implemented real-time video consultations using WebRTC and Socket.IO, alongside backend-triggered automated report generation and notifications  '
    ],
    features: [
      'Appointment booking and slot reservation',
      'Razorpay payment verification',
      'Booking confirmation and failure/expiry handling',
      'Modular REST APIs for authentication, bookings, payments, and consultations',
      'Real-time video consultations',
      'Automated report generation and notifications',
    ],
    metrics: [
      { value: '100+', label: 'Customer Served' },
      { value: '92%', label: 'Satisfaction' },
      { value: '60%', label: 'less manual review time' },
      { value: '45%', label: 'faster decision turnaround' },
      { value: '22', label: 'Service categories' },
    ],
    // The resume links to https://github.com/Sushmitadasari/PolicyGuard-AI, which is not public yet (404).
    // Add `github: 'https://github.com/Sushmitadasari/PolicyGuard-AI',` back once the repo is public.
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'placement-portal',
    title: 'Placement Portal',
    year: '2026',
    genre: 'Backend • Full-Stack • Async Processing',
    logline: 'A multi-role placement platform for students, recruiters, and administrators, with caching and asynchronous background jobs.',
    stack: ['Python',
      'Flask',
      'Vue.js',
      'PostgreSQL',
      'SQLAlchemy',
      'Redis',
      'Celery',
      'Bootstrap',
      'REST APIs',],
    build: [
      'Designed REST APIs for a multi-role platform covering job postings, applications, and eligibility workflows, backed by a PostgreSQL schema managed with SQLAlchemy.',
      'Integrated Redis for caching and Celery for asynchronous background job processing to reduce load on synchronous request paths and improve responsiveness for resource-intensive operations.',
    ],
    features: [
      'Role-based workflows for students, recruiters, and administrators',
      'Job posting and application management',
      'Eligibility workflows',
      'Flask REST APIs',
      'Redis caching',
      'Celery background job processing',
      'PostgreSQL data modeling with SQLAlchemy',
    ],
    metrics: [
      { value: '100+', label: 'Users Registered' },
      { value: '98.8%', label: 'uptime' },
      { value: '70%', label: 'less deployment ecosystem' },
      { value: '40%', label: 'faster API response' },
      { value: '3×', label: 'throughput under load' },
    ],
    // github: 'https://github.com/Sushmitadasari/Payment-gateway-system-Project',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'web-ai-builder',
    title: 'WebAiBuilder',
    year: '2026',
    genre: 'Generative AI • Full-Stack • Developer Tools',
    logline:
      'An AI-powered website generator that transforms natural-language prompts into React project scaffolds.',
    stack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'OpenRouter API',
      'JavaScript',
      'REST APIs',
    ],
    build: [
      'Built the backend for an AI-powered website generator that transforms natural-language prompts into React project scaffolds using the OpenRouter API, including an iterative pipeline for AI-driven code changes.',
      'Engineered supporting API endpoints for live preview, manual code editing, and project export and publishing.',
    ],
    features: [
      'Natural-language prompts to React project scaffolds',
      'OpenRouter API integration',
      'Iterative AI-driven code updates',
      'Live preview API endpoints',
      'Manual code editing',
      'Project export and publishing',
    ],
    metrics: [
      { value: '10+', label: 'concurrent building' },
      { value: '200+', label: 'users' },
      { value: '0', label: 'unauthorized-access incidents' },
      { value: '45m → <2m', label: 'environment setup time' },
    ],
    github: 'https://github.com/Sushmitadasari/Multi-Tenant-SaaS-Platform',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
 
  {
    id: 'gate-2025',
    title: 'GATE 2025 Qualified',
    org: 'GATE',
    detail:
      'Qualified GATE 2025, demonstrating knowledge of core Computer Science subjects including Operating Systems, DBMS, Computer Networks, and Data Structures and Algorithms.',
    laurel: 'National Examination',
  },
  
  {
    id: 'hcl-amplified',
    title: 'National Rank 52',
    org: 'HCL Amplified Hackathon',
    detail:
      'Achieved National Rank 52 in the HCL Amplified Hackathon.',
    laurel: 'Hackathon Achievement',
  },
   {
    id: 'leetcode',
    title: '100+ Problems Solved',
    org: 'LeetCode',
    detail:
      'Solved 100+ DSA problems, demonstrating proficiency in algorithms, data structures, and problem-solving.',
    laurel: 'Problem Solving',
    
  },
  {
    id: 'weekly-contest-464',
    title: 'Global Rank Under 8K',
    org: 'LeetCode Weekly Contest 464',
    detail:
      'Secured a global rank under 8,000 in LeetCode Weekly Contest 464.',
    laurel: 'Competitive Programming',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'LeetCode',
    name: '50 Days Badge',
    link: '',
  },
  {
    issuer: 'LeetCode',
    name: 'Contest Rank:Under 8k WorldWide',
    link: '',
  },
  {
    issuer: 'LeetCode',
    name: 'Contest Rating: 1,556',
    link: '',
  },
  {
    issuer: 'LeetCode',
    name: 'Global Rank: Top 15%',
    link: '',
  },
  {
issuer: 'GrassTech',
    name: 'Summer Internship: Machiene Learing ',
    link: '',
  }
];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'C++ is the primary language',
    skills: [
      { name: 'C++', mono: 'C+', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Building modern web interfaces',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Vue.js', mono: 'Vu' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Bootstrap', mono: 'Bs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs & server-side development',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'infra',
    title: 'Tools & Platforms',
    subtitle: 'Development, deployment & real-time systems',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Vercel', mono: 'Ve' },
      { name: 'Render', mono: 'Rn' },
      { name: 'CI/CD', mono: 'Ci' },
      { name: 'WebRTC', mono: 'Wr' },
      { name: 'Socket.IO', mono: 'So' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Caching',
    subtitle: 'Data modeling, storage & performance',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'SQLite', mono: 'Sq' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Redis', mono: 'Rd' },
    ],
  },
  {
  id: 'ai',
  title: 'Machine Learning & AI',
  subtitle: 'From mathematical foundations to intelligent systems',
  skills: [
    {
      name: 'Mathematics & Statistics',
      mono: '01',
      note: 'Probability, descriptive and inferential statistics, distributions, hypothesis testing, linear algebra, and calculus',
    },
    {
      name: 'Data Analysis & Preparation',
      mono: '02',
      note: 'Data cleaning, exploratory data analysis, feature engineering, preprocessing, scaling, and encoding',
    },
    {
      name: 'Supervised Learning',
      mono: '03',
      note: 'Linear and logistic regression, KNN, Naive Bayes, decision trees, random forests, SVM, and ensemble methods',
    },
    {
      name: 'Unsupervised Learning',
      mono: '04',
      note: 'K-means clustering, hierarchical clustering, DBSCAN, PCA, and dimensionality reduction',
    },
    {
      name: 'Model Optimization & Evaluation',
      mono: '05',
      note: 'Loss functions, regularization, cross-validation, bias–variance trade-off, hyperparameter tuning, and evaluation metrics',
    },
    {
      name: 'Deep Learning',
      mono: '06',
      note: 'Neural networks, activation functions, forward propagation, backpropagation, gradient descent, and optimization',
    },
    {
      name: 'Advanced Neural Architectures',
      mono: '07',
      note: 'Convolutional neural networks, recurrent neural networks, LSTMs, attention mechanisms, and transformers',
    },
    {
      name: 'NLP & Generative AI',
      mono: '08',
      note: 'Text processing, embeddings, large language models, semantic search, retrieval-augmented generation, and AI agent workflows',
    },
  ],
},
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core concepts for software engineering',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'System Design', mono: 'Sd' },
    ],
  },
];
/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  // Programming Languages
  'C++': ['LeetCode — 100+ DSA problems'],
  Python: ['Placement Portal', 'AI/ML workflows'],
  JavaScript: ['Astra', 'WebAiBuilder'],

  // Frontend
  'React.js': ['Astra', 'WebAiBuilder'],
  'Next.js': ['Web Development'],
  'Vue.js': ['Placement Portal'],
  HTML: ['Web Development'],
  CSS: ['Web Development'],
  'Tailwind CSS': ['Astra'],
  Bootstrap: ['Placement Portal'],

  // Backend
  'Node.js': ['Astra', 'WebAiBuilder'],
  'Express.js': ['Astra', 'WebAiBuilder'],
  Flask: ['Placement Portal'],
  'REST APIs': ['Astra', 'Placement Portal', 'WebAiBuilder'],

  // Tools & Platforms
  'Git / GitHub': ['Project version control'],
  Postman: ['API development and testing'],
  Docker: ['Development and deployment'],
  Vercel: ['Astra deployment'],
  Render: ['Application deployment'],
  'CI/CD': ['Development and deployment workflows'],
  WebRTC: ['Astra — real-time video consultations'],
  'Socket.IO': ['Astra — real-time communication'],

  // Databases & Caching
  PostgreSQL: ['Astra', 'Placement Portal'],
  MySQL: ['Database fundamentals'],
  SQLite: ['Vehicle Parking System'],
  MongoDB: ['WebAiBuilder'],
  Redis: ['Placement Portal — caching'],

  
  // CS Fundamentals
  DSA: ['100+ LeetCode problems', 'GATE 2025 qualified'],
  OOPs: ['Core Computer Science fundamentals'],
  DBMS: ['GATE 2025 preparation'],
  'Operating Systems': ['GATE 2025 preparation'],
  'Computer Networks': ['GATE 2025 preparation'],
  'System Design': ['Backend architecture and REST API design'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2020 – 2022',
    synopsis: 'Intermediate years at Bradford International School, Patna — Mathematics, Physics and Chemistry.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'CBSE, PCM at Bradford International School, Patna — finishing with a score of 400/500.',
        tags: ['PCM', 'CBSE'],
        runtime: 'Jun 2020 – March 2022',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2023 – Present',
    synopsis: 'B.Tech in Artificial Intelligence and Machine Learning at BBDITM, Lucknow.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Artificial Intelligence and Machine Learning — CGPA 8.2.',
        tags: ['B.Tech', 'AI & ML', 'CGPA 8.20'],
        runtime: 'Oct 2023 – Present',
        palette: violet,
      },
      
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description: 'LeetCode 100+ (peak 1502)',
        tags: ['DSA', 'LeetCode'],
        runtime: '150+ problems',
        palette: jade,
      },
    ],
  },
  {
  number: 3,
  title: 'Exploring Data & Machine Learning',
  period: '2025 – 2026',
  synopsis:
    'From data analysis and classical machine learning to NLP applications and predictive systems.',
  episodes: [
    {
      code: 'S03 E01',
      title: 'The Data Explorer',
      description:
        'Worked with structured datasets to explore patterns, prepare data, and build predictive applications for employee salary, car prices, and business profit categories.',
      tags: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
      runtime: 'Data Analysis & Preparation',
      palette: ocean,
    },
    {
      code: 'S03 E02',
      title: 'The Model Trainer',
      description:
        'Built machine-learning applications for car-price prediction using XGBoost, employee attrition prediction, salary estimation, and profit-category classification.',
      tags: ['Scikit-learn', 'XGBoost', 'Classification', 'Regression'],
      runtime: 'Machine Learning',
      palette: violet,
    },
    {
      code: 'S03 E03',
      title: 'The Language & AI Builder',
      description:
        'Developed a cyberbullying detection application using NLP preprocessing and TF-IDF, and built Sequentia, an AI-powered system for personalized career-learning plans using semantic retrieval and LLM-based planning.',
      tags: ['NLP', 'TF-IDF', 'FastAPI', 'LLM'],
      runtime: 'Intelligent Applications',
      palette: jade,
    },
  ],
},
  {
  number: 4,
  title: 'Engineering Intelligent Systems',
  period: '2026',
  synopsis:
    'Three projects exploring appointment and payment workflows, asynchronous backend systems, and AI-powered website generation.',
  episodes: [
    {
      code: 'S04 E01',
      title: 'The Product Engineer',
      description:
        'Astra — an appointment-booking platform with slot reservations, Razorpay payment verification, booking lifecycle handling, and real-time video consultations.',
      tags: ['Astra', 'Node.js', 'PostgreSQL', 'Prisma', 'WebRTC'],
      runtime: 'Jun – Jul 2026',
      palette: crimson,
    },
    {
      code: 'S04 E02',
      title: 'The Backend Architect',
      description:
        'Placement Portal — a multi-role platform with Flask REST APIs, PostgreSQL data modeling, Redis caching, and Celery-based background processing.',
      tags: ['Flask', 'PostgreSQL', 'Redis', 'Celery'],
      runtime: 'Jun – Jul 2026',
      palette: amber,
    },
    {
      code: 'S04 E03',
      title: 'The AI Builder',
      description:
        'WebAiBuilder — an AI-powered website generator that converts natural-language prompts into React project scaffolds using OpenRouter, with iterative updates and project export.',
      tags: ['React', 'Node.js', 'OpenRouter', 'LLM Integration'],
      runtime: 'AI Application Development',
      palette: ocean,
    },
  ],
},
 {
  number: 5,
  title: 'The Next Evolution',
  period: 'Now streaming',
  synopsis:
    'Moving beyond individual applications toward scalable systems, deeper machine learning, and production-ready AI engineering.',
  episodes: [
    {
      code: 'S05 E01',
      title: 'The Systems Thinker',
      description:
        'Exploring system design concepts such as scalability, caching, load balancing, database design, asynchronous processing, and reliable backend architecture.',
      tags: ['System Design', 'Scalability', 'Backend Architecture'],
      runtime: 'In progress',
      palette: violet,
    },
    {
      code: 'S05 E02',
      title: 'The Cloud Explorer',
      description:
        'Building a stronger foundation in cloud infrastructure, deployment, containerization, and production operations to take applications from development to reliable services.',
      tags: ['AWS', 'Docker', 'Deployment', 'CI/CD'],
      runtime: 'Next learning arc',
      palette: ocean,
    },
    {
      code: 'S05 E03',
      title: 'The AI Engineer',
      description:
        'Deepening machine-learning knowledge from statistical foundations and classical algorithms to deep learning, NLP, semantic retrieval, and LLM-powered applications.',
      tags: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs'],
      runtime: 'Continuously evolving',
      palette: jade,
    },
  ],
},
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Primary language',
    title: 'C++',
    detail: 'Data structures, algorithms, and competitive problem-solving',
    palette: amber,
  },
  {
    label: 'The AI System',
    title: 'Sequentia',
    detail: 'Personalized career learning with semantic retrieval and LLM-based planning',
    palette: crimson,
  },
  {
    label: 'NLP Project',
    title: 'Cyberbullying Detection',
    detail: 'Text preprocessing, TF-IDF, and machine-learning classification',
    palette: ocean,
  },
  {
    label: 'Predictive ML',
    title: 'Car Price Prediction',
    detail: 'XGBoost regression with a Streamlit interface',
    palette: violet,
  },
  {
    label: 'Employee Analytics',
    title: 'Attrition Prediction',
    detail: 'Machine learning classification with prediction probabilities',
    palette: jade,
  },
  {
    label: 'Backend Engineering',
    title: 'REST APIs',
    detail: 'Node.js, Express, Flask, and FastAPI',
    palette: amber,
  },
  {
    label: 'Problem Solving',
    title: '100+ Problems',
    detail: 'LeetCode practice across data structures and algorithms',
    palette: crimson,
  },
  {
    label: 'Full-Stack Project',
    title: 'Astra',
    detail: 'Appointment booking, Razorpay payments, and real-time consultations',
    palette: ocean,
  },
  {
    label: 'Data & Infrastructure',
    title: 'Database Systems',
    detail: 'PostgreSQL, MongoDB, Redis, and relational data modeling',
    palette: jade,
  },
  {
    label: 'Current focus',
    title: 'System Design & AI',
    detail: 'Scalable backend architecture, cloud fundamentals, and deeper ML',
    palette: violet,
  },
];
/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science',
    lines: ['BBDITM, Lucknow', 'October 2023 – Present'],
    chips: ['CGPA 8.2'],
  },
  {
    kicker: 'Skills',
    title: 'C++ first.',
    lines: [
      'C++, Python, JavaScript · React, Node.js, Express.js, Flask',
      'PostgreSQL, MongoDB, Redis · REST APIs, Docker, FastAPI',
    ],
    chips: ['C++', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Machine Learning'],
  },
  {
    kicker: 'Projects',
    title: 'Building Real Systems',
    lines: [
      'Astra — appointment booking, Razorpay payments, and real-time consultations',
      'Placement Portal — Flask APIs, PostgreSQL, Redis caching, and Celery',
      'Sequentia — personalized career-learning plans with semantic retrieval and LLMs',
    ],
  },
  {
    kicker: 'Machine Learning',
    title: 'From Data to Predictions',
    lines: [
      'Car price prediction using XGBoost regression',
      'Employee attrition, salary, and profit-category prediction',
      'Cyberbullying detection using NLP preprocessing and TF-IDF',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Consistency & Problem Solving',
    lines: [
      '400+ problems solved on LeetCode',
      'Qualified GATE 2025',
      'Continually building skills through projects and algorithm practice',
    ],
  },
  {
    kicker: 'Core Foundations',
    title: 'Engineering Fundamentals',
    lines: [
      'Data Structures & Algorithms · Object-Oriented Programming',
      'DBMS · Operating Systems · Computer Networks',
      'Backend APIs · Database Design · AI/ML Fundamentals',
    ],
    chips: ['DSA', 'DBMS', 'OS', 'Computer Networks'],
  },
  {
    kicker: 'Current Mission',
    title: 'Engineering What’s Next',
    lines: [
      'System Design · Scalable Backend Architecture',
      'Cloud Computing · Docker · Deployment',
      'Machine Learning · Deep Learning · LLM-powered applications',
    ],
  },
];
export type ProfileId = 'utkarsh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'utkarsh',
    name: 'Utkarsh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
