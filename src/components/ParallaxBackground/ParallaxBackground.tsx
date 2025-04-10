import { useRef } from 'react';

const ParallaxBackground = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="fixed left-[50%] translate-x-[-50%] top-0 w-full overflow-visible max-w-7xl h-lvh -z-10">
      <div
        className="absolute top-0 right-0 w-full h-full"
        style={{
          backgroundImage: 'url("/assets/emerald.jpg")',
          backgroundSize: 'cover',
          backgroundPositionX: '100%',
          backgroundRepeat: 'no-repeat',
        }}
        ref={backgroundRef}
      ></div>
    </div>
  );
};

export default ParallaxBackground;
