import React, { FC } from 'react';

import Navbar from 'src/components/Navbar';
import DashboardRouter from 'src/routes/dashboard/Router';
// import Contacts from 'src/routes/dashboard/contacts';

import 'src/i18n';

const Dashboard: FC<{}> = () => {
  return (
    <>
      <Navbar />
      <DashboardRouter />
    </>
  );
};

export default Dashboard;
