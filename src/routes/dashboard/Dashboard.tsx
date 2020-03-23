import React, { FC, useState, useEffect } from 'react';

import Navbar from 'src/components/Navbar';
import DashboardRouter from 'src/routes/dashboard/Router';
import Contacts from 'src/routes/dashboard/contacts';

const Dashboard: FC<{}> = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleEmergencyContact = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.getElementsByTagName('body')[0].classList.add('modal-open');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('modal-open');
    }
  }, [isSidebarVisible]);

  return (
    <>
      <Navbar toggleSidebar={toggleEmergencyContact} />
      <Contacts visibility={isSidebarVisible} toggleContacts={toggleEmergencyContact} />
      <DashboardRouter />
    </>
  );
};

export default Dashboard;
