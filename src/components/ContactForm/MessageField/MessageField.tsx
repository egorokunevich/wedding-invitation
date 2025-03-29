import { useTranslations } from 'next-intl';

const MessageField = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col-reverse">
      <textarea
        name="message"
        id="message"
        rows={4}
        className="peer text-xl resize-none mt-1 focus:bg-[rgba(255,255,255,0.1)] block w-full px-3 py-2 border-[1px] border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-ACCENT"
      ></textarea>
      <label
        htmlFor="message"
        className="tracking-wide block text-md font-medium text-DARK_GRAY peer-focus:text-black"
      >
        {t('message')}
      </label>
    </div>
  );
};

export default MessageField;
