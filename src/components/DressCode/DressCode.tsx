'use client';

import Section from '../Section/Section';
import Divider from '../Divider/Divider';
import Background from '../Background/Background';

const DressCode = () => {
  return (
    <Section
      id="dress-code"
      className="relative w-full py-16 px-3 flex flex-col items-center gap-5 text-WHITE font-Classic text-2xl text-center"
    >
      <Background>
        <h3 className="font-Classic uppercase text-3xl w-full text-center">
          Дресс-код
        </h3>
        <p>
          Наш праздник будет проходить в формате вечеринки, поэтому мы никак не
          ограничиваем образы гостей.
        </p>
        <Divider />
      </Background>
    </Section>
  );
};

export default DressCode;
