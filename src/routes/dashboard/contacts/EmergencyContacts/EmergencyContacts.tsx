import React, { useEffect, useState, FC } from 'react';
import { IFetchContactsAPIResponse, fetchEmergencyContactsAPI } from 'src/services/contacts';
import EmergencyContactItem from './EmergencyContactRecords';

const EmergencyContacts: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contactList, setContactList] = useState<IFetchContactsAPIResponse>({} as IFetchContactsAPIResponse);

  useEffect(() => {
    fetchEmergencyContacts();
  }, []);

  const fetchEmergencyContacts = async () => {
    try {
      const response: IFetchContactsAPIResponse = await fetchEmergencyContactsAPI();
      setContactList(response);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="info-list">
      {isLoaded && contactList.docs.map(contact => <EmergencyContactItem contact={contact} />)}
    </div>
  );
};

export default EmergencyContacts;
