import React, { useState, useEffect } from "react";
import NewsCard from "src/components/NewsCard";
import { IMeta, initialMeta } from "src/interface/common";
import { fetchNewsAPI, INews } from "src/services/news";
import { getLiteralDate } from "src/utils/date";

import { Scrollbars } from 'react-custom-scrollbars';

const GlobalNews = () => {
  const [globalNews, setGlobalNews] = useState<INews[]>([]);
  const [meta, setMeta] = useState<IMeta>(initialMeta);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    fetchGlobalNews();
  }, [meta.page]);

  const fetchGlobalNews = async () => {
    try {
      const response = await fetchNewsAPI({ page: meta.page, size: meta.size, type: "GLOBAL" });
      let data = globalNews;
      response.docs.map(doc => data.push(doc));
      setMeta(response.meta);
      setGlobalNews(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  const handleLoadMore = () => {
    setMeta({ ...meta, page: meta.page + 1 });
  };

  return (
    <>
      <div className="my-3">
        <img src="/images/news/global.jpg" alt={"Global Icon"} /> <span className="font-weight-bold">Global</span>
      </div>

      <div className="news-list">
        <Scrollbars style={{ height: 760 }} autoHide={false}>
        {globalNews &&
          globalNews.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              source={news.source}
              createdAt={getLiteralDate(news.uploadedAt)}
              imageUrl={news.imageUrl}
              content={news.description}
              url={news.url}
            />
          ))}

        <div className="text-center my-3">
          {meta.totalPages - 1 > meta.page && (
            <button className="btn btn-primary" onClick={() => handleLoadMore()} disabled={!isLoaded}>
              {isLoaded ? "Load More" : "Loading..."}
            </button>
          )}
        </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default GlobalNews;
