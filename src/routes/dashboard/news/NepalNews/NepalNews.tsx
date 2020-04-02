import React, { useEffect, useState } from "react";
import NewsCard from "src/components/NewsCard";
import { IMeta, initialMeta } from "src/interface/common";
import { fetchNewsAPI, INews } from "src/services/news";
import { getLiteralDate } from "src/utils/date";

const NepalNews = () => {
  const [nepalNews, setNepalNews] = useState<INews[]>([]);
  const [meta, setMeta] = useState<IMeta>(initialMeta);

  useEffect(() => {
    fetchNepalNews();
  }, [meta.page]);

  const fetchNepalNews = async () => {
    try {
      const response = await fetchNewsAPI({ page: meta.page, size: meta.size, type: "NEPAL" });
      setMeta(response.meta);
      setNepalNews(response.docs);
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
        <img src="/images/news/nepal.jpg" alt={"Nepal Icon"} /> <span className="font-weight-bold">Nepal</span>
      </div>

      <div className="news-list px-3 h-80">
        {nepalNews &&
          nepalNews.map(news => (
            <NewsCard
              title={news.title}
              source={news.source}
              createdAt={getLiteralDate(news.uploadedAt)}
              imageUrl={news.imageUrl}
              content={news.description}
              url={news.url}
            />
          ))}

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

export default NepalNews;
