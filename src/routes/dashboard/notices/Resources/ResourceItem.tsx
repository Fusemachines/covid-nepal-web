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
          <img width={80} height={80} className="mr-3" src={imageUrl} alt="Generic placeholder" />
          <Media.Body>
            <h5 className="resources__title">{title}</h5>
            <span className="resources__link">{url}</span>
          </Media.Body>
        </Media>
      </a>
    </li>
  );
};

export default ResourceItem;
