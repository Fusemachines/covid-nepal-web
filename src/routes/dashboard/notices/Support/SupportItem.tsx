import React, { FC } from 'react';
import { Media } from 'react-bootstrap';

interface ISupportItemProps {
  key: string;
  url: string;
  title: string;
  imageUrl: string;
}

const SupportItem: FC<ISupportItemProps> = props => {
  const { key, url, title, imageUrl } = props;
  return (
    <li key={key}>
      <a href={url} className="p-3" target="_blank" rel="noopener noreferrer">
        <Media>
          <div className="align-self-center mr-3">
            {imageUrl ? (
              <img width={80} height={80} className="img-fluid" src={imageUrl} alt="Generic placeholder" />
            ) : null}
          </div>
          <Media.Body className="align-self-center">
            <h5 className="resources__title">{title}</h5>
            <span className="resources__link">{url}</span>
          </Media.Body>
        </Media>
      </a>
    </li>
  );
};

export default SupportItem;
