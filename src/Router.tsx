import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as routes from 'src/constants/routes';
import Dashboard from 'src/routes/dashboard';
import Design from './routes/design';

const NotFound = () => ( <p>404 -Not Found</p> );

const Router: React.FC = () => (
  <Switch>
    <Route exact path={routes.DASHBOARD} component={Dashboard} />
    <Route path={routes.DESIGN} component={Design} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;