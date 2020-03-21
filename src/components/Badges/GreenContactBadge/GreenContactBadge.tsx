import React, { FC } from 'react';

interface IGreenContactBadgeProps {
  contactNumber: string;
}

const GreenContactBadge: FC<IGreenContactBadgeProps> = props => {
  const { contactNumber } = props;

  return (
    <span className="mx-2 bg-success rounded py-1 px-2">
      <svg
        id="Group_16"
        data-name="Group 16"
        xmlns="http://www.w3.org/2000/svg"
        width="98"
        height="18"
        viewBox="0 0 98 18"
      >
        <path
          id="Icon_material-call"
          data-name="Icon material-call"
          d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
          transform="translate(-1.75 2.25)"
          fill="#fff"
        />
        <text
          id="_01-4253396"
          data-name="01-4253396"
          transform="translate(18)"
          fill="#fff"
          font-size="13"
          font-family="OpenSans-Regular, Open Sans"
        >
          <tspan x="0" y="14">
            {contactNumber}
          </tspan>
        </text>
      </svg>
    </span>
  );
};

export default GreenContactBadge;
