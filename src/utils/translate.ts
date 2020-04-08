export function translateNumbersToNepali(originalValue: string | number) {
  let newString = '';
  if(typeof originalValue === 'number'){
    originalValue = originalValue.toString();
  }
  for (let i = 0; i < originalValue.length; i++) {
    newString += mapToNepaliNumberCharacters(originalValue[i]);
  }
  return newString;
}

function mapToNepaliNumberCharacters(originalString: string): string {
  switch (originalString) {
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
      return originalString;
  }
}
