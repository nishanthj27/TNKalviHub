import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Page Not Found – TNKalviHub' };

export default function NotFound() {
  return (
    <div className="page-container py-20 text-center">
      <div className="text-8xl mb-6">📚</div>
      <h1 className="text-4xl font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
        404 – Page Not Found
      </h1>
      <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="btn-primary inline-flex px-8 py-3"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
