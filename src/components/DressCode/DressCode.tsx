'use client';

import Section from '../Section/Section';
import Divider from '../Divider/Divider';
import TransparentBackground from '../TransparentBackground/TransparentBackground';
import { useTranslations } from 'next-intl';

const DressCode = () => {
  const t = useTranslations();

  return (
    <Section
      id="dress-code"
      className="font-Classic tracking-wide relative w-full py-16 px-3 text-2xl text-center"
    >
      <TransparentBackground className="flex flex-col items-center gap-5 text-WHITE">
        <h3 className="font-Classic tracking-wide uppercase text-3xl w-full text-center">
          {t('dressCode')}
        </h3>
        <p className="font-light">{t('dressCodeInfo')}</p>
        <Divider />
      </TransparentBackground>
    </Section>
  );
};

export default DressCode;
