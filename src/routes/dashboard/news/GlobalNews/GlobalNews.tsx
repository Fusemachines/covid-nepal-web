import React, { useState, useEffect } from "react";
import NewsCard from "src/components/NewsCard";
import { IMeta, initialMeta } from "src/interface/common";
import { fetchGlobalNewsAPI } from "src/services/news";

const GlobalNews = () => {

  const [globalNews, setGlobalNews] = useState();
  const [meta, setMeta] = useState<IMeta>(initialMeta);

  useEffect(() => {
    
  }, []);

  const fetchGlobalNews = () => {
    try {
      const response = fetchGlobalNewsAPI();

    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="my-3">
        <img src="/images/news/global.jpg" alt={"Global Icon"} /> <span className="font-weight-bold">Global</span>
      </div>
      <div className="news-list px-3 h-80">
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"www.nepalitimes.com"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news1.jpg"}
          content={"Ever since the nationwide lockdown was announced on 23 March, the fear of being "}
        />
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news2.jpg"}
          content={"Ever since the nationwide lockdown was announced on 23 March, the fear of being "}
        />
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news3.jpg"}
          content={"Ever since the nationwide lockdown was announced on 23 March, the fear of being "}
        />
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news1.jpg"}
          content={"Ever since the nationwide lockdown was announced on 23 March, the fear of being "}
        />
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news2.jpg"}
          content={"Ever since the nationwide lockdown was announced on 23 March, the fear of being "}
        />
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news3.jpg"}
          content={"Ever since the nationwide lockdown was announced on 23 March, the fear of being "}
        />

        <div className="text-center my-3">
          <button className="btn btn-primary">Load More</button>
        </div>
      </div>
    </>
  );
};

export default GlobalNews;
