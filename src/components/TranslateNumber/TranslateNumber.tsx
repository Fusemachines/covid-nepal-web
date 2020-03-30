import React, { FC } from "react";
import { translateNumbersToNepali } from "src/utils/translate";

const TranslateNumber: FC<{ originalValue: string | number ; language: string }> = ({ originalValue, language }) => {
  if (language == "ne") {
    return <span className="notranslate">{translateNumbersToNepali(originalValue)}</span>;
  } else {
    return <>{originalValue}</>;
  }
};

export default TranslateNumber;
