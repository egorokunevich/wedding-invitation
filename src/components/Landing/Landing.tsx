'use client';

import { useSearchParams } from 'next/navigation';
import { PropsWithChildren } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { useTranslations } from 'next-intl';

interface IHeaderSectionProps extends PropsWithChildren {
  onClick?: () => void;
  noGap?: boolean;
}

const HeaderSection = ({ children, onClick, noGap }: IHeaderSectionProps) => {
  return (
    <div
      onClick={onClick}
      className={`font-Classic py-2 text-center text-sm md:text-2xl ${
        noGap ? '' : 'gap-2'
      } tracking-wider h-full flex flex-col w-full items-center justify-center text-white hover:bg-[rgba(0,0,0,0.2)] duration-200`}>
      {children}
    </div>
  );
};

const Landing = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const guestGender = searchParams.get('gender');
  const guestName = searchParams.get('name');

  const renderDateInfo = ({ noGap }: { noGap?: boolean }) => {
    return (
      <HeaderSection noGap={noGap}>
        <p>{t('eventDate')}</p>
        <p className="text-base tracking-wider">{'23.08.25'}</p>
      </HeaderSection>
    );
  };

  const renderGuestInfo = () => {
    return (
      <HeaderSection>
        <p>{`${
          guestGender === 'male'
            ? t('dearSir')
            : guestGender === 'female'
            ? t('dearMadam')
            : t('dearGuest')
        }`}</p>
        <p className="text-2xl capitalize">{guestName || ''}</p>
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
          <p> {t('location')}</p>
          <p className="text-base">{t('locationName')}</p>
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
              {renderDateInfo({ noGap: true })}
              {renderDivider()}
              {renderLocationInfo()}
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="w-full  h-36 hidden md:flex justify-center border-t-[1px] border-b-[1px] border-[rgba(255,255,255,0.3)] bg-[rgba(0,0,0,0.1)] backdrop-blur-[5px]">
          <div className="flex w-full justify-center items-center h-full">
            {renderDateInfo({ noGap: false })}
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
        <p className="text-xl font-MeaCulpa text-white">{t('weddingInvitation')}</p>
        <h1 className="flex gap-4 text-6xl md:text-8xl font-Header text-white">
          <span className="-translate-y-4 whitespace-pre">{'Egor '}</span>
          <span>&</span>
          <span className="translate-y-4">Alina</span>
        </h1>
        <p className="font-Classic tracking-widest text-base font-MeaCulpa text-white">
          {t('invitationInfo')}
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
