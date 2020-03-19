import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from 'src/constants/routes';

const TestRoute = () => ( <p>Home</p> );
const NotFound = () => ( <p>404 -Not Found</p> );

const Router: React.FC = () => (
  <Switch>
    <Route exact path={routes.DASHBOARD} component={TestRoute} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;