import React, { useEffect, useState, FC } from 'react';

import { fetchSampleAPI, IFetchSampleAPIResponse } from 'src/services/sampleService';

const SampleComponent: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsList, setNewsList] = useState<IFetchSampleAPIResponse>({} as IFetchSampleAPIResponse);

  useEffect(() => {
    fetchEmergencyContacts();
  }, []);

  const fetchEmergencyContacts = async () => {
    try {
      const response: IFetchSampleAPIResponse = await fetchSampleAPI();
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
