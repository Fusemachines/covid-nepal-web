import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Home';
import Home from './Landing';
import Symptoms from './Symptoms';
import Info from './Info';
import Information from './NoticeandResources';
import News from './News';
import FAQ from './FAQ';
import ProtectYourself from './Symptoms/protectYourself';
import AtHome from './Symptoms/atHome';
import Elderly from './Symptoms/elderly';
import Parenting from './Symptoms/parenting';

const DesignRoutes: React.FC = () => (
  <Switch>
    <Route exact path={'/design'} component={Landing} />
    <Route exact path={'/design/symptoms'} component={Symptoms} />
    <Route exact path={'/design/landing'} component={Home} />
    <Route exact path={'/design/info'} component={Info} />
    <Route exact path={'/design/news'} component={News} />
    <Route exact path={'/design/notices&resources'} component={Information} />
    <Route exact path={'/design/faq'} component={FAQ} />
    <Route exact path={'/design/protectyourself'} component={ProtectYourself} />
    <Route exact path={'/design/athome'} component={AtHome} />
    <Route exact path={'/design/parenting'} component={Parenting} />
    <Route exact path={'/design/elderly'} component={Elderly} />
  </Switch>
);

export default DesignRoutes;
