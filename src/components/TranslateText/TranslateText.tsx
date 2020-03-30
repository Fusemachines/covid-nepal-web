import * as React from 'react';

const TranslateText: React.SFC<{ originalString: string; converedString?: string; language: string }> = ({ originalString, converedString, language }) => {
  if (language == 'ne') {
    return (
      <React.Fragment>
        <span className="notranslate">{converedString || originalString}</span>
      </React.Fragment>
    );
  } else {
    return <React.Fragment>{originalString}</React.Fragment>;
  }
};

export default TranslateText;
