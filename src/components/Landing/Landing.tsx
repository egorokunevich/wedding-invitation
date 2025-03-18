'use client';

import { useSearchParams } from 'next/navigation';
import ContactForm from '../ContactForm/ContactForm';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import Header from '../Header/Header';
import Gifts from '../Gifts/Gifts';
import DressCode from '../DressCode/DressCode';
import ParallaxBackground from '../ParallaxBackground/ParallaxBackground';
import { Toaster } from 'react-hot-toast';

const Landing = () => {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('name');

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <main className="font-Classic w-full flex flex-col pt-14 justify-center items-center">
        <ParallaxBackground />
        <HeaderInfo />
        <Gifts />
        <DressCode />
        <ContactForm guestName={guestName} />
        <Toaster
          position="top-right"
          toastOptions={{ className: 'font-Classic' }}
        />
      </main>
    </div>
  );
};

export default Landing;
