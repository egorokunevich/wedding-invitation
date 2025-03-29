import type { Metadata } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://alinaegorwedding.online';

export const metadata: Metadata = {
  title: 'Alina & Egor Wedding',
  description: 'Invitation to our wedding!',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Alina & Egor',
    description: 'Invitation to our wedding!',
    url: SITE_URL,
    siteName: 'Alina & Egor Wedding',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 638,
        alt: 'Wedding preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alina & Egor Wedding',
    description: 'Wedding invitation website',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
