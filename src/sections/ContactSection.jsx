import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiAlertCircle, FiCheckCircle, FiMail, FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';
import PageSection from '@/components/PageSection';
import { siteData } from '@/data/siteData';
import { sendContactEmail, isEmailServiceConfigured } from '@/services/emailService';

const defaultValues = { name: '', email: '', subject: '', message: '', company: '' };

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const formStartRef = useRef(Date.now());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = async (values) => {
    if (values.company) {
      toast.info('Spam protection triggered.');
      return;
    }

    if (Date.now() - formStartRef.current < 4000) {
      toast.info('Please take a moment before submitting the form.');
      return;
    }

    setLoading(true);
    try {
      await sendContactEmail(values);
      toast.success(isEmailServiceConfigured ? 'Message sent successfully.' : 'Your email app is ready to send the message.');
      reset(defaultValues);
      formStartRef.current = Date.now();
    } catch (error) {
      console.error(error);
      toast.error(isEmailServiceConfigured ? 'Failed to send message. Please try again.' : 'EmailJS is not configured yet.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageSection
      id="contact"
      eyebrow="Contact"
      title="Functional contact form with email fallback"
      description="Validation, loading state, toast notifications, and simple spam protection are already built in. EmailJS is used when configured; otherwise, your email app opens."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-[2rem] p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold text-white">Let’s build something premium</h3>
          <p className="mt-4 leading-8 text-[#94A3B8]">Send a message for freelance work, collaboration, mentorship, or product design and development opportunities.</p>
          <div className="mt-8 space-y-4 text-sm text-[#F8FAFC]">
            <div className="flex items-center gap-3 rounded-2xl border border-[#334155] bg-[#1E293B]/60 p-4">
              <FiMail className="text-[#06B6D4]" /> {siteData.email}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#334155] bg-[#1E293B]/60 p-4">
              <FiCheckCircle className="text-[#3B82F6]" /> Fast response for relevant opportunities
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#334155] bg-[#1E293B]/60 p-4">
              <FiAlertCircle className="text-[#06B6D4]" /> Accessible form validation and feedback
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-[2rem] p-6 sm:p-8">
          <input type="hidden" {...register('company')} />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#F8FAFC]">Name</span>
              <input
                {...register('name', { required: 'Name is required.' })}
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-[#334155] bg-[#0F172A]/50 px-4 py-3 text-white outline-none transition placeholder:text-[#94A3B8] focus:border-[#06B6D4]"
              />
              {errors.name ? <span className="mt-2 block text-xs text-[#06B6D4]">{errors.name.message}</span> : null}
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#F8FAFC]">Email</span>
              <input
                {...register('email', {
                  required: 'Email is required.',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' },
                })}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-[#334155] bg-[#0F172A]/50 px-4 py-3 text-white outline-none transition placeholder:text-[#94A3B8] focus:border-[#06B6D4]"
              />
              {errors.email ? <span className="mt-2 block text-xs text-[#06B6D4]">{errors.email.message}</span> : null}
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-[#F8FAFC]">Subject</span>
            <input
              {...register('subject', { required: 'Subject is required.' })}
              type="text"
              placeholder="Project inquiry"
              className="w-full rounded-2xl border border-[#334155] bg-[#0F172A]/50 px-4 py-3 text-white outline-none transition placeholder:text-[#94A3B8] focus:border-[#06B6D4]"
            />
            {errors.subject ? <span className="mt-2 block text-xs text-[#06B6D4]">{errors.subject.message}</span> : null}
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-[#F8FAFC]">Message</span>
            <textarea
              {...register('message', { required: 'Message is required.', minLength: { value: 20, message: 'Message should be at least 20 characters.' } })}
              rows="6"
              placeholder="Tell me about your project"
              className="w-full rounded-2xl border border-[#334155] bg-[#0F172A]/50 px-4 py-3 text-white outline-none transition placeholder:text-[#94A3B8] focus:border-[#06B6D4]"
            />
            {errors.message ? <span className="mt-2 block text-xs text-[#06B6D4]">{errors.message.message}</span> : null}
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-5 py-3 font-semibold text-[#0F172A] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Sending...' : <><FiSend /> Send Message</>}
          </button>
          <p className="mt-4 text-center text-xs text-[#94A3B8]">Messages are delivered directly to {siteData.email}.</p>
        </form>
      </div>
    </PageSection>
  );
}