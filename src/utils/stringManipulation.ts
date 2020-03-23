export function setCommas(input: number) {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const pluralize = (count: number, text: string) => {
  if (count === 1) {
    return text;
  } else {
    return text + 's';
  }
};
