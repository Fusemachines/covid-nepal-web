import React, { FC } from 'react';

const colors = {
  success: '#8aca2b',
  warning: '#fedb41',
  danger: '#e42929'
};

export const TextCaptionIcon: FC<{ type: string }> = ({ type }) => {
  let color;
  if (type === 'success') {
    color = colors.success;
  } else if (type === 'warning') {
    color = colors.warning;
  } else {
    color = colors.danger;
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11.192" height="11" viewBox="0 0 11.192 11">
      <g id="Group_99" data-name="Group 99" transform="translate(-381 -206)">
        <circle
          id="Ellipse_5"
          data-name="Ellipse 5"
          cx="5.5"
          cy="5.5"
          r="5.5"
          transform="translate(381 206)"
          fill={color}
          opacity="0.2"
        />
        <g id="Group_70" data-name="Group 70" transform="translate(219.365 -207.365) rotate(45)">
          <line
            id="Line_10"
            data-name="Line 10"
            y2="7"
            transform="translate(414.5 174.5)"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-width="1"
          />
          <line
            id="Line_11"
            data-name="Line 11"
            x1="3"
            y2="3"
            transform="translate(411.5 174.5)"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-width="1"
          />
          <line
            id="Line_12"
            data-name="Line 12"
            x2="3"
            y2="3"
            transform="translate(414.5 174.5)"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-width="1"
          />
        </g>
      </g>
    </svg>
  );
};
