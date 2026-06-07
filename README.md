# Abal Bohara Portfolio

Modern, responsive portfolio website for Abal Bohara built with React, Vite, Tailwind CSS, Framer Motion, React Icons, React Hook Form, EmailJS, and React Toastify.

## Features

- Dark/light mode toggle
- Smooth scroll reveals and page transitions
- Animated hero, timelines, skills, and testimonial carousel
- Certificate modal preview
- Functional EmailJS contact form with validation and spam protection
- Scroll progress bar, loading screen, and custom cursor
- SEO meta tags and Open Graph tags
- 404 page and router setup

## Setup

1. Install dependencies.

```bash
npm install
```

2. Create a `.env` file with your EmailJS credentials and contact email.

```bash
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_CONTACT_EMAIL=themailofabal@gmail.com
```

3. Run the development server.

```bash
npm run dev
```

4. Build for production.

```bash
npm run build
```

## EmailJS Template

Use the following template variables in EmailJS:

- from_name
- from_email
- subject
- message
- to_email

Target delivery email: themailofabal@gmail.com.

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add the VITE_EMAILJS_* environment variables in the Vercel project settings.
4. Add `VITE_CONTACT_EMAIL` in the Vercel project settings.
5. Deploy with the default Vite build command: npm run build.

### Netlify

1. Push the project to GitHub.
2. Connect the repository in Netlify.
3. Set the VITE_EMAILJS_* environment variables in the Netlify site settings.
4. Set `VITE_CONTACT_EMAIL` in the Netlify site settings.
5. Use npm run build as the build command and dist as the publish directory.

## Notes

- The resume button points to public/abal-bohara-resume.pdf.
- Replace placeholder GitHub and LinkedIn URLs in src/data/siteData.js with the final profile links if needed.