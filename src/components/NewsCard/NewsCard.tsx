import React from "react";
import { Media } from "react-bootstrap";

interface INewsCardProps {
  title: string;
  source: string;
  createdAt: string;
  imageUrl: string;
  content: string;
}

const NewsCard: React.FC<INewsCardProps> = props => {
  const { title, source, createdAt, imageUrl, content  } = props;
  return (

    <Media>
      <div className="mr-2 align-self-center">
        <img src={imageUrl} className="img-fluid" alt={title}/>
      </div>
      <Media.Body className="align-self-center">
        <div className="font-weight-semibold">{title}</div>
        <div className="small-xs text-light">
          <span>{source}</span>
          <span className="mx-1">|</span>
          <span>{createdAt}</span>
        </div>
        <div className="small-xs mt-1">{content}</div>
      </Media.Body>
    </Media>
  );
};

export default NewsCard;
