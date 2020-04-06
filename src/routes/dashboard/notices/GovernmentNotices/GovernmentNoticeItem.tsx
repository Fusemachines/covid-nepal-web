import React, { FC } from 'react';
import { getLiteralDate } from "src/utils/date";

interface IGovernmentNoticeItemProps {
  key: string;
  url: string;
  title: string;
  category: string;
  date: string;
}

const GovernmentNoticeItem: FC<IGovernmentNoticeItemProps> = props => {
  const { key, url, title, category, date } = props;

  return (
    <li key={key}>
      <a href={url} className="p-3" target="_blank" rel="noopener noreferrer">
        <h5 className="notices__title">{title}</h5>
        <div className="notices__tag mr-3">
          <img src="/images/tag.svg" alt={'Tag'} />
          <span>{category}</span>
        </div>
        <div className="notices__date">
          <img src="/images/history.svg" alt={'History'} />
          <span>{getLiteralDate(date)}</span>
        </div>
      </a>
    </li>
  );
};

export default GovernmentNoticeItem;
