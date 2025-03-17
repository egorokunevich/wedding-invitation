import { PropsWithChildren, Suspense } from 'react';

const Background = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="fixed left-[50%] translate-x-[-50%] right top-0 w-full max-w-7xl h-full overflow-hidden -z-10">
        <img
          className="w-full h-lvh object-cover"
          src="/assets/emerald.jpg"
          alt="forest background"
        />
        <div className="absolute left-0 top-0 w-full h-full backdrop-blur-[5px]"></div>
      </div>
      <Suspense>{children}</Suspense>
    </>
  );
};

export default Background;
