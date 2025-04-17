'use client';

import { useSearchParams } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { useTranslations } from 'next-intl';
import Section from '../Section/Section';
import Divider from '../Divider/Divider';
import TransparentBackground from '../TransparentBackground/TransparentBackground';
import ArrivalInfo from '../ArrivalInfo/ArrivalInfo';
import { getCapitalizedGuestName } from '@/utils/getCapitalizedGuestName';

const EVENT_DATE = '23.08.2025';

interface IHeaderSectionProps extends PropsWithChildren {
  onClick?: () => void;
}

const HeaderSection = ({ children, onClick }: IHeaderSectionProps) => {
  return (
    <div
      onClick={onClick}
      className={`font-Classic p-2 text-center text-sm md:text-2xl tracking-wider h-full flex flex-col w-full items-center justify-center text-WHITE hover:text-ACCENT duration-200`}
    >
      {children}
    </div>
  );
};

const HeaderInfo = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const guestGender = searchParams.get('gender');
  const guestName = searchParams.get('name');

  const renderDateInfo = () => {
    return (
      <HeaderSection>
        <p className="text-xl md:text-2xl">{EVENT_DATE}</p>
        <p className="text-xsm md:text-sm opacity-80">{t('eventDate')}</p>
      </HeaderSection>
    );
  };

  const renderGuestInfo = () => {
    const formattedGuestName = getCapitalizedGuestName(guestName || '');

    return (
      <HeaderSection>
        <p className="font-light">{`${
          guestGender === 'male'
            ? t('dearSir')
            : guestGender === 'female'
            ? t('dearMadam')
            : t('dearGuests')
        }`}</p>
        <p className="text-2xl">{formattedGuestName || t('guests')}</p>
      </HeaderSection>
    );
  };

  const renderLocationInfo = () => {
    return (
      <HeaderSection>
        <a
          href="https://maps.app.goo.gl/Fiv3Etho9P9WNUn9A"
          target="_blank"
          className="w-full h-full flex flex-col items-center justify-center"
        >
          <p className="text-base md:text-2xl">{t('locationName')}</p>
          {/* <div className="w-[20%] h-[1px] bg-WHITE"></div> */}
          <p className="text-xsm md:text-sm opacity-80">{t('location')}</p>
        </a>
      </HeaderSection>
    );
  };

  const renderContent = () => {
    return (
      <div className="w-full h-36 flex justify-center">
        <div className="flex flex-col w-full justify-between items-center h-full">
          {renderGuestInfo()}
          <div className="flex w-full justify-between items-center">
            {renderDateInfo()}
            {renderLocationInfo()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Section
      id="invitation"
      className="relative w-full py-10 bg-gradient-to-t from-DARK to-transparent"
    >
      <TransparentBackground>
        <div className="w-full text-center flex justify-center items-center flex-col gap-7 px-10  py-10">
          <p className="text-xl tracking-wider font-MeaCulpa text-WHITE">
            {t('weddingInvitation')}
          </p>
          <h1 className="flex gap-4 text-6xl md:text-8xl font-Header text-WHITE">
            <span className="-translate-y-4 whitespace-pre">{'Egor '}</span>
            <span>&</span>
            <span className="translate-y-4">Alina</span>
          </h1>
          <p className="font-Classic tracking-widest text-base font-MeaCulpa text-WHITE">
            {t('invitationInfo')}
          </p>
        </div>
        <Divider />
        <div className="w-full flex flex-col items-center justify-center">
          {renderContent()}
        </div>

        <ArrivalInfo />
      </TransparentBackground>
    </Section>
  );
};

export default HeaderInfo;
