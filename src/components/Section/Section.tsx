import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  const findBackgroundColorClass = (className: string) => {
    const bgColorRegex = /bg-[a-zA-Z0-9-]+/;
    const match = className.match(bgColorRegex);

    return match ? match[0] : '';
  };

  return (
    <section
      id={id}
      className={`w-full max-w-7xl flex flex-col items-center ${findBackgroundColorClass(
        className || ''
      )}`}
    >
      <div
        className={`${className} ${findBackgroundColorClass(className || '')}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
