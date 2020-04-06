import React from "react";
import { Media } from "react-bootstrap";
import { openUrl } from "src/utils/helpers";
import { limitLetters } from "src/utils/stringManipulation";

interface INewsCardProps {
  title: string;
  source: string;
  createdAt: string;
  imageUrl: string;
  content: string;
  url: string;
}

const NewsCard: React.FC<INewsCardProps> = props => {
  const { title, source, createdAt, imageUrl, content, url  } = props;
  return (

    <Media onClick={() => openUrl(url)} className="mx-3">
      <div className="mr-2">
        <img src={imageUrl} className="img-fluid" alt={title} style={{ width: "80px" }} />
      </div>
      <Media.Body className="align-self-center">
        <div className="font-weight-semibold">{title}</div>
        <div className="small-xs text-light">
          <span>{source}</span>
          <span className="mx-1">|</span>
          <span>{createdAt}</span>
        </div>
        <div className="small-xs mt-1">{limitLetters(content, 120)}</div>
      </Media.Body>
    </Media>
  );
};

export default NewsCard;
