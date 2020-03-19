import React, { useEffect, useState, FC } from 'react';

import { fetchEmergencyContactsAPI, IFetchEmergencyContactsAPIResponse } from 'src/services/emergencyContacts';

const SampleComponent: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsList, setNewsList] = useState<IFetchEmergencyContactsAPIResponse>(
    {} as IFetchEmergencyContactsAPIResponse
  );

  useEffect(() => {
    fetchEmergencyContacts();
  }, []);

  const fetchEmergencyContacts = async () => {
    try {
      const response: IFetchEmergencyContactsAPIResponse = await fetchEmergencyContactsAPI();
      setNewsList(response);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoaded ? (
        newsList.hits.map((news, index) => {
          return (
            <li key={index}>
              {news.title} - by {news.author}{' '}
            </li>
          );
        })
      ) : (
        <b>Loading...</b>
      )}
    </>
  );
};

export default SampleComponent;
