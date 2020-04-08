import React, { FC } from 'react';

interface ITransparentButton {
  text: string;
  icon?: string;
  handleClick: () => void;
  active: boolean;
}

const TransparentButton: FC<ITransparentButton> = props => {
  const { text, handleClick, active } = props;

  return (
    <div className={`${active ? 'active' : ''}`} onClick={() => handleClick()}>
      {text}
    </div>
  );
};

export default TransparentButton;
