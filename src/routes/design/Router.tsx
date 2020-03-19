import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Home';

const DesignRoutes: React.FC = () => (
  <Switch>
    <Route exact path={'/design'} component={Landing} />
  </Switch>
);

export default DesignRoutes;
