import React, { FC, useState } from 'react';

import Navbar from 'src/components/Navbar';
import Router from 'src/routes/dashboard/Router';

const Dashboard: FC<{}> = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleEmergencyContact = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleEmergencyContact} />
      <Router />
    </>
  );
};

export default Dashboard;
