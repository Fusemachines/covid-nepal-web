export function setCommas(input: number) {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
