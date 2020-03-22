import React, { FC } from 'react';
import { IContact } from 'src/services/contacts';

interface IEmergencyContactItemProps {
  contact: IContact;
}

const EmergencyContactItem: FC<IEmergencyContactItemProps> = props => {
  const { contact } = props;

  return (
    <div className="info-item py-3 mt-2">
      <div className="font-16">
        {contact.name} | {contact.openingTime} - {contact.closingTime}
      </div>
      {contact.mobile.map(mobile => (
        <a className="rounded btn-success px-3 py-1 mx-2 btn my-2" href={`tel:${mobile}`}>
          <i className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
              <path
                id="Icon_material-call"
                data-name="Icon material-call"
                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                transform="translate(-1.75 -1.75)"
                fill="#ffffff"
              />
            </svg>
          </i>
          {mobile}
        </a>
      ))}
      {contact.landLine.map(mobile => (
        <a className="rounded btn-success px-3 py-1 mx-2 btn my-2" href={`tel:${mobile}`}>
          <i className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
              <path
                id="Icon_material-call"
                data-name="Icon material-call"
                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                transform="translate(-1.75 -1.75)"
                fill="#ffffff"
              />
            </svg>
          </i>
          {mobile}
        </a>
      ))}
    </div>
  );
};

export default EmergencyContactItem;
