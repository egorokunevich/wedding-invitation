import { Preference } from '@/utils/types';
import { useTranslations } from 'next-intl';

const usePreferences = () => {
  const t = useTranslations();

  const getFood = (): Preference[] => {
    return [
      { name: t('fish'), value: 'fish', preference: false },
      { name: t('chicken'), value: 'chicken', preference: false },
      { name: t('pork'), value: 'pork', preference: false },
      { name: t('beef'), value: 'beef', preference: false },
    ];
  };

  const getDrinks = (): Preference[] => {
    return [
      { name: t('champagne'), value: 'champagne', preference: false },
      { name: t('redWine'), value: 'fish', preference: false },
      { name: t('whiteWine'), value: 'whiteWine', preference: false },
      { name: t('hardDrinks'), value: 'hardDrinks', preference: false },
      { name: t('allDrinks'), value: 'allDrinks', preference: false },
      { name: t('sober'), value: 'sober', preference: false },
    ];
  };

  return { getFood, getDrinks };
};

export default usePreferences;
