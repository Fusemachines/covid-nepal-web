import React from "react";
import TipsCard from "src/components/TipsCard";

const TopNews = () => {
  return (
    <>
      <div className="mb-3">
        <div className="title">COVID-19 Top News</div>
      </div>

      <div className="main-news bg-white mb-4">
        <img src="/images/news/main-img.jpg" alt="" className="img-fluid mx-auto d-block"></img>
        <div className="p-4">
          <div className="font-14">
            Questions arise after teen’s death was initially linked to coronavirus in California
          </div>
          <div className="small-xs text-light">
            <span>CNN</span>
            <span className="mx-1">|</span> <span>2 hours ago</span>
          </div>
        </div>
      </div>

      <div className="news-block bg-white">
        <div className="bg-grey text-primary p-2">TIPS</div>
        <div className="news-list px-3">
          <TipsCard
            title={'Global research and innovation forum: towards a research'}
            createdAt={'2 hours ago'}
            imageUrl={'/images/news/news1.jpg'}
          />
          <TipsCard
            title={'Global research and innovation forum: towards a research'}
            createdAt={'2 hours ago'}
            imageUrl={'/images/news/news2.jpg'}
          />
          <TipsCard
            title={'Global research and innovation forum: towards a research'}
            createdAt={'2 hours ago'}
            imageUrl={'/images/news/news3.jpg'}
          />
        </div>
      </div>
    </>
  );
};

export default TopNews;
