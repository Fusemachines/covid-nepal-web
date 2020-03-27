import React from "react";
import { Media } from "react-bootstrap";

interface ITipsCardProps {
  title: string;
  createdAt: string;
  imageUrl: string;
}

const TipsCard: React.FC<ITipsCardProps> = props => {
  const { title, createdAt, imageUrl } = props;
  return (
    <Media>
      <div className="mr-2 align-self-center">
        <img src={imageUrl} className="img-fluid" alt={title} />
      </div>
      <Media.Body className="align-self-center">
        <div className="font-weight-semibold">{title}</div>
        <div className="small-xs text-light">{createdAt}</div>
      </Media.Body>
    </Media>
  );
};

export default TipsCard;
