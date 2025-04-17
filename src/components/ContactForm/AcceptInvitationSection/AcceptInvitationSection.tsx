import { useTranslations } from 'next-intl';

export type AcceptionOptions = 'yes' | 'no';

interface IAcceptInvitationSectionProps {
  selectedAccept: AcceptionOptions;
  setAcception: (acception: AcceptionOptions) => void;
}

const AcceptInvitationSection = ({
  selectedAccept,
  setAcception,
}: IAcceptInvitationSectionProps) => {
  const t = useTranslations();

  const handleSelect = (value: AcceptionOptions) => {
    setAcception(value);
  };

  const createAcceptInput = (value: AcceptionOptions, label: string) => {
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
          onChange={() => handleSelect(value as AcceptionOptions)}
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

  return (
    <div className="flex flex-col gap-4">
      <label className="tracking-wide block text-md font-light ">
        {t('acceptInfo')}
      </label>
      <div className="flex w-full">
        {createAcceptInput('yes', t('yes'))}
        {createAcceptInput('no', t('no'))}
      </div>
    </div>
  );
};

export default AcceptInvitationSection;
