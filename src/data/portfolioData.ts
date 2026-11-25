/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'BALAMURUGAN V',
  pageTitle: 'BALAMURUGAN V – Aspiring Python Full Stack Developer',
  role: 'ASPIRING PYTHON FULL STACK DEVELOPER',
  email: 'itsmebalamurugan07@gmail.com',
  // digits only: 7339493301
  phone: '7339493301',
  whatsappMessage: 'Hi Balamurugan, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'ASPIRING PYTHON FULL STACK DEVELOPER • PYTHON & DJANGO DEVELOPMENT',
  headline: 'BALAMURUGAN V',
  roles: ['PYTHON FULL STACK DEVELOPER', 'DJANGO DEVELOPER'] as [string, string],
  tagline:
    'Aspiring Full Stack Python Developer with knowledge in front-end and back-end technologies, interested in building real-world applications and improving skills.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.jpg',
  imageAlt: 'Portrait of BALAMURUGAN V',
  imagePosition: '69% center',
  photo: '/media/profile.png',
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'ASPIRING PYTHON FULL STACK DEVELOPER',
  redWords: ['FULL', 'STACK', 'DEVELOPER'],
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Python · Django · Full Stack Development',
  portrait: '/media/profile.png',
  portraitAlt: 'Portrait of BALAMURUGAN V',
  portraitCaption: 'Aspiring Python Full Stack Developer',
  paragraphs: [
    'Aspiring Full Stack Python Developer with knowledge in front-end and back-end technologies. Interested in building real-world web applications, improving technical skills and contributing to an organization.',
    'I have developed projects using Python and Django and gained React.js development experience through internship work.',
  ],
  technologies: [
    'Python',
    'Django',
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'React.js',
    'MySQL',
    'SQLite',
    'Git',
    'GitHub',
  ],
  focus: ['Python Development', 'Django Web Applications', 'Full Stack Development'],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/BALAMURUGAN0717' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/balamurugan-v07' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS ───────────── */
export interface SkillCard {
  name: string;
  category: string;
  level?: string;
}

export const SKILL_CARDS: SkillCard[] = [
  { name: 'Python', category: 'Backend Development' },
  { name: 'Django', category: 'Web Framework' },
  { name: 'HTML', category: 'Frontend Markup' },
  { name: 'CSS', category: 'Frontend Styling' },
  { name: 'Bootstrap', category: 'CSS Framework' },
  { name: 'JavaScript', category: 'Programming Language' },
  { name: 'React.js (Basic)', category: 'Frontend Library' },
  { name: 'MySQL', category: 'Relational Database' },
  { name: 'SQLite', category: 'Database Engine' },
  { name: 'Git', category: 'Version Control' },
  { name: 'GitHub', category: 'Code Collaboration' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ───────────── */
export const TECH_STACK: string[] = [
  'Python',
  'Django',
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'React.js',
  'MySQL',
  'SQLite',
  'Git',
  'GitHub',
  'VS Code',
];

/* ───────────── 7. PROJECTS ───────────── */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'shopkart',
    kind: 'software',
    title: 'ShopKart – E-Commerce Web Application',
    subtitle: 'Python & Django Web Application',
    category: 'Full Stack / Django',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description: 'Developed a full-stack e-commerce web application using Python and Django.',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'SQLite'],
    liveUrl: 'https://django-shopkart-okg4.vercel.app/',
  },
  {
    id: 'harry-the-chicken',
    kind: 'software',
    title: 'Harry the Chicken – E-Commerce Web Application',
    subtitle: 'Python & Django Web Application',
    category: 'Full Stack / Django',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description: 'Developed a full-stack e-commerce web application using Python and Django.',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'SQLite'],
    liveUrl: 'https://chickenproject-beige.vercel.app/',
  },
  {
    id: 'portfolio-website',
    kind: 'software',
    title: 'Portfolio Website',
    subtitle: 'Responsive Web Design',
    category: 'Frontend Development',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'Developed a responsive portfolio website using HTML, CSS, Bootstrap and JavaScript with responsive layouts for mobile and desktop.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
  },
  {
    id: 'javascript-calculator',
    kind: 'software',
    title: 'JavaScript Calculator',
    subtitle: 'Interactive Calculation Utility',
    category: 'JavaScript Web App',
    poster: '/assets/thumbnails/project-4-1.jpg',
    description:
      'Developed a calculator using HTML, CSS and JavaScript with interactive buttons and a dynamic display. Implemented real-time calculation logic.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

/* ───────────── 8. SERVICES & PRICING ───────────── */
export interface ServiceItem {
  id: string;
  title: string;
  priceLabel?: string;
  price?: string;
  featured?: boolean;
}

export const SERVICES_PRICING: ServiceItem[] = [];

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 4, suffix: '', label: 'Projects Built' },
  { id: 'stat-2', value: 11, suffix: '+', label: 'Tech Stack Skills' },
  { id: 'stat-3', value: 2, suffix: '', label: 'Live Deployed Apps' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/91${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
