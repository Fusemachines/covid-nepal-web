import React, { FC, useState } from "react";

import Navbar from "src/components/Navbar";
import DashboardRouter from "src/routes/dashboard/Router";
import "src/i18n";
import { getlocalStorage, setlocalStorage } from "src/utils/storage";
import Footer from "src/components/Footer";

const Dashboard: FC<{}> = () => {
  const preLang = getlocalStorage("covLang");
  const [language, setLanguage] = useState(preLang === "ne" ? "ne" : "en");

  const setLanguageFunc = (lang: string) => {
    const langEle = lang === "ne" ? "ne" : "en";
    setlocalStorage("covLang", langEle);
    setLanguage(langEle);
    window.location.reload();
  };

  return (
    <>
      <Navbar language={language} setLanguage={setLanguageFunc} />
      <DashboardRouter />
      <Footer />
    </>
  );
};

export default Dashboard;
