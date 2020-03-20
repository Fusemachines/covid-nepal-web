import React, { FC } from 'react';
import { TextCaptionIcon } from './TextCaptionIcons';

interface ITextCaption {
  type: string;
  value: string;
}

const TextCaption: FC<ITextCaption> = props => {
  return (
    <div className={`h6 text-${props.type}`}>
      <span className="mr-2">
        <TextCaptionIcon type={props.type} />
      </span>
      {props.value}%
    </div>
  );
};

export default TextCaption;
