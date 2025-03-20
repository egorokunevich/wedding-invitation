import Divider from '@/components/Divider/Divider';

export type FoodPreference = { value: string; preference: boolean };

interface IFoodPreferenceSectionProps {
  setPreferences: React.Dispatch<React.SetStateAction<FoodPreference[]>>;
}

const FoodPreferenceSection = ({
  setPreferences,
}: IFoodPreferenceSectionProps) => {
  const handleFoodCheck = ({ value, preference }: FoodPreference) => {
    const getFilteredList = (list: FoodPreference[]): FoodPreference[] => {
      const filteredList = list.filter((item) => item.value !== value);
      return [...filteredList, { value, preference }];
    };
    setPreferences((prev) => getFilteredList(prev));
  };

  const createFoodCheckbox = (value: string, label: string) => {
    return (
      <div className="check-input flex gap-2 items-center group cursor-pointer">
        <div className="input-wrapper relative w-8 h-8 md:w-6 md:h-6">
          <input
            type="checkbox"
            id={value}
            name="food_preferences"
            onChange={(event) =>
              handleFoodCheck({ value, preference: event.target.checked })
            }
            className="relative cursor-pointer peer shrink-0 appearance-none w-8 h-8 md:w-6 md:h-6 border-[1px] border-BLACK bg-transparent checked:bg-ACCENT checked:border-transparent"
          />
        </div>
        <label
          htmlFor={value}
          className="w-full flex items-center cursor-pointer"
        >
          {label}
        </label>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <Divider />
      <p>Укажите Ваши предпочтения в еде, если для Вас это имеет значение</p>
      <div className="grid grid-cols-2 gap-2">
        {createFoodCheckbox('fish', 'Рыба')}
        {createFoodCheckbox('chiken', 'Курица')}
        {createFoodCheckbox('pork', 'Свинина')}
        {createFoodCheckbox('beef', 'Говядина')}
      </div>
    </div>
  );
};

export default FoodPreferenceSection;
