import React, { useState } from 'react';

import Modal from '../Modal';
import { useTranslation } from 'react-i18next';
import en from 'src/i18n/locale.json';

const LanguageSelectCommingSoon: React.FC<any> = ({ isMobile }) => {
  const [showModal, setModal] = useState<boolean>(false);
  const { t } = useTranslation();

  const showPopupMessage = () => {
    setModal(true);
  };
  return (
    <>
      <div className={`lang ${isMobile ? 'mobile-flag' : 'menu-flag'}`}>
        <label htmlFor="np-lang">
          <input type="radio" id="np-lang" onClick={showPopupMessage} name="language" value="ne" />
          <img src="/images/nepal.png" className="mx-1" alt="nep" /> {isMobile ? '' : t(en.nav_NEP)}
        </label>

        <label htmlFor="en-lang" className={'active'}>
          <input type="radio" id="en-lang" name="language" value="en" checked={true} />
          {isMobile ? '' : t(en.nav_ENG)} <img src="/images/english.png" className="mx-1" alt="eng" />
        </label>
      </div>
      {showModal ? (
        <Modal showModal={showModal} title="नेपाली भाषामा केहि दिनमा आउँदैछ" toggleModal={() => setModal(false)} />
      ) : null}
    </>
  );
};

export default LanguageSelectCommingSoon;
