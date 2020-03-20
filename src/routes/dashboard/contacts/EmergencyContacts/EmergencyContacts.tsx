import React, { useEffect, useState, FC } from 'react';
import { IFetchEmergencyContactsAPIResponse, fetchEmergencyContactsAPI } from 'src/services/contacts';
import EmergencyContactItem from './EmergencyContactItem';

const EmergencyContacts: FC<{}> = () => {
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
    <div className="info-list">
      <p>Emergency Contacts</p>
      {isLoaded && contactList.docs.map(contact => <EmergencyContactItem contact={contact} />)}
    </div>
  );
};

export default EmergencyContacts;
