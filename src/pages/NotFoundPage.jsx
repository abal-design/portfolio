import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="min-h-[calc(100vh-120px)] px-4 pt-32">
      <div className="container-page">
        <div className="glass mx-auto max-w-2xl rounded-[2rem] p-8 text-center shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#06B6D4]">404</p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-[#94A3B8]">The page you requested does not exist. Return to the portfolio homepage to continue exploring.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-6 py-3 font-semibold text-[#0F172A] transition hover:scale-[1.02]"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}