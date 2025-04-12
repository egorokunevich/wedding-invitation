'use client';

import wineBottle from '@public/assets/wine-bottle.png';
import catFoodIcon from '@public/assets/pet-bowl-icon.png';
import moneyIcon from '@public/assets/money-icon.png';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Section from '../Section/Section';
import Divider from '../Divider/Divider';
import { useTranslations } from 'next-intl';

const createIcon = (src: string | StaticImport) => {
  return <Image src={src} alt="wine" width={42} height={42} />;
};

const Gifts = () => {
  const t = useTranslations();

  return (
    <Section
      id="gifts"
      className="w-full py-16 px-10 flex flex-col items-center gap-5 max-w-5xl font-Classic text-2xl text-center bg-WHITE text-BLACK"
    >
      <h3 className="font-Classic uppercase text-3xl w-full text-center">
        {t('giftsTitle')}
      </h3>
      <div className="flex items-center justify-center gap-5 max-w-2xl w-full">
        {createIcon(wineBottle)}
        {createIcon(catFoodIcon)}
        {createIcon(moneyIcon)}
      </div>
      <p className="font-light">
        {t('giftsInfoPart1')}
        <span className="text-ACCENT">
          <a href={'/catfood'}>{t('giftsInfoCatFood')}</a>
        </span>
        {t('giftsInfoPart2')}
      </p>
      <Divider />
    </Section>
  );
};

export default Gifts;
