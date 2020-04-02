import React, { useState, useEffect } from "react";
import NewsCard from "src/components/NewsCard";
import { IMeta, initialMeta } from "src/interface/common";
import { fetchNewsAPI, INews } from "src/services/news";

const GlobalNews = () => {
  const [globalNews, setGlobalNews] = useState<INews[]>([]);
  const [meta, setMeta] = useState<IMeta>(initialMeta);

  useEffect(() => {
    fetchGlobalNews();
  }, [meta.page]);

  const fetchGlobalNews = async () => {
    try {
      const response = await fetchNewsAPI({ page: meta.page, size: meta.size, type: "GLOBAL" });
      setMeta(response.meta);
      setGlobalNews(response.docs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = () => {
    setMeta({ page: meta.page + 1, ...meta });
  };

  return (
    <>
      <div className="my-3">
        <img src="/images/news/global.jpg" alt={"Global Icon"} /> <span className="font-weight-bold">Global</span>
      </div>
      <div className="news-list px-3 h-80">
        {globalNews &&
          globalNews.map(news => (
            <NewsCard
              title={news.title}
              source={news.source}
              createdAt={news.uploadedAt}
              imageUrl={news.imageUrl}
              content={news.description}
              url={news.url}
            />
          ))}

        {/* <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"www.nepalitimes.com"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news1.jpg"}
          content={"Ever since the nationwide lockdown was announced on 23 March, the fear of being "}
        /> */}

        <div className="text-center my-3">
          {meta.totalPages > meta.page && (
            <button className="btn btn-primary" onClick={() => handleLoadMore()}>
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default GlobalNews;
