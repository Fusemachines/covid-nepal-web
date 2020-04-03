import { monthList } from "src/constants/options";

export const getFormattedTime = (timeInSeconds: number) => {
  const days = Math.floor(Number(timeInSeconds) / (3600 * 24)); 
  const hours = Math.floor((Number(timeInSeconds) % (3600 * 24)) / 3600); 
  const minutes = Math.floor((Number(timeInSeconds) % 3600) / 60); 
  const seconds = Math.floor(Number(timeInSeconds) % 60); 
  return { days, hours, minutes, seconds };
};

// return date in "month day, year" format i.e. "March 22, 2020"
export const getLiteralDate = (date: string) => {
  const fullDate = new Date(date);
  const month = monthList[fullDate.getMonth()];
  const day = fullDate.getDate();
  const year = fullDate.getFullYear();
  return `${month} ${day}, ${year}`;
};