import * as React from "react";
import { translateNumbersInString } from "src/utils/translate";

const TranslateNumber: React.SFC<{ originalString: string; language: string }> = ({ originalString, language }) => {
  if (language == "ne") {
    return <span className="notranslate">{translateNumbersInString(originalString)}</span>;
  } else {
    return <>{originalString}</>;
  }
};

export default TranslateNumber;
