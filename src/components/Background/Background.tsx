import { PropsWithChildren, Suspense } from 'react';

const Background = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="fixed left-0 top-0 w-full  overflow-hidden -z-10">
        <img
          className="w-full h-lvh object-cover"
          src="/assets/background-forest-3.jpg"
          alt="forest background"
        />
        <div className="absolute left-0 top-0 w-full h-full backdrop-blur-[5px]"></div>
      </div>
      <Suspense>{children}</Suspense>
    </>
  );
};

export default Background;
