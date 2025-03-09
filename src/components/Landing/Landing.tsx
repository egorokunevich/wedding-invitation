'use client';

import { useSearchParams } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface IHeaderSectionProps extends PropsWithChildren {
  onClick?: () => void;
}

const HeaderSection = ({ children, onClick }: IHeaderSectionProps) => {
  return (
    <div
      onClick={onClick}
      className="font-Classic text-center text-sm md:text-2xl gap-2 tracking-wider h-full flex flex-col w-full items-center justify-center text-white hover:bg-[rgba(0,0,0,0.2)] duration-200">
      {children}
    </div>
  );
};

const Landing = () => {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('name');

  const renderContent = () => {
    return (
      <>
        {/* Mobile */}
        <div className="w-full h-36 flex md:hidden justify-center border-t-[1px] border-b-[1px] border-[rgba(255,255,255,0.3)] bg-[rgba(0,0,0,0.1)] backdrop-blur-[5px]">
          <div className="max-w-5xl flex md:flex-row flex-col w-full justify-between items-center h-full">
            <HeaderSection>
              <p>Dear Sir / Madam</p>
              <p className="text-2xl capitalize">{guestName || 'dear guest'}</p>
            </HeaderSection>
            <div className="flex w-full justify-between items-center border-t-[1px] border-[rgba(255,255,255,0.3)]">
              <HeaderSection>
                <p>DATE EVENT</p>
                <p className="text-base tracking-wider">{'23.08.25'}</p>
              </HeaderSection>
              {/* Divider */}
              <div className="w-[1px] h-full bg-[rgba(255,255,255,0.3)]"></div>
              <HeaderSection onClick={() => console.log(1)}>
                <a
                  href="https://maps.app.goo.gl/Fiv3Etho9P9WNUn9A"
                  target="_blank"
                  className="w-full h-full flex flex-col items-center justify-center">
                  <p>LOCATION</p>
                  <p className="text-base">{'Stankovo'}</p>
                </a>
              </HeaderSection>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="w-full  h-36 hidden md:flex justify-center border-t-[1px] border-b-[1px] border-[rgba(255,255,255,0.3)] bg-[rgba(0,0,0,0.1)] backdrop-blur-[5px] px-0 md:px-10">
          <div className="flex w-full justify-center items-center h-full">
            <HeaderSection>
              <p>DATE EVENT</p>
              <p className="text-base tracking-wider">{'23.08.25'}</p>
            </HeaderSection>
            {/* Divider */}
            <div className="w-[1px] h-full bg-[rgba(255,255,255,0.3)]"></div>
            <HeaderSection>
              <p>Dear Sir / Madam</p>
              <p className="text-2xl capitalize">{guestName || 'dear guest'}</p>
            </HeaderSection>
            {/* Divider */}
            <div className="w-[1px] h-full bg-[rgba(255,255,255,0.3)]"></div>
            <HeaderSection>
              <a
                href="https://maps.app.goo.gl/Fiv3Etho9P9WNUn9A"
                target="_blank"
                className="w-full h-full flex flex-col items-center justify-center">
                <p>LOCATION</p>
                <p className="text-base">{'Stankovo'}</p>
              </a>
            </HeaderSection>
          </div>
        </div>
      </>
    );
  };

  return (
    <main className="font-Classic w-full h-lvh flex flex-col gap-10 justify-center items-center">
      <header className="w-full text-center flex justify-center items-center flex-col gap-7 px-10">
        <p className="text-xl font-MeaCulpa text-white">WEDDING INVITATION</p>
        <h1 className="flex gap-4 text-6xl md:text-8xl font-Header text-white">
          <span className="-translate-y-4 whitespace-pre">{'Egor '}</span>
          <span>&</span>
          <span className="translate-y-4">Alina</span>
        </h1>
        <p className="font-Classic tracking-widest text-base font-MeaCulpa text-white">
          WE INVITE YOU TO CELEBRATE OUR WEDDING
        </p>
      </header>
      <section className="w-full flex flex-col items-center justify-center">
        {renderContent()}
      </section>
    </main>
  );
};

export default Landing;
