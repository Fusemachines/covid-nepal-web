export function translateNumbersInString(originalString: string) {
  let newString = '';
  for (let i = 0; i < originalString.length; i++) {
    newString += translateNumberCharacter(originalString[i]);
  }
  return newString;
}

function translateNumberCharacter(o: string): string {
  switch (o) {
    case '0':
      return '०';
    case '1':
      return '१';
    case '2':
      return '२';
    case '3':
      return '३';
    case '4':
      return '४';
    case '5':
      return '५';
    case '6':
      return '६';
    case '7':
      return '७';
    case '8':
      return '८';
    case '9':
      return '९';
    default:
      return o;
  }
}
