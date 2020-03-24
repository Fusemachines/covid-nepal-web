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
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="20.571" className="mr-1" height="18" viewBox="0 0 20.571 18">
        <path
          id="Path_647"
          data-name="Path 647"
          d="M-699.588,87.078h-8.94a1.27,1.27,0,0,1-1.171-1.9c.477-.885,1.008-1.74,1.514-2.609q1.72-2.95,3.44-5.9,2.014-3.451,4.033-6.9a1.277,1.277,0,0,1,2.267.007c1.121,1.907,2.232,3.82,3.348,5.729q1.735,2.968,3.471,5.935c.709,1.214,1.413,2.43,2.126,3.642a1.305,1.305,0,0,1-1.168,2C-693.641,87.067-696.615,87.078-699.588,87.078Zm1.294-9.626c0-.648.006-1.3,0-1.945a1.3,1.3,0,0,0-1.293-1.277,1.293,1.293,0,0,0-1.275,1.277q-.011,1.925,0,3.85a1.231,1.231,0,0,0,.611,1.1,1.212,1.212,0,0,0,1.274.041,1.245,1.245,0,0,0,.682-1.159C-698.289,78.709-698.294,78.081-698.294,77.453Zm-1.288,7.056a1.3,1.3,0,0,0,1.288-1.282,1.3,1.3,0,0,0-1.264-1.287,1.3,1.3,0,0,0-1.307,1.283A1.3,1.3,0,0,0-699.583,84.509Z"
          transform="translate(709.868 -69.084)"
          fill="#fff"
        />
      </svg> */}
      {text}
    </div>
  );
};

export default TransparentButton;
