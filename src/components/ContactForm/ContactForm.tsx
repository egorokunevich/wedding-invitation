import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import Section from '../Section/Section';
import toast from 'react-hot-toast';
import AcceptInvitationSection, {
  AcceptionOptions,
} from './AcceptInvitationSection/AcceptInvitationSection';
import FoodPreferenceSection, {
  FoodPreference,
} from './FoodPreferenceSection/FoodPreferenceSection';
import ContactInfoSection from './ContactInfoSection/ContactInfoSection';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const ContactForm = () => {
  const t = useTranslations();
  const form = useRef<HTMLFormElement>(null);
  const [selectedAccept, setSelectedAccept] = useState<AcceptionOptions>('yes');
  const [foodPreferences, setFoodPreferences] = useState<FoodPreference[]>([]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const convertedFormData = Object.fromEntries(formData.entries());

      const preferredFood = foodPreferences
        .filter((item) => item.preference)
        .map((item) => item.value);

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
          <AcceptInvitationSection
            selectedAccept={selectedAccept}
            setAcception={setSelectedAccept}
          />
        </div>

        <ContactInfoSection />
        {/* Food */}
        <FoodPreferenceSection setPreferences={setFoodPreferences} />
        {/* Submit */}
        <button
          type="submit"
          className="font-Classic text-BLACK uppercase hover:text-WHITE w-full h-12 cursor-pointer hover:bg-ACCENT duration-200 flex items-center justify-center  text-xl tracking-wide border-[1px] border-ACCENT bg-WHITE"
        >
          {t('send')}
        </button>
      </form>
    </Section>
  );
};

export default ContactForm;
