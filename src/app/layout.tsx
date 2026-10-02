import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import { Toaster as Sonner } from '@/components/ui/sonner';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

const SITE_URL = 'https://vcenkkarakuz.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Independent Product Engineer & Founder | Cenk Karakuz',
    template: '%s | Cenk Karakuz',
  },
  description:
    'Independent product engineer in Vancouver designing and building SaaS products, intelligent workflows, and high-performing websites for founders and small teams.',
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
    title: 'Cenk Karakuz | Independent Product Engineer & Founder',
    description:
      'I design, build, and launch useful digital products for founders and small teams.',
    images: [
      {
        url: '/ck-og.svg',
        width: 1200,
        height: 630,
        alt: 'Cenk Karakuz — Independent Product Engineer and Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vcenkkarakuz',
    creator: '@vcenkkarakuz',
    title: 'Cenk Karakuz | Independent Product Engineer & Founder',
    description: 'Digital products, intelligent workflows, and high-performing websites from Vancouver.',
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
  themeColor: '#faf9f5',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${bricolage.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="min-h-screen bg-background selection:bg-accent/20 overflow-x-hidden">
        {children}
        <Sonner />
      </body>
    </html>
  );
}
