import Divider from '@/components/Divider/Divider';
import { Preference } from '@/utils/types';

interface IDrinkPreferenceSectionProps {
  setPreferences: React.Dispatch<React.SetStateAction<Preference[]>>;
}

const DrinkPreferenceSection = ({
  setPreferences,
}: IDrinkPreferenceSectionProps) => {
  const handleCheck = ({ value, preference }: Preference) => {
    const getFilteredList = (list: Preference[]): Preference[] => {
      const filteredList = list.filter((item) => item.value !== value);
      return [...filteredList, { value, preference }];
    };
    setPreferences((prev) => getFilteredList(prev));
  };

  const createCheckbox = (value: string, label: string) => {
    return (
      <div className="check-input flex items-center group cursor-pointer">
        <div className="input-wrapper relative w-8 h-8 md:w-6 md:h-6">
          <input
            type="checkbox"
            id={value}
            name="drink_preferences"
            onChange={(event) =>
              handleCheck({ value, preference: event.target.checked })
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
      <Divider />
      <p>Ваши предпочтения в напитках</p>
      <div className="grid grid-cols-2 gap-2">
        {createCheckbox('fish', 'Рыба')}
        {createCheckbox('chiken', 'Курица')}
        {createCheckbox('pork', 'Свинина')}
        {createCheckbox('beef', 'Говядина')}
      </div>
    </div>
  );
};

export default DrinkPreferenceSection;
