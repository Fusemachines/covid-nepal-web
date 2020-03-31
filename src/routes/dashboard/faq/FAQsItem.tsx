import React, { FC } from 'react';

interface ISupportItemProps {
  category: string;
  question: string;
  answer: string;
}

const FAQsItem: FC<ISupportItemProps> = props => {
  const { category, question, answer } = props;
  return (
    <li className="mb-5">
        <div className="font-18 mb-2">{question}</div>
        <div className="" dangerouslySetInnerHTML={{  __html: answer }} />
    </li>
  );
};

export default FAQsItem;
