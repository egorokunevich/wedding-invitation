import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import Section from '../Section/Section';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const ContactForm = ({ guestName }: { guestName: string | null }) => {
  const t = useTranslations();
  const form = useRef<HTMLFormElement>(null);
  const [selectedAccept, setSelectedAccept] = useState<string>('yes');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      console.log(form.current);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current
        )
        .then(
          (result) => {
            console.log('Email sent successfully!', result.text);
            alert(t('messageSuccess'));
          },
          (error) => {
            console.error('Failed to send email:', error.text);
            alert(t('messageFailure'));
          }
        );
    }
  };

  const createAcceptInput = (value: string, label: string) => {
    return (
      <div
        className={`w-full h-12 group border-b-[2px]  duration-200  ${
          selectedAccept === value ? ' border-white' : 'border-transparent'
        } hover:border-[rgba(255,255,255,0.5)] overflow-visible`}
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
          className=" text-xl flex justify-center items-center h-full w-full cursor-pointer group-hover:bg-[rgba(255,255,255,0.1)] duration-200"
        >
          {label}
        </label>
      </div>
    );
  };

  return (
    <Section
      id="contact-form"
      className="w-full px-3 py-10 flex flex-col items-center justify-center text-black bg-[#9CA18E]"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="font-MeaCulpa max-w-lg mx-auto bg-[rgba(255,255,255,0.2)] w-full px-4 md:px-12 py-6 flex flex-col gap-5"
      >
        <h2 className=" text-2xl">{t('contactUs')}</h2>
        <div className="flex flex-col gap-1.5">
          <label className="tracking-wide block text-md font-medium ">
            {t('acceptInfo')}
          </label>
          <div className="flex w-full">
            {createAcceptInput('yes', t('yes'))}
            {createAcceptInput('no', t('no'))}
          </div>
        </div>
        <div className="">
          <label
            htmlFor="name"
            className="tracking-wide block text-md font-medium "
          >
            {t('name')}
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            defaultValue={guestName || ''}
            required
            className="capitalize text-xl w-full outline-0 focus:bg-[rgba(255,255,255,0.1)]  pl-4 border-b-[1px] border-[rgba(0,0,0,0.2)] focus:border-[rgba(255,255,255,0.5)] duration-200"
          />
        </div>
        <div className="">
          <label
            htmlFor="email"
            className="tracking-wide block text-md font-medium "
          >
            {t('email')}
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="text-xl w-full outline-0 focus:bg-[rgba(255,255,255,0.1)]  pl-4 border-b-[1px] border-[rgba(0,0,0,0.2)] focus:border-[rgba(255,255,255,0.5)] duration-200"
          />
        </div>
        <div className="">
          <label
            htmlFor="message"
            className="tracking-wide block text-md font-medium "
          >
            {t('message')}
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            className="text-xl  mt-1  focus:bg-[rgba(255,255,255,0.1)] block w-full px-3 py-2 border-[1px] border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(255,255,255,0.5)]"
          ></textarea>
        </div>
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
