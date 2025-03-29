import { useTranslations } from 'next-intl';

const ContactInfoSection = () => {
  const t = useTranslations();

  return (
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
  );
};

export default ContactInfoSection;
