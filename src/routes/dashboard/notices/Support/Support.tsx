import React, { FC, useState, useEffect } from "react";

// import support from "src/constants/notices/support.json";
import SupportItem from "./SupportItem";
import { INotices, fetchSupportAPI } from "src/services/notices";
import { useTranslation } from "react-i18next";

const Supports: FC<{}> = () => {
  const [t] = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [support, setSupports] = useState<Array<INotices> | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    fetchSupports();
  }, []);

  
  const fetchSupports = async () => {
    try {
      const response = await fetchSupportAPI();
      // console.log(response);
      setSupports(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  return (
    <ul className="resources__list">
      { support && support.map(support => (
        <SupportItem key={support._id} title={support.title} url={support.url} imageUrl={support.imageUrl} />
      ))}
    </ul>
  );
};

export default Supports;
