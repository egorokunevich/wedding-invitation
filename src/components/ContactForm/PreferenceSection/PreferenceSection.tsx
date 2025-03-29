import Divider from '@/components/Divider/Divider';
import { Preference } from '@/utils/types';

interface IPreferenceSectionProps {
  setPreferences: React.Dispatch<React.SetStateAction<Preference[]>>;
  variants: Preference[];
  sectionTitle: string;
  emailJsVariableName: string;
  dividerTop?: boolean;
  dividerBottom?: boolean;
}

const PreferenceSection = ({
  setPreferences,
  emailJsVariableName,
  sectionTitle,
  variants,
  dividerTop,
  dividerBottom,
}: IPreferenceSectionProps) => {
  const handleCheck = ({ value, preference, name }: Preference) => {
    const getFilteredList = (list: Preference[]): Preference[] => {
      const filteredList = list.filter((item) => item.value !== value);
      return [...filteredList, { value, preference, name }];
    };
    setPreferences((prev) => getFilteredList(prev));
  };

  const createCheckbox = (value: string, label: string) => {
    return (
      <div
        key={value}
        className="check-input flex items-center group cursor-pointer"
      >
        <div className="input-wrapper relative w-8 h-8 md:w-6 md:h-6">
          <input
            type="checkbox"
            id={value}
            name={emailJsVariableName}
            onChange={(event) =>
              handleCheck({
                value,
                preference: event.target.checked,
                name: label,
              })
            }
            className="relative cursor-pointer peer shrink-0 appearance-none w-8 h-8 md:w-6 md:h-6 border-[1px] border-BLACK bg-transparent checked:bg-ACCENT checked:border-transparent"
          />
        </div>
        <label
          htmlFor={value}
          className="w-full pl-2 flex select-none items-center cursor-pointer"
        >
          {label}
        </label>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {dividerTop && <Divider />}

      <p>{sectionTitle}</p>
      <div className="grid grid-cols-2 gap-2">
        {variants.map((variant) => createCheckbox(variant.value, variant.name))}
      </div>

      {dividerBottom && <Divider />}
    </div>
  );
};

export default PreferenceSection;
