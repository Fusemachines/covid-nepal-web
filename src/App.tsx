import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
