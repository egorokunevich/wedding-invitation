'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import LanguageIcon from '../Icons/LanguageIcon';
import { usePathname } from '@/i18n/navigation';

const LanguageToggle = () => {
  const router = useRouter();
  const params = useParams();
  const path = usePathname();
  const searchParams = useSearchParams();
  const locale = params.locale;

  const getOtherLocale = () => (locale === 'en' ? 'ru' : 'en');

  return (
    <div
      onClick={() => {
        const name = searchParams.get('name');
        const gender = searchParams.get('gender');
        const createSearchParams = () => {
          if (!(name || gender)) {
            return '';
          }

          return `?${name ? `name=${name}` : ''}&${
            gender ? `gender=${gender}` : ''
          }`;
        };
        const cleanedPath = path.replace('en', '').replace('ru', '');
        router.push(
          `/${getOtherLocale()}/${cleanedPath}${createSearchParams()}`
        );
      }}
      className="font-Classic flex p-2.5 gap-2.5 items-center justify-center cursor-pointer duration-200 border-b-[1px] border-b-transparent hover:border-ACCENT text-[rgb(212,212,212)] hover:text-ACCENT"
    >
      <LanguageIcon color="[rgb(212,212,212)]" width="20px" height="20px" />
      <p className="text-center uppercase">{locale}</p>
    </div>
  );
};

export default LanguageToggle;
