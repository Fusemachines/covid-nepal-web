import React, { useEffect, useState } from "react";
import NewsCard from "src/components/NewsCard";
import { IMeta, initialMeta } from "src/interface/common";
import { fetchNewsAPI, INews } from "src/services/news";
import { getLiteralDate } from "src/utils/date";

const NepalNews = () => {
  const [nepalNews, setNepalNews] = useState<Array<INews>>([]);
  const [meta, setMeta] = useState<IMeta>(initialMeta);
  const [isLoaded, setIsLoaded] = useState(false); 

  useEffect(() => {
    setIsLoaded(false);
    fetchNepalNews();
  }, [meta.page]);

  const fetchNepalNews = async () => {
    try {
      const response = await fetchNewsAPI({ page: meta.page, size: meta.size, type: "NEPAL" });
      setMeta(response.meta);
      setNepalNews(response.docs);
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
        <img src="/images/news/nepal.jpg" alt={"Nepal Icon"} /> <span className="font-weight-bold">Nepal</span>
      </div>

      <div className="news-list px-3 h-80">
        {nepalNews &&
          nepalNews.map((news, index) => (
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
            <button 
              className="btn btn-primary" 
              onClick={() => handleLoadMore()}
              disabled={!isLoaded}
              >
              { isLoaded ? 'Load More' : 'Loading...' }
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NepalNews;
