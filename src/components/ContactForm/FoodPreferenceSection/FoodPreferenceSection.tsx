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
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={value}
          name="food_preferences"
          onChange={(event) =>
            handleFoodCheck({ value, preference: event.target.checked })
          }
          className="relative peer shrink-0 appearance-none w-4 h-4 border-[1px] border-BLACK bg-transparent checked:bg-ACCENT checked:border-0"
        />
        <label htmlFor={value}>{label}</label>
      </div>
    );
  };

  return (
    <div>
      {createFoodCheckbox('fish', 'Рыба')}
      {createFoodCheckbox('chiken', 'Курица')}
      {createFoodCheckbox('pork', 'Свинина')}
      {createFoodCheckbox('beef', 'Говядина')}
    </div>
  );
};

export default FoodPreferenceSection;
