import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const ContactForm = ({ guestName }: { guestName: string | null }) => {
  const form = useRef<HTMLFormElement>(null);
  const [selectedAccept, setSelectedAccept] = useState<string>('yes');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      console.log(form.current);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Service ID
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Template ID
          form.current,
        )
        .then(
          result => {
            console.log('Email sent successfully!', result.text);
            alert('Message sent successfully!');
          },
          error => {
            console.error('Failed to send email:', error.text);
            alert('Failed to send message. Please try again.');
          },
        );

      //   e.currentTarget.reset(); // Reset the form after submission
    }
  };

  const createAcceptInput = (value: string, label: string) => {
    return (
      <div
        className={`w-full h-12 group border-b-[2px]  duration-200  ${
          selectedAccept === value ? ' border-white' : 'border-transparent'
        } hover:border-[rgba(255,255,255,0.5)] overflow-visible`}>
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
          className=" text-white text-xl flex justify-center items-center h-full w-full cursor-pointer group-hover:bg-[rgba(255,255,255,0.1)] duration-200">
          {label}
        </label>
      </div>
    );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="font-MeaCulpa max-w-lg mx-auto bg-[rgba(0,0,0,0.2)] w-full px-4 md:px-12 py-6 flex flex-col gap-5">
      <h2 className="text-white text-2xl">
        Please, contact us with information about your decision!
      </h2>
      <div className="flex flex-col gap-1.5">
        <label className="block text-md font-medium text-white">
          Would you like to share this moment with us?
        </label>
        <div className="flex w-full">
          {createAcceptInput('yes', 'Yes')}
          {createAcceptInput('no', 'No')}
        </div>
      </div>
      <div className="">
        <label htmlFor="name" className="block text-md font-medium text-white">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          id="name"
          defaultValue={guestName || ''}
          required
          className="capitalize text-xl w-full outline-0 text-white pl-4 border-b-[1px] border-[rgba(0,0,0,0.2)] focus:border-[rgba(255,255,255,0.5)] duration-200"
        />
      </div>
      <div className="">
        <label htmlFor="email" className="block text-md font-medium text-white">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="email"
          required
          className="text-xl w-full outline-0 text-white pl-4 border-b-[1px] border-[rgba(0,0,0,0.2)] focus:border-[rgba(255,255,255,0.5)] duration-200"
        />
      </div>
      <div className="">
        <label htmlFor="message" className="block text-md font-medium text-white">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="text-xl text-white mt-1 block w-full px-3 py-2 border-[1px] border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(255,255,255,0.5)]"></textarea>
      </div>
      <button
        type="submit"
        className="font-Classic w-full h-12 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] duration-200 flex items-center justify-center text-white text-xl tracking-wide  bg-[rgba(0,0,0,0.2)]">
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
