'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import langIcon from '../../../public/assets/language.svg';
import Image from 'next/image';

const LanguageToggle = () => {
  const router = useRouter();
  const params = useParams();
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

          return `?${name ? `name=${name}` : ''}&${gender ? `gender=${gender}` : ''}`;
        };

        router.push(`${getOtherLocale()}${createSearchParams()}`);
      }}
      className="font-Classic flex p-2.5 gap-2.5 items-center justify-center cursor-pointer duration-200 absolute top-2 left-4 hover:bg-[rgba(255,255,255,0.2)] text-[rgb(212,212,212)]">
      <Image src={langIcon} alt="language" width={20} height={20} />
      <p className="text-center uppercase">{getOtherLocale()}</p>
    </div>
  );
};

export default LanguageToggle;
