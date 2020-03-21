import React, { FC, useState } from 'react';

import Navbar from 'src/components/Navbar';
import DashboardRouter from 'src/routes/dashboard/Router';
import Contacts from 'src/routes/dashboard/contacts';

const Dashboard: FC<{}> = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleEmergencyContact = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleEmergencyContact} />
      <Contacts visibility={isSidebarVisible} toggleContacts={toggleEmergencyContact} />
      <DashboardRouter />
    </>
  );
};

export default Dashboard;
