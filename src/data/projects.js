const createSvgDataUri = (title, accent, label) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#09111d" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" rx="36" fill="url(#g)" />
      <circle cx="670" cy="100" r="110" fill="rgba(255,255,255,0.09)" />
      <circle cx="120" cy="420" r="140" fill="rgba(255,255,255,0.05)" />
      <rect x="54" y="54" width="692" height="412" rx="28" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" />
      <text x="84" y="182" fill="#ffffff" font-family="Arial, sans-serif" font-size="46" font-weight="700">${title}</text>
      <text x="84" y="236" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="22">${label}</text>
      <rect x="84" y="302" width="270" height="16" rx="8" fill="rgba(255,255,255,0.24)" />
      <rect x="84" y="332" width="360" height="16" rx="8" fill="rgba(255,255,255,0.18)" />
      <rect x="84" y="362" width="220" height="16" rx="8" fill="rgba(255,255,255,0.14)" />
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const projects = [
  {
    title: 'Library Management System',
    description: 'A streamlined management platform for handling users, books, and borrowing workflows with a polished admin experience.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: ['CRUD Operations', 'User Management', 'Book Management'],
    image: createSvgDataUri('Library Management System', '#1d4ed8', 'MongoDB · Express.js · React · Node.js'),
    liveUrl: 'https://studyhub-lms.netlify.app/',
    githubUrl: 'https://github.com/abal-design/LMS',
  },
  {
    title: 'Face Recognition Attendance System',
    description: 'A modern attendance dashboard that demonstrates automated attendance workflows and recognition-driven operations.',
    techStack: ['React'],
    features: ['Automated Attendance', 'Face Recognition Concept', 'Dashboard UI'],
    image: createSvgDataUri('Face Recognition Attendance System', '#0ea5e9', 'React dashboard concept'),
    
    githubUrl: 'https://github.com/abal-design/SYP',
  },
  {
    title: 'Cafe Website',
    description: 'A brand-forward cafe site with menu management visuals, responsive layouts, and backend-ready structure.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: ['Menu Management', 'Responsive Design', 'Backend Integration'],
    image: createSvgDataUri('Cafe Website', '#7c3aed', 'Full-stack cafe experience'),
    
    githubUrl: 'https://github.com/abal-design/Dj-cafee',
  },
];