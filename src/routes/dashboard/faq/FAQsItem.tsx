import React, { FC } from 'react';
import { ILanguage } from 'src/interface/common';
import { selectLanguage } from 'src/utils/stringManipulation';

interface ISupportItemProps {
  category: string;
  question: ILanguage;
  answer: ILanguage;
}

const FAQsItem: FC<ISupportItemProps> = props => {
  const { category, question, answer } = props;
  return (
    <li className={`mb-5 ${question.np && answer.np ? 'notranslate' : ''}`}>
        <div className="font-18 mb-2">{selectLanguage(question)}</div>
        <div className="" dangerouslySetInnerHTML={{  __html: selectLanguage(answer) }} />
    </li>
  );
};

export default FAQsItem;
