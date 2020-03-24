import React, { useState } from 'react';

import Modal from '../Modal';
import i18n from '../../i18n';

const LanguageSelectCommingSoon: React.FC<any> = ({ isMobile }) => {
  const interLang = i18n();
  const { navBar } = interLang;
  const [showModal, setModal] = useState<boolean>(false);
  const showPopupMessage = () => {
    setModal(true);
  };
  return (
    <>
      <div className={`lang ${isMobile ? 'mobile-flag' : 'menu-flag'}`}>
        <label htmlFor="np-lang">
          <input type="radio" id="np-lang" onClick={showPopupMessage} name="language" value="ne" />
          <img src="/images/nepal.png" className="mx-1" /> {isMobile ? '' : navBar.NEP}
        </label>

        <label htmlFor="en-lang" className={'active'}>
          <input type="radio" id="en-lang" name="language" value="en" checked={true} />
          {isMobile ? '' : navBar.ENG} <img src="/images/english.png" className="mx-1" />
        </label>
      </div>
      {showModal ? (
        <Modal showModal={showModal} title="Nepali version coming in a few days" toggleModal={() => setModal(false)} />
      ) : null}
    </>
  );
};

export default LanguageSelectCommingSoon;
