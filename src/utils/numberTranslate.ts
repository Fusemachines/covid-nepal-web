import { getlocalStorage } from "./storage";

const numberToNepali = (number: number) => {
  const numbers: any = {
    0: '०',
    '०': '०',
    1: '१',
    '१': '१',
    2: '२',
    '२': '२',
    3: '३',
    '३': '३',
    4: '४',
    '४': '४',
    5: '५',
    '५': '५',
    6: '६',
    '६': '६',
    7: '७',
    '७': '७',
    8: '८',
    '८': '८',
    9: '९',
    '९': '९',
    o: '०',
  };
  const numberArray = number.toString().split('');
  const nepaliNumber = numberArray.map(value => (typeof (numbers[value]) === 'undefined' ? value : numbers[value]));
  return nepaliNumber.join('');
}

const numberToEnglish = (number: number) => {
  const numbers: any = {
    '०': 0,
    0: 0,
    '१': 1,
    1: 1,
    '२': 2,
    2: 2,
    '३': 3,
    3: 3,
    '४': 4,
    4: 4,
    '५': 5,
    5: 5,
    '६': 6,
    6: 6,
    '७': 7,
    7: 7,
    '८': 8,
    8: 8,
    '९': 9,
    9: 9,
  };
  const numberArray = number.toString().split('');
  const nepaliNumber = numberArray.map(value => (typeof (numbers[value]) === 'undefined' ? value : numbers[value]));
  return nepaliNumber.join('');
}

export default function numberTransCheck(number: any) {
  const lang = getlocalStorage('covLang');

  if (lang === 'ne' && number) {
    return numberToNepali(parseInt(number));
  } else return number
}
