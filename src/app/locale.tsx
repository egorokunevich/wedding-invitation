import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alina & Egor Wedding',
  description: 'Invitation to our wedding!',
  metadataBase: new URL('https://www.alinaegorwedding.online'),
  openGraph: {
    title: 'Alina & Egor',
    description: 'Invitation to our wedding!',
    url: 'https://www.alinaegorwedding.online',
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
  alternates: {
    canonical: 'https://www.alinaegorwedding.online',
    languages: {
      en: 'https://www.alinaegorwedding.online/en',
      ru: 'https://www.alinaegorwedding.online/ru',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
