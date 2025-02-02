function isLeap(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function cleanDate(date: string): Date {
  const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
  const matched = date.match(dateRegex);

  if (matched) {
    const [, day, month, year] = matched;
    return new Date(Date.parse(`${month} ${day} ${year}`));
  }

  return new Date(1);
}

const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

/**
 * Write a function to calculate the days left until the next New Year's eve of a leap year (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  const date: Date = typeof targetDate === 'string' ? cleanDate(targetDate) : targetDate;

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  const year: number = date.getFullYear();

  let nextYear = year + 1;

  while (!isLeap(nextYear)) {
    nextYear += 1;
  }

  const resultDate = new Date(nextYear, 0, 1);

  const differenceInMilliseconds = resultDate.getTime() - date.getTime();

  return Math.ceil(differenceInMilliseconds / MILLISECONDS_IN_DAY) - 1;
};