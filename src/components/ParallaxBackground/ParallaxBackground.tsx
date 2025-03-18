import { useRef } from 'react';

const ParallaxBackground = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     requestAnimationFrame(() => {
  //       const scrollY = window.scrollY; // Текущая позиция скролла
  //       const totalHeight =
  //         document.documentElement.scrollHeight - window.innerHeight; // Общая высота прокрутки
  //       const scrollPercent = (scrollY / totalHeight) * 100; // Процент прокрутки от 0 до 100

  //       if (backgroundRef.current) {
  //         // Меняем позицию фона в зависимости от процента скролла
  //         backgroundRef.current.style.backgroundPositionY = `${scrollPercent}%`;
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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
