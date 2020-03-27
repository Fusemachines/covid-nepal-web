import React from "react";
import NewsCard from "src/components/NewsCard";

const GlobalNews = () => {
  return (
    <>
      <div className="my-3">
        <img src="/images/news/global.jpg" alt={"Global Icon"} /> <span className="font-weight-bold">Global</span>
      </div>
      <div className="news-list px-3 h-80">
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news1.jpg"}
        />
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news2.jpg"}
        />
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news3.jpg"}
        />
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news1.jpg"}
        />
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news2.jpg"}
        />
        <NewsCard
          title={"Global research and innovation forum: towards a research"}
          source={"CNN"}
          createdAt={"2 hours ago"}
          imageUrl={"/images/news/news3.jpg"}
        />

        <div className="text-center my-3">
          <button className="btn btn-primary">Load More</button>
        </div>
      </div>
    </>
  );
};

export default GlobalNews;
