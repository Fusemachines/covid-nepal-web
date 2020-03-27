export const getFormattedTime = (timeInSeconds: number) => {
  const days = Math.round(timeInSeconds / (3600 * 24)); // in days
  const hours = Math.round(timeInSeconds / 3600); //in hours
  const minutes = Math.round(timeInSeconds / 60); //in minutes
  const seconds = Math.round(timeInSeconds); //in minutes
  return { days, hours, minutes, seconds };
};
