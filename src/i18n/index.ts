import engDictionary from './en';
import nepDictionary from './ne';

const configLanguage = () => {
  if (window.location.search.includes('np')) return nepDictionary;
  else return engDictionary;
};

export default configLanguage;
