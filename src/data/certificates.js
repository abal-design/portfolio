const createCertificateImage = (title, issuer, year) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#1d4ed8" />
        </linearGradient>
      </defs>
      <rect width="900" height="600" rx="36" fill="url(#bg)" />
      <rect x="48" y="48" width="804" height="504" rx="28" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" />
      <text x="86" y="160" fill="#ffffff" font-family="Arial, sans-serif" font-size="48" font-weight="700">Certificate</text>
      <text x="86" y="246" fill="#ffffff" font-family="Arial, sans-serif" font-size="34" font-weight="700">${title}</text>
      <text x="86" y="316" fill="#dbeafe" font-family="Arial, sans-serif" font-size="24">${issuer}</text>
      <text x="86" y="376" fill="#bfdbfe" font-family="Arial, sans-serif" font-size="22">${year}</text>
      <circle cx="756" cy="162" r="70" fill="rgba(255,255,255,0.12)" />
      <path d="M725 162l22 22 44-56" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const certificates = [
  {
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    year: '2023',
    image: createCertificateImage('Responsive Web Design', 'FreeCodeCamp', '2023'),
  },
  {
    title: 'UI/UX Fundamentals',
    issuer: 'Design Academy',
    year: '2024',
    image: createCertificateImage('UI/UX Fundamentals', 'Design Academy', '2024'),
  },
  {
    title: 'MERN Stack Practice',
    issuer: 'Self-Learning Track',
    year: '2025',
    image: createCertificateImage('MERN Stack Practice', 'Self-Learning Track', '2025'),
  },
];