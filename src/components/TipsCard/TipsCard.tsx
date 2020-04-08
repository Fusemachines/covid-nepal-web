import React from "react";
import { Media } from "react-bootstrap";
import { openUrl } from "src/utils/helpers";

interface ITipsCardProps {
  title: string;
  createdAt: string;
  imageUrl: string;
  url: string;
}

const TipsCard: React.FC<ITipsCardProps> = props => {
  const { title, createdAt, imageUrl, url } = props;
  return (
    <Media onClick={() => openUrl(url)}>
      <div className="mr-2 pt-1" style={{ width: "80px", overflow: "hidden"}}>
        <img src={imageUrl} className="img-fluid" alt={title} style={{ width: "80px" }}/>
      </div>
      <Media.Body className="">
        <div className="font-weight-semibold">{title}</div>
        <div className="small-xs text-light">{createdAt}</div>
      </Media.Body>
    </Media>
  );
};

export default TipsCard;
