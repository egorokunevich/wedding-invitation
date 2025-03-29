import Landing from '@/components/Landing/Landing';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://alinaegorwedding.online/og-image.png?v=2`}
        />
        <meta property="og:title" content="Egor & Alina" />
        <meta property="og:description" content="Invitation to our wedding!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={'https://alinaegorwedding.online'} />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="638" />
        <meta property="og:image:alt" content="alina-egor-wedding" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Landing />
    </>
  );
}
