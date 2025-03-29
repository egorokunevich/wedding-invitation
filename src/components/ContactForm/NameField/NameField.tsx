import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

const NameField = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const guestName = searchParams.get('name');

  return (
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
  );
};

export default NameField;
