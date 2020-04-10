import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as routes from 'src/constants/routes';
import Dashboard from 'src/routes/dashboard';
import withTracker from './utils/googleAnalytics';

const NotFound = () => <p>404 -Not Found</p>;

const Router: React.FC = () => (
  <Switch>
    <Route path={routes.DASHBOARD} component={withTracker(Dashboard)} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
