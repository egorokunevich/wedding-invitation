/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import { useState } from 'react';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const renderMenuItems = () => {
    return (
      <>
        <a
          href="/#invitation"
          onClick={() => setIsBurgerOpen(false)}
          className="hover:text-ACCENT border-b-[1px] border-transparent hover:border-ACCENT duration-200 flex items-center p-2.5"
        >
          {t('nav_invitation')}
        </a>
        <a
          href="/#arrival"
          onClick={() => setIsBurgerOpen(false)}
          className="hover:text-ACCENT border-b-[1px] border-transparent hover:border-ACCENT duration-200 flex items-center p-2.5"
        >
          {t('nav_arrival')}
        </a>
        <a
          href="/#gifts"
          onClick={() => setIsBurgerOpen(false)}
          className="hover:text-ACCENT border-b-[1px] border-transparent hover:border-ACCENT duration-200 flex items-center p-2.5"
        >
          {t('nav_gifts')}
        </a>
        <a
          href="/#dress-code"
          onClick={() => setIsBurgerOpen(false)}
          className="hover:text-ACCENT border-b-[1px] border-transparent hover:border-ACCENT duration-200 flex items-center p-2.5"
        >
          {t('nav_dressCode')}
        </a>
        <a
          href="/#contact-form"
          onClick={() => setIsBurgerOpen(false)}
          className="hover:text-ACCENT border-b-[1px] border-transparent hover:border-ACCENT duration-200 flex items-center p-2.5"
        >
          {t('nav_feedback')}
        </a>
        <a
          href="/catfood"
          onClick={() => setIsBurgerOpen(false)}
          className="hover:text-ACCENT border-b-[1px] border-transparent hover:border-ACCENT duration-200 flex items-center p-2.5"
        >
          {t('nav_catfood')}
        </a>
      </>
    );
  };

  return (
    <header className="fixed max-w-7xl top-0 gap-10 w-full z-20 h-14 flex items-center p-2 bg-DARK shadow-[0_1px_5px_rgba(0,16,11,0.3)]">
      <LanguageToggle />
      {/* Mobile */}
      <div className="flex md:hidden justify-end w-full">
        <div
          onClick={() => setIsBurgerOpen((prev) => !prev)}
          className="flex flex-col gap-1 cursor-pointer p-2"
        >
          <div className="w-[20px] h-[2px] bg-LIGHT_GRAY"></div>
          <div className="w-[20px] h-[2px] bg-LIGHT_GRAY"></div>
          <div className="w-[20px] h-[2px] bg-LIGHT_GRAY"></div>
        </div>
        {isBurgerOpen && (
          <div className="fixed top-0 right-0 flex items-center md:hidden w-full h-full bg-[#3A4236] py-20 px-6 text-xl text-WHITE">
            <div
              className="absolute right-4 top-4 rotate-45 cursor-pointer hover:scale-110 duration-200"
              onClick={() => setIsBurgerOpen(false)}
            >
              <div className="relative w-[20px] h-[20px]">
                <div className="absolute top-0 left-[50%] transform-[translateX(-50%)] w-[2px] h-5 bg-white"></div>
                <div className="absolute top-[50%] transform-[translateY(-50%)] left-0 w-5 h-[2px] bg-white"></div>
              </div>
            </div>
            <div className="items-center flex flex-col w-full h-full justify-start">
              {renderMenuItems()}
            </div>
          </div>
        )}
      </div>
      {/* Desktop */}
      <div className="items-center hidden md:flex h-[45px] text-LIGHT_GRAY">
        {renderMenuItems()}
      </div>
    </header>
  );
};

export default Header;
