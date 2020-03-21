import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as routes from 'src/constants/routes';
import Dashboard from 'src/routes/dashboard';
import Design from './routes/design';

const NotFound = () => <p>404 -Not Found</p>;

const Router: React.FC = () => (
  <Switch>
    {process.env.NODE_ENV !== 'production' && <Route path={routes.DESIGN} component={Design} />}
    <Route path={routes.DASHBOARD} component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
