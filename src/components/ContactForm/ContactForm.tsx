import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import Section from '../Section/Section';
import toast from 'react-hot-toast';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const ContactForm = ({ guestName }: { guestName: string | null }) => {
  const t = useTranslations();
  const form = useRef<HTMLFormElement>(null);
  const [selectedAccept, setSelectedAccept] = useState<string>('yes');
  const [foodPreferences, setFoodPreferences] = useState<
    Array<{ name: string; preference: boolean }>
  >([]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const convertedFormData = Object.fromEntries(formData.entries());

      const preferredFood = foodPreferences
        .filter((item) => item.preference)
        .map((item) => item.name);

      const data = {
        ...convertedFormData,
        user_name: (convertedFormData['user_name'] as string).toUpperCase(),
        user_accept: selectedAccept === 'yes' ? true : false,
        food_preferences: preferredFood,
      };

      console.table(data);

      const emailPromise = emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data
      );

      toast.promise(emailPromise, {
        loading: t('sending'),
        success: t('messageSuccess'),
        error: t('messageFailure'),
      });
    }
  };

  const createAcceptInput = (value: string, label: string) => {
    return (
      <div
        className={`w-full h-12 group border-b-[2px]  duration-200  ${
          selectedAccept === value ? ' border-ACCENT' : 'border-transparent'
        } hover:border-ACCENT_T overflow-visible`}
      >
        <input
          className="w-0 h-0 opacity-0 invisible hidden"
          type="radio"
          id={value}
          name="user_accept"
          value={value}
          onChange={() => setSelectedAccept(value)}
        />
        <label
          htmlFor={value}
          className="text-xl flex justify-center items-center h-full w-full cursor-pointer group-hover:bg-DARK_T duration-200"
        >
          {label}
        </label>
      </div>
    );
  };

  const handleFoodCheck = ({
    value,
    preference,
  }: {
    value: string;
    preference: boolean;
  }) => {
    setFoodPreferences((prev) => {
      const filtered = prev.filter((item) => item.name !== value);
      return [...filtered, { name: value, preference }];
    });
  };

  const createFoodCheckbox = (value: string, label: string) => {
    return (
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={value}
          name="food_preferences"
          onChange={(event) =>
            handleFoodCheck({ value, preference: event.target.checked })
          }
          className="relative peer shrink-0 appearance-none w-4 h-4 border-[1px] border-BLACK bg-transparent checked:bg-ACCENT checked:border-0"
        />
        <label htmlFor={value}>{label}</label>
      </div>
    );
  };

  return (
    <Section
      id="contact-form"
      className="w-full px-3 py-10 flex flex-col items-center justify-center text-black bg-WHITE"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="font-MeaCulpa max-w-lg mx-auto w-full px-4 md:px-12 py-6 flex flex-col gap-5"
      >
        <h2 className=" text-2xl">{t('contactUs')}</h2>
        <div className="flex flex-col gap-1.5">
          <label className="tracking-wide block text-md font-medium ">
            {t('acceptInfo')}
          </label>
          {/* Acception */}
          <div className="flex w-full">
            {createAcceptInput('yes', t('yes'))}
            {createAcceptInput('no', t('no'))}
          </div>
        </div>
        {/* Name */}
        <div className="flex flex-col-reverse">
          <input
            type="text"
            name="user_name"
            id="name"
            defaultValue={guestName || ''}
            required
            className="peer capitalize text-xl w-full outline-0 focus:bg-[rgba(255,255,255,0.1)]  pl-4 border-b-[1px] border-[rgba(0,0,0,0.2)] focus:border-ACCENT duration-200"
          />
          <label
            htmlFor="name"
            className="tracking-wide block text-md font-medium text-DARK_GRAY peer-focus:text-black"
          >
            {t('name')}
          </label>
        </div>
        {/* Email */}
        <div className="flex flex-col-reverse">
          <input
            type="email"
            name="user_email"
            id="email"
            className="peer text-xl w-full outline-0 focus:bg-[rgba(255,255,255,0.1)]  pl-4 border-b-[1px] border-[rgba(0,0,0,0.2)] focus:border-ACCENT duration-200"
          />
          <label
            htmlFor="email"
            className="tracking-wide block text-md font-medium text-DARK_GRAY peer-focus:text-black"
          >
            {t('email')}
          </label>
        </div>
        {/* Message */}
        <div className="flex flex-col-reverse">
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            className="peer text-xl resize-none mt-1 focus:bg-[rgba(255,255,255,0.1)] block w-full px-3 py-2 border-[1px] border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-ACCENT"
          ></textarea>
          <label
            htmlFor="message"
            className="tracking-wide block text-md font-medium text-DARK_GRAY peer-focus:text-black"
          >
            {t('message')}
          </label>
        </div>
        {/* Food */}
        {createFoodCheckbox('fish', 'Fish')}
        {createFoodCheckbox('meat', 'Meat')}
        {/* Submit */}
        <button
          type="submit"
          className="font-Classic w-full h-12 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] duration-200 flex items-center justify-center  text-xl tracking-wide  bg-[rgba(0,0,0,0.2)]"
        >
          {t('send')}
        </button>
      </form>
    </Section>
  );
};

export default ContactForm;
