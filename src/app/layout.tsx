import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster as Sonner } from '@/components/ui/sonner';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const SITE_URL = 'https://vcenkkarakuz.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Vancouver SaaS, Web & n8n Developer | Cenk Karakuz',
    template: '%s | Cenk Karakuz',
  },
  description:
    'Vancouver developer building SaaS products, marketing sites, and n8n automation for founders and teams across Canada and worldwide.',
  authors: [{ name: 'Cenk Karakuz', url: SITE_URL }],
  creator: 'Cenk Karakuz',
  publisher: 'Cenk Karakuz',
  keywords: [
    'Vancouver developer',
    'Vancouver SaaS developer',
    'Canada web developer',
    'n8n automation Vancouver',
    'react developer Canada',
    'freelance developer Vancouver',
    'AI workflow automation',
    'independent software developer',
  ],
  verification: {
    google: 'phQGXU_TUc-uNanicC553GL8pHrJdUPp17GDP2pNnGg',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    siteName: 'Cenk Karakuz',
    title: 'Cenk Karakuz | Vancouver SaaS, Web & n8n Automation Developer',
    description:
      'Independent Vancouver-based developer building SaaS products, marketing sites, and n8n automation systems.',
    images: [
      {
        url: '/ck-og.svg',
        width: 1200,
        height: 630,
        alt: 'Cenk Karakuz — Vancouver SaaS, Web & n8n Automation Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vcenkkarakuz',
    creator: '@vcenkkarakuz',
    title: 'Cenk Karakuz | Vancouver SaaS, Web & n8n Automation Developer',
    description: 'SaaS, web, and n8n automation development from Vancouver, Canada.',
    images: ['/ck-og.svg'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg' }],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'CA-BC',
    'geo.placename': 'Vancouver',
    'geo.position': '49.2827;-123.1207',
    ICBM: '49.2827, -123.1207',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background selection:bg-accent/20 overflow-x-hidden">
        <div className="bg-noise" />
        {children}
        <Sonner />
      </body>
    </html>
  );
}
