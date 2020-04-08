import React from 'react';
import LoaderIcon from '../Icons/LoaderIcon';

interface ILoaderProps {
  block?: boolean;
}

const Loader: React.SFC<ILoaderProps> = ({ block }) => (
  <div className={`covid-loader ${block ? 'absolute' : ''}`}>
    <LoaderIcon />
  </div>
);

export default Loader;
