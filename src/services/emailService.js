import emailjs from '@emailjs/browser';
import { siteData } from '@/data/siteData';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || siteData.email;

export const isEmailServiceConfigured = Boolean(PUBLIC_KEY && SERVICE_ID && TEMPLATE_ID);

export const sendContactEmail = async (values) => {
  if (!isEmailServiceConfigured) {
    const subject = encodeURIComponent(values.subject || 'Portfolio inquiry');
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
    );
    const mailtoUrl = `${siteData.social.emailUrl}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    return Promise.resolve();
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: values.name,
      from_email: CONTACT_EMAIL,
      email: values.email,
      subject: values.subject,
      message: values.message,
      to_email: CONTACT_EMAIL,
    },
    PUBLIC_KEY
  );
};