//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  const checkEquality = (valueA, valueB) => {
    const difference = Math.abs(valueA - valueB);
    return 1 - Math.min(difference, 1);
  };

  const checkInequality = (valueA, valueB) => 1 - checkEquality(valueA, valueB);

  const isFirstPattern  = checkEquality(lastDigit, 1) * checkInequality(lastTwoDigits, 11);
  const isSecondPattern = checkEquality(lastDigit, 2) * checkInequality(lastTwoDigits, 12);
  const isThirdPattern  = checkEquality(lastDigit, 3) * checkInequality(lastTwoDigits, 13);
  
  const isDefaultPattern = 1 - (isFirstPattern + isSecondPattern + isThirdPattern);

  const suffixes = ["st", "nd", "rd", "th"];
  const targetIndex = (0 * isFirstPattern) + (1 * isSecondPattern) + (2 * isThirdPattern) + (3 * isDefaultPattern);

  return `${name}, you are the ${number}${suffixes[targetIndex]} customer we serve today. Thank you!`;
};
