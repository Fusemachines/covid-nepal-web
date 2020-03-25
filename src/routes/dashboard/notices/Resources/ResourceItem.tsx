import React, { FC } from 'react';
import { Media } from 'react-bootstrap';

interface IResourceItemProps {
  url: string;
  title: string;
  imageUrl: string;
}

const ResourceItem: FC<IResourceItemProps> = props => {
  const { url, title, imageUrl } = props;
  return (
    <li>
      <a href={url} className="p-3" target="_blank">
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

export default ResourceItem;
