'use client';

import { useSearchParams } from 'next/navigation';
import { PropsWithChildren } from 'react';
import ContactForm from '../ContactForm/ContactForm';

interface IHeaderSectionProps extends PropsWithChildren {
  onClick?: () => void;
}

const HeaderSection = ({ children, onClick }: IHeaderSectionProps) => {
  return (
    <div
      onClick={onClick}
      className="font-Classic text-center text-sm md:text-2xl gap-2 tracking-wider h-full flex flex-col w-full items-center justify-center text-white hover:bg-[rgba(0,0,0,0.2)] duration-200">
      {children}
    </div>
  );
};

const Landing = () => {
  const searchParams = useSearchParams();
  const guestGender = searchParams.get('gender');
  const guestName = searchParams.get('name');

  const renderDateInfo = () => {
    return (
      <HeaderSection>
        <p>DATE EVENT</p>
        <p className="text-base tracking-wider">{'23.08.25'}</p>
      </HeaderSection>
    );
  };

  const renderGuestInfo = () => {
    return (
      <HeaderSection>
        <p>{`Dear ${
          guestGender === 'm' ? 'Sir' : guestGender === 'f' ? 'Madam' : 'Sir / Madam'
        }`}</p>
        <p className="text-2xl capitalize">{guestName || 'dear guest'}</p>
      </HeaderSection>
    );
  };

  const renderLocationInfo = () => {
    return (
      <HeaderSection onClick={() => console.log(1)}>
        <a
          href="https://maps.app.goo.gl/Fiv3Etho9P9WNUn9A"
          target="_blank"
          className="w-full h-full flex flex-col items-center justify-center">
          <p>LOCATION</p>
          <p className="text-base">{'Stankovo, Belarus'}</p>
        </a>
      </HeaderSection>
    );
  };

  const renderDivider = () => {
    return <div className="w-[1px] h-full bg-[rgba(255,255,255,0.3)]"></div>;
  };

  const renderContent = () => {
    return (
      <>
        {/* Mobile */}
        <div className="w-full h-36 flex md:hidden justify-center border-t-[1px] border-b-[1px] border-[rgba(255,255,255,0.3)] bg-[rgba(0,0,0,0.1)] backdrop-blur-[5px]">
          <div className="max-w-5xl flex md:flex-row flex-col w-full justify-between items-center h-full">
            {renderGuestInfo()}
            <div className="flex w-full justify-between items-center border-t-[1px] border-[rgba(255,255,255,0.3)]">
              {renderDateInfo()}
              {renderDivider()}
              {renderLocationInfo()}
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="w-full  h-36 hidden md:flex justify-center border-t-[1px] border-b-[1px] border-[rgba(255,255,255,0.3)] bg-[rgba(0,0,0,0.1)] backdrop-blur-[5px]">
          <div className="flex w-full justify-center items-center h-full">
            {renderDateInfo()}
            {renderDivider()}
            {renderGuestInfo()}
            {renderDivider()}
            {renderLocationInfo()}
          </div>
        </div>
      </>
    );
  };

  return (
    <main className="font-Classic w-full flex flex-col gap-10 justify-center items-center py-12 md:py-20">
      <header className="w-full text-center flex justify-center items-center flex-col gap-7 px-10">
        <p className="text-xl font-MeaCulpa text-white">WEDDING INVITATION</p>
        <h1 className="flex gap-4 text-6xl md:text-8xl font-Header text-white">
          <span className="-translate-y-4 whitespace-pre">{'Egor '}</span>
          <span>&</span>
          <span className="translate-y-4">Alina</span>
        </h1>
        <p className="font-Classic tracking-widest text-base font-MeaCulpa text-white">
          WE INVITE YOU TO CELEBRATE OUR WEDDING
        </p>
      </header>
      <section className="w-full flex flex-col items-center justify-center">
        {renderContent()}
      </section>
      <section className="w-full px-3 flex flex-col items-center justify-center">
        <ContactForm guestName={guestName} />
      </section>
    </main>
  );
};

export default Landing;
