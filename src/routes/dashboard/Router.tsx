import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as routes from 'src/constants/routes';
import Landing from 'src/routes/dashboard/landing';
import Symptoms from 'src/routes/dashboard/symptoms';
import HospitalDetails from 'src/routes/dashboard/hospitalDetails';
import About from 'src/routes/dashboard/about';

const DashboardRouter: FC<{}> = () => (
  <Switch>
    <Route exact path={routes.DASHBOARD} component={Landing} />
    <Route path={routes.SYMPTOMS} component={Symptoms} />
    <Route path={routes.HOSPITAL_DETAIL} component={HospitalDetails} />
    <Route path={routes.ABOUT} component={About} />
  </Switch>
);

export default DashboardRouter;
