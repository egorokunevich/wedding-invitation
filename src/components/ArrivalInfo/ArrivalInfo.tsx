'use client';

import Section from '../Section/Section';
import { useTranslations } from 'next-intl';

const ArrivalInfo = () => {
  const t = useTranslations();

  const createSchedule = (time: string, detailText: string) => {
    return (
      <div className="flex items-center font-light">
        <span className="text-ACCENT">{time}</span>
        <span className="px-3 md:px-5"></span>
        <span className="text-xl md:text-2xl">{detailText}</span>
      </div>
    );
  };

  return (
    <Section
      id="arrival"
      className="w-full py-16 px-10 flex flex-col items-center gap-5 max-w-5xl font-Classic text-2xl text-center  text-BLACK"
    >
      <h3 className="font-Classic uppercase text-3xl text-WHITE w-full text-center">
        {t('arrivalTitle')}
      </h3>
      <div className="font-Classic font-light text-WHITE flex flex-col items-start gap-2">
        {createSchedule('14:30', t('arrivalTransfer'))}
        {createSchedule('15:00', t('arrivalBuffet'))}
        {createSchedule('16:00', t('ceremony'))}
      </div>
    </Section>
  );
};

export default ArrivalInfo;
