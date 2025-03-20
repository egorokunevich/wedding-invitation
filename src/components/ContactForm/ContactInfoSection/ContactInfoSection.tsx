import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

const ContactInfoSection = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const guestName = searchParams.get('name');

  return (
    <>
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
    </>
  );
};

export default ContactInfoSection;
