import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you were looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">404</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          That URL didn&apos;t match anything. Head back home and pick a path from the nav.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          Return home
        </Link>
      </div>
    </div>
  );
}
