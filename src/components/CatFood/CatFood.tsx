'use client';

import { useTranslations } from 'next-intl';
import Header from '../Header/Header';
import ParallaxBackground from '../ParallaxBackground/ParallaxBackground';
import Section from '../Section/Section';

const CatFood = () => {
  const t = useTranslations();

  const createListItem = (name: string) => {
    return (
      <div className="flex gap-2.5 items-center">
        <div className="w-[6px] h-[6px] bg-ACCENT rotate-45" />
        <div>{name}</div>
      </div>
    );
  };
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <main className="font-Classic w-full flex flex-col pt-14 justify-center items-center">
        <ParallaxBackground />
        <div className="w-full absolute top-0 left-0 -bottom-14 right-0 bg-gradient-to-t from-DARK to-transparent -z-10"></div>
        <Section className="px-12 tracking-wide py-16 text:xl md:text-2xl text-WHITE">
          <h3 className="font-Classic tracking-wide pb-6 uppercase text-2xl md:text-3xl w-full text-center">
            {t('shelterName')}
          </h3>
          <p className="font-light text-center">
            {t('shelterInfo')}{' '}
            <a
              className="text-ACCENT"
              target="_blank"
              href="https://www.instagram.com/kotvokoshke/"
            >
              {t('shelterName')}
            </a>
          </p>
          <div className="pb-10" />

          <div className="flex flex-col gap-3">
            <div className="flex justify-center w-full items-center">
              <h4 className="border-b-[1px] border-ACCENT text-2xl md:text-3xl ">
                {t('cannedFood')}
              </h4>
            </div>

            {createListItem('Felix')}
            {createListItem('Purina One')}
            {createListItem('Pro Plan')}
            {createListItem('Royal Canin')}
            {createListItem('Award')}

            <div className="flex justify-center w-full items-center">
              <h4 className="border-b-[1px] border-ACCENT  text-2xl md:text-3xl text-nowrap">
                {t('medicinalFood')}
              </h4>
            </div>

            {createListItem(t('gastrointestinal'))}
            {createListItem(t('renal'))}
            {createListItem(t('urinary'))}
          </div>
        </Section>
      </main>
    </div>
  );
};

export default CatFood;
