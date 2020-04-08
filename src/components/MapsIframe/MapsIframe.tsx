import React, { FC } from 'react';

interface IMapsIframe {
  url: string;
}

const MapsIframe: FC<IMapsIframe> = ({ url }) => {
  return <iframe src={url} width="600" height="450"></iframe>;
};

export default MapsIframe;
