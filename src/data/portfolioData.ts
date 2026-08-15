import { Project, ResearchItem, ExperienceItem, ProgramItem, SkillCategory, JourneyMilestone } from '../types';

export const PERSONAL_INFO = {
  name: 'Naipunya Addula',
  location: 'India',
  tagline: 'Software Engineer • AIML Student • Builder',
  intro:
    "I'm a second-year AIML undergraduate who learns by building — turning ideas into software, exploring AI systems, solving problems, and figuring things out one project (and bug) at a time.",
  education: {
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'Kakatiya Institute of Technology and Sciences for Women (KITW)',
    expectedYear: 'Expected 2029',
    cgpa: '8.7 / 10',
  },
  github: 'https://github.com/Naipunya956',
  linkedin: 'https://www.linkedin.com/in/naipunya-addula-669606369',
  email: 'naipunyaaddula@gmail.com',
  characteristics: [
    { title: 'Problem Solver', desc: 'Approaches engineering challenges by breaking complex mechanics into modular components.' },
    { title: 'Quick Learner', desc: 'Adapts swiftly to new stacks, LLM frameworks, Python engines, and system paradigms.' },
    { title: 'Detail Oriented', desc: 'Obsesses over clean code structure, responsive interactions, and reliable error handling.' },
    { title: 'Team Player', desc: 'Active community leader, workshop organizer, and collaborative hackathon contributor.' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'pocket-cheerleader',
    title: 'Pocket Cheerleader',
    tagline: 'AI-powered conversational wellness & affirmation platform',
    description:
      'An AI-powered conversational application combining mood detection, personalized responses, mood tracking, affirmation generation, and interactive self-care features.',
    highlights: [
      'Engineered intelligent sentiment and mood-context detection with dynamic prompt synthesis',
      'Built interactive daily mood tracking logs with client-side state preservation',
      'Integrated Google Gemini API via custom backend service handlers for streaming affirmation flows',
      'Designed responsive, soothing UI using Tailwind CSS and Vite'
    ],
    tech: ['React', 'TypeScript', 'Express', 'Gemini API', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Naipunya956/Pocket_Cheerleader',
    status: 'Completed',
    accentColor: '#D9777F',
    category: 'AI / Full Stack',
  },
  {
    id: 'pycraft',
    title: 'PyCraft',
    tagline: 'First-person procedural 3D voxel sandbox in Python',
    description:
      'A first-person sandbox game built in Python featuring procedural terrain, block interaction, physics, collision detection and world interaction.',
    highlights: [
      'Implemented real-time 3D voxel generation and procedural terrain rendering using Ursina engine',
      'Developed custom physics engine for gravity, raycasted block placement, and voxel destruction',
      'Engineered spatial collision detection bounding boxes for fluid player navigation',
      'Optimized mesh rendering loops for steady 60 FPS performance on standard hardware'
    ],
    tech: ['Python', 'Ursina Engine', '3D Graphics', 'Procedural Generation', 'Physics Engine'],
    githubUrl: 'https://github.com/Naipunya956/PyCraft',
    status: 'Completed',
    accentColor: '#8DA385',
    category: 'Game Dev / Python',
  },
  {
    id: 'terminal-ai-helper',
    title: 'Terminal AI Helper',
    tagline: 'Natural-language CLI companion with safety confirmation safeguards',
    description:
      'An AI developer tool that translates natural-language requests into terminal commands and requires human confirmation before execution.',
    highlights: [
      'Translates ambiguous terminal intent (e.g. "find all loose log files over 50MB") into precise shell scripts',
      'Built human-in-the-loop validation barrier preventing destructive or irreversible commands',
      'Integrated system context parsing to tailor syntax between bash, zsh, and PowerShell environments',
      'Lightweight CLI interface designed for zero latency and minimal dependencies'
    ],
    tech: ['Python', 'AI Agents', 'Developer Tools', 'CLI Architecture', 'Shell Scripting'],
    githubUrl: 'https://github.com/Naipunya956',
    status: 'Completed',
    accentColor: '#8B6858',
    category: 'Developer Tools',
  },
  {
    id: 'pingme',
    title: 'PingMe',
    tagline: 'Centralized academic announcements & deadline tracker for students',
    description:
      'A student-focused platform designed to centralize announcements, deadlines and important updates in one distraction-free interface.',
    highlights: [
      'Unified multi-channel campus updates, assignment cutoffs, and exam schedules',
      'Categorized feeds by urgency, department, and course semester',
      'Clean priority notifications avoiding email clutter for student peers',
      'Responsive mobile-first layout with high contrast readability'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Naipunya956',
    status: 'Active',
    accentColor: '#C86D74',
    category: 'Web Platform',
  },
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: 'ai-context-memory',
    title: 'How AI Chatbots Remember Context?',
    type: 'Research Paper',
    doi: '10.5281/zenodo.21757843',
    doiUrl: 'https://doi.org/10.5281/zenodo.21757843',
    date: '2026',
    summary:
      'An exploration into how modern Transformer architectures, sliding attention windows, KV-caching, and retrieval augmentation maintain coherent multi-turn conversational dialogue.',
    keyInsights: [
      'Analyzes attention degradation in long-horizon LLM context windows',
      'Investigates KV-cache compression and dynamic state eviction mechanisms',
      'Compares vector retrieval grounding vs. native in-context memory retention',
      'Published on Zenodo open research repository (DOI: 10.5281/zenodo.21757843)'
    ],
    tags: ['Transformer Architecture', 'Attention Mechanisms', 'KV Cache', 'Conversational AI'],
  },
  {
    id: 'constraints-creativity',
    title: 'Can Constraints Increase Creativity More Than Freedom?',
    type: 'Research Paper',
    doi: '10.5281/zenodo.19649379',
    doiUrl: 'https://doi.org/10.5281/zenodo.19649379',
    date: '2026',
    summary:
      'A technical and cognitive inquiry into how architectural constraints (tight token limits, memory bounds, strictly typed interfaces) spur higher-order innovation in software design and algorithmic problem solving.',
    keyInsights: [
      'Examines the paradox of infinite choice vs. bounding boxes in software engineering',
      'Case studies in retro game optimization, 64k demos, and constrained LLM agent loops',
      'Demonstrates why strict type-safety and constrained APIs accelerate developer speed',
      'Published on Zenodo open research repository (DOI: 10.5281/zenodo.19649379)'
    ],
    tags: ['Software Architecture', 'Developer Psychology', 'System Design', 'Algorithmic Optimization'],
  },
  {
    id: 'pedro-domingos-reflection',
    title: 'Reflection on "A Few Useful Things to Know About Machine Learning" by Pedro Domingos',
    type: 'Research Paper',
    doi: '10.5281/zenodo.16963924',
    doiUrl: 'https://doi.org/10.5281/zenodo.16963924',
    date: 'August 2025',
    summary:
      'A detailed student review reflecting on Pedro Domingos\' seminal paper — breaking down inductive bias, overfitting hazards, the curse of dimensionality, and why feature engineering remains a core superpower in modern applied AIML.',
    keyInsights: [
      'Deep dive into Domingos\' 12 golden machine learning heuristics',
      'Deconstructing why data distribution shifts silently break production models',
      'Practical takeaways for building robust, generalizable student AIML pipelines',
      'Published on Zenodo open research repository (DOI: 10.5281/zenodo.16963924)'
    ],
    tags: ['Machine Learning Theory', 'Pedro Domingos', 'Inductive Bias', 'Generalization'],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'aws-student-builder',
    role: 'Content & Operations Lead',
    organization: 'AWS Student Builder Group — KITW',
    period: '2026–Present',
    location: 'KITW, India',
    description:
      'Help organize AWS-focused technical workshops and student initiatives, coordinating communication, registrations, logistics, technical content and student engagement.',
    keyContributions: [
      'Lead technical curriculum drafting for hands-on student workshops covering AWS cloud primitives, compute, and serverless architectures',
      'Coordinate end-to-end operations, attendee registrations, and interactive coding labs for peer engineering students',
      'Mentor fellow students in understanding cloud concepts, IAM permissions, and deployment workflows',
      'Foster an active builder culture focused on turning student ideas into cloud-hosted applications'
    ],
    focusAreas: ['Technical Workshops', 'AWS Cloud', 'AI/ML Primitives', 'Developer Tools', 'Community Building', 'Collaboration'],
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'mlh-gwh',
    name: 'Major League Hacking (MLH) Global Hack Week',
    category: 'Global Initiative',
    description:
      'Participated in intensive worldwide hacker challenges, building and shipping fast prototypes, collaborating with global peers, and expanding core CS knowledge.',
    badgeText: 'MLH Global Hacker',
    accent: '#D9777F',
  },
  {
    id: 'girls-who-yap',
    name: 'Girls Who Yap Fellowship',
    category: 'Fellowship',
    description:
      'Selected fellow engaged in collaborative technical sessions, peer mentorship, community discussions, and leadership development for women in engineering.',
    badgeText: 'Fellow',
    accent: '#8DA385',
  },
  {
    id: 'vision-hack',
    name: 'Vision Hack',
    category: 'Hackathon',
    description:
      'Engineered computer vision and multimodal intelligence prototypes within a high-tempo sprint, experimenting with visual feature extraction.',
    badgeText: 'Hackathon Builder',
    accent: '#8B6858',
  },
  {
    id: 'genai-exchange',
    name: 'GenAI Exchange Hackathon',
    category: 'Hackathon',
    description:
      'Explored generative AI models, agentic workflows, prompt-chaining, and full-stack application prototyping alongside visionary builders.',
    badgeText: 'GenAI Builder',
    accent: '#C86D74',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    color: '#D9777F',
    skills: ['Python', 'C', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Web & Full Stack',
    iconName: 'Layout',
    color: '#8DA385',
    skills: ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Developer Tools & Cloud',
    iconName: 'Terminal',
    color: '#8B6858',
    skills: ['Git', 'GitHub', 'AWS', 'Supabase', 'Vercel', 'Jupyter', 'Google Colab', 'VS Code'],
  },
  {
    title: 'Core Computer Science',
    iconName: 'Binary',
    color: '#6E4F42',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'REST APIs', 'Database Fundamentals'],
  },
  {
    title: 'AI & Machine Learning',
    iconName: 'Sparkles',
    color: '#C86D74',
    skills: ['Machine Learning Fundamentals', 'AI Agents', 'Computer Vision Fundamentals', 'LLM Context Retention'],
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: '2025',
    title: 'Started B.Tech in AIML at KITW',
    subtitle: 'Foundation in Computer Science & Logic',
    description: 'Began university journey with strong enthusiasm for algorithms, data structures, and mathematical foundations of AI. Maintained an 8.7 / 10 CGPA.',
    type: 'milestone',
    icon: 'GraduationCap',
  },
  {
    year: '2025',
    title: 'Girls Who Yap Fellowship',
    subtitle: 'Peer Mentorship & Engineering Community',
    description: 'Joined a vibrant community of female builders, diving into collaborative discussions, technical writing, and shared problem-solving.',
    type: 'fellowship',
    icon: 'Users',
  },
  {
    year: '2025',
    title: 'Hackathon Sprints: Vision Hack & GenAI Exchange',
    subtitle: 'Rapid Prototyping & Generative AI Systems',
    description: 'Built hands-on multimodal prototypes, agentic workflows, and game mechanics under tight deadlines, validating ideas through working code.',
    type: 'hackathon',
    icon: 'Zap',
  },
  {
    year: '2026',
    title: 'Published Research Papers on Zenodo',
    subtitle: 'DOIs: 10.5281/zenodo.21757843 · 10.5281/zenodo.19649379 · 10.5281/zenodo.16963924',
    description: 'Researched conversational memory retention, constraints in creative engineering, and machine learning heuristics on Zenodo open research repository.',
    type: 'milestone',
    icon: 'BookOpen',
  },
  {
    year: '2026',
    title: 'MLH Global Hack Week & AWS Student Builder Group',
    subtitle: 'Content & Operations Lead & Global Hacker',
    description: 'Organizing cloud & AI workshops at KITW while actively collaborating with international hackers through Major League Hacking initiatives.',
    type: 'leadership',
    icon: 'Rocket',
  },
  {
    year: 'Current & Future',
    title: 'Always Building, Always Learning',
    subtitle: 'Targeting MLH Fellowship & Open Source Impact',
    description: 'Expanding deep software engineering practices, exploring production-grade AI agents, and learning one project and bug at a time.',
    type: 'milestone',
    icon: 'Sparkles',
  },
];
