import React, { useEffect, useState, FC } from 'react';
import { IFetchEmergencyContactsAPIResponse, fetchEmergencyContactsAPI } from 'src/services/emergencyContacts';
import EmergencyContactItem from './EmergencyContactItem';

interface IEmergencyContactsProps {
  visibility: boolean;
  toggleSidebar: () => void;
}

const EmergencyContacts: FC<IEmergencyContactsProps> = props => {
  const { visibility, toggleSidebar } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [contactList, setContactList] = useState<IFetchEmergencyContactsAPIResponse>(
    {} as IFetchEmergencyContactsAPIResponse
  );

  useEffect(() => {
    fetchEmergencyContacts();
  }, []);

  const fetchEmergencyContacts = async () => {
    try {
      const response: IFetchEmergencyContactsAPIResponse = await fetchEmergencyContactsAPI();
      setContactList(response);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`right-bar ${visibility ? 'show' : ''}`}>
      <div className="p-3" onClick={() => toggleSidebar()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.207" height="18.557" viewBox="0 0 21.207 18.557">
          <g id="Group_86" data-name="Group 86" transform="translate(195 -410.793) rotate(90)">
            <line
              id="Line_10"
              data-name="Line 10"
              y2="20"
              transform="translate(420.071 174.5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="1"
            />
            <line
              id="Line_11"
              data-name="Line 11"
              x1="8.571"
              y2="8.571"
              transform="translate(411.5 174.5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="1"
            />
            <line
              id="Line_12"
              data-name="Line 12"
              x2="8.571"
              y2="8.571"
              transform="translate(420.071 174.5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="1"
            />
          </g>
        </svg>
      </div>

      <div className="px-5">
        <div className="h4">Emergency Contacts</div>
        <div className="info-list">
          {isLoaded && contactList.docs.map(contact => <EmergencyContactItem contact={contact} />)}
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
