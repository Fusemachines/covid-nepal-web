import React, { useState, useEffect } from "react";
import TipsCard from "src/components/TipsCard";
import { INews, fetchTipsAPI, fetchTopNewsAPI } from "src/services/news";

const TopNewsTips = () => {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [topNews, setTopNews] = useState<INews | null>(null);
  const [tipsList, setTipsList] = useState<Array<INews> | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    fetchTopNews();
    fetchTips();
  }, []);

  const fetchTopNews = async () => {
    try {
      const response = await fetchTopNewsAPI();
      setTopNews(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  const fetchTips = async () => {
    try {
      const response = await fetchTipsAPI();
      setTipsList(response.docs);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  return (
    <>
      <div className="mb-3">
        <div className="title">COVID-19 Top News</div>
      </div>

      {topNews && (
        <div className="main-news bg-white mb-4">
          <img src={topNews.imageUrl} alt="" className="img-fluid mx-auto d-block" />
          <div className="p-4">
            <div className="font-14">{topNews.title}</div>
            <div className="small-xs text-light">
              <span>{topNews.source}</span>
              <span className="mx-1">|</span> <span>{topNews.uploadedAt}</span>
            </div>
          </div>
        </div>
      )}

      <div className="news-block bg-white">
        <div className="bg-grey text-primary p-2">TIPS</div>
        <div className="news-list px-3">
          {tipsList &&
            tipsList.map(tip => <TipsCard title={tip.title} createdAt={tip.uploadedAt} imageUrl={tip.imageUrl} />)}
        </div>
      </div>
    </>
  );
};

export default TopNewsTips;
