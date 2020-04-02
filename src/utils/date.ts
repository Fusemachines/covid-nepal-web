export const getFormattedTime = (timeInSeconds: number) => {
  const days = Math.floor(Number(timeInSeconds) / (3600 * 24)); 
  const hours = Math.floor((Number(timeInSeconds) % (3600 * 24)) / 3600); 
  const minutes = Math.floor((Number(timeInSeconds) % 3600) / 60); 
  const seconds = Math.floor(Number(timeInSeconds) % 60); 
  return { days, hours, minutes, seconds };
};
