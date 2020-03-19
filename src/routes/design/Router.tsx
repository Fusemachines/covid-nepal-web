import React from 'react';
import { Switch, Route } from 'react-router-dom';

const TestComponent = () => <p>Design Route Test</p>;

const DesignRoutes: React.FC = () => (
  <Switch>
    <Route exact path={'/design/test'} component={TestComponent} />
  </Switch>
);

export default DesignRoutes;
