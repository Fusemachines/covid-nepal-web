import React, { useEffect } from 'react';

const LatestNews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    document.getElementsByClassName('twitter-embed')[0].appendChild(script);
  }, []);

  return (
    <div className="twitter-embed">
      <a className="twitter-timeline" href="https://twitter.com/WHO?ref_src=twsrc%5Etfw">
        Tweets by WHO
      </a>
    </div>
  );
};

export default LatestNews;
