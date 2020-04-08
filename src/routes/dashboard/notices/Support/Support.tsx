import React, { FC, useState, useEffect } from "react";

import SupportItem from "./SupportItem";
import { INotices, fetchSupportAPI } from "src/services/notices";

import Loader from 'src/components/Loader';

const Supports: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [support, setSupports] = useState<Array<INotices> | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    fetchSupports();
  }, []);

  
  const fetchSupports = async () => {
    try {
      const response = await fetchSupportAPI();
      setSupports(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  return (
    <ul className="resources__list">
      { isLoaded ? ( support && support.map(support => (
        <SupportItem key={support._id} title={support.title} url={support.url} imageUrl={support.imageUrl} />
      ))) : (
        <Loader />
      )}
    </ul>
  );
};

export default Supports;
