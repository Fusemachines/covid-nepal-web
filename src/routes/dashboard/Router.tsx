import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as routes from 'src/constants/routes';
import Landing from 'src/routes/dashboard/landing';
import Symptoms from 'src/routes/dashboard/symptoms';
import AtHome from 'src/routes/dashboard/symptoms/atHome';
import Elderly from 'src/routes/dashboard/symptoms/elderly';
import Parenting from 'src/routes/dashboard/symptoms/parenting';
import ProtectYourSelf from 'src/routes/dashboard/symptoms/protectYourself';
import HospitalDetails from 'src/routes/dashboard/hospitalDetails';
import withTracker from 'src/utils/googleAnalytics';
import JoinUs from 'src/routes/dashboard/joinUs';
import Notices from 'src/routes/dashboard/notices';
import FAQ from 'src/routes/dashboard/faq';
import News from 'src/routes/dashboard/news';
import Supporters from 'src/routes/dashboard/supportFrontlineWorkers';

const DashboardRouter: FC<{}> = () => (
  <Switch>
    <Route exact path={routes.DASHBOARD} component={withTracker(Landing)} />
    <Route path={routes.SYMPTOMS} component={withTracker(Symptoms)} />
    <Route path={routes.AtHome} component={withTracker(AtHome)} />
    <Route path={routes.Elderly} component={withTracker(Elderly)} />
    <Route path={routes.Parenting} component={withTracker(Parenting)} />
    <Route path={routes.ProtectYourSelf} component={withTracker(ProtectYourSelf)} />

    <Route path={routes.HOSPITAL_DETAIL} component={withTracker(HospitalDetails)} />
    <Route path={routes.NOTICES} component={withTracker(Notices)} />
    <Route path={routes.NEWS} component={withTracker(News)} />
    <Route path={routes.FAQ} component={withTracker(FAQ)} />
    <Route path={routes.JOIN_US} component={withTracker(JoinUs)} />
    <Route path={routes.SUPPORT_FRONTLINE_WORKERS} component={withTracker(Supporters)} />
  </Switch>
);

export default DashboardRouter;
