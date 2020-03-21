import React, { FC } from 'react';
import UpRightArrow from '../Icons/UpRightArrow';
import DownLeftArrow from '../Icons/DownLeftArrow';

interface ITextCaption {
  type: string;
  value: string;
}

const TextCaption: FC<ITextCaption> = ({ type, value }) => {
  return (
    <div className={`text-${type} d-inline-block`}>
      <span className="mx-2">{type === 'danger' ? <DownLeftArrow /> : <UpRightArrow type={type} />}</span>
      <small>{value}%</small>
    </div>
  );
};

export default TextCaption;
