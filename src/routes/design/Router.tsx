import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Home';
import Symptoms from './Symptoms';

const DesignRoutes: React.FC = () => (
  <Switch>
    <Route exact path={'/design'} component={Landing} />
    <Route exact path={'/symptoms'} component={Symptoms} />
  </Switch>
);

export default DesignRoutes;
