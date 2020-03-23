import React, { FC, useState, useEffect } from 'react';

import Navbar from 'src/components/Navbar';
import DashboardRouter from 'src/routes/dashboard/Router';
import Contacts from 'src/routes/dashboard/contacts';

const Dashboard: FC<{}> = () => {
  return (
    <>
      <Navbar />
      <DashboardRouter />
    </>
  );
};

export default Dashboard;
