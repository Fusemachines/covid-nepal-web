import React, { FC } from 'react';

interface IEmergencyButtonProps {
  text: string;
  handleClick: () => void;
  className: string;
}

const EmeergencyButton: FC<IEmergencyButtonProps> = props => {
  const { text, handleClick } = props;

  return (
    <div className={`emg-call mr-2 ${props.className}`} role="group" onClick={() => handleClick()}>
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18.491" height="18.483" viewBox="0 0 18.491 18.483">
          <path
            id="Path_34"
            data-name="Path 34"
            d="M96.67,239.322c-.319-.07-.642-.126-.957-.211a16.573,16.573,0,0,1-7.945-4.778,24.951,24.951,0,0,1-2.319-2.78,14.031,14.031,0,0,1-1.718-3.63,14.809,14.809,0,0,1-.55-1.931,4.5,4.5,0,0,1,.489-2.908c.065-.13.141-.254.2-.385a3.266,3.266,0,0,1,3.077-1.859.628.628,0,0,1,.627.338c.258.45.505.907.766,1.356.4.693.815,1.38,1.223,2.07.051.085.1.169.153.256a.7.7,0,0,1-.1.907c-.3.311-.629.6-.952.892-.306.277-.624.539-.93.817a.656.656,0,0,0-.164.887c.522.861,1.017,1.744,1.6,2.559a12.2,12.2,0,0,0,4,3.446c.319.18.639.357.964.524a.582.582,0,0,0,.733-.128c.286-.3.555-.609.831-.916.291-.323.564-.666.878-.966a.758.758,0,0,1,1.094-.106q1.644.953,3.289,1.906c.637.369.706.5.571,1.222-.062.329-.147.654-.225.98a2.009,2.009,0,0,1-.79,1.147,5.868,5.868,0,0,1-2.86,1.253.288.288,0,0,0-.08.038Z"
            transform="translate(-83.111 -220.839)"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default EmeergencyButton;
