import { PropsWithChildren, Suspense } from 'react';

interface ITransparentBackgroundProps extends PropsWithChildren {
  className?: string;
}

const TransparentBackground = ({
  children,
  className,
}: ITransparentBackgroundProps) => {
  return (
    <Suspense>
      <div className={className + ' z-10 bg-transparent'}>{children}</div>
    </Suspense>
  );
};

export default TransparentBackground;
