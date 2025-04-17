import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

interface PageParams {
  locale: string;
}

interface PageProps {
  params: Promise<PageParams>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return {
    title: 'Egor & Alina',
    description: 'Invitation to our wedding!',
    openGraph: {
      title: locale === 'ru' ? 'Свадьба Алины и Егора' : 'Alina & Egor Wedding',
      description:
        locale === 'ru' ? 'Приглашение на свадьбу' : 'Wedding Invitation',
      url: `https://www.alinaegorwedding.online/${locale === 'ru' ? '' : 'en'}`,
      images: [
        {
          url: 'https://www.alinaegorwedding.online/og-image.png',
          width: 1200,
          height: 638,
          alt: locale === 'ru' ? 'Алина и Егор' : 'Alina & Egor',
        },
      ],
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en' | 'ru')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
