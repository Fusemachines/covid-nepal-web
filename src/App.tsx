import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import { fetchStrapiToken } from './utils/strapi';

const App: React.FC = () => {
  
  useEffect(() => {
    fetchStrapiToken();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
