export const getCapitalizedGuestName = (guestName: string) => {
  if (!guestName) {
    return '';
  }

  return guestName
    ?.split(' ')
    .map((word) => {
      if (word.length === 1) {
        return word.toLowerCase();
      }

      const firstLetter = word[0].toUpperCase();
      const restLetters = word.slice(1).toLowerCase();
      const capitalizedWord = firstLetter + restLetters;
      return capitalizedWord;
    })
    .join(' ');
};
