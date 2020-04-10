import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { IHospital } from 'src/services/hospitals';
import LocationIcon from 'src/components/Icons/LocationIcon';
import { IMapModalValues } from './Table/HospitalCapacityTable';
import NotAvailable from 'src/components/NotAvailable';
import { selectLanguage } from 'src/utils/stringManipulation';
import TranslateNumber from 'src/components/TranslateNumber';
import useLanguage from 'src/customHooks/useLanguage';

export interface IHospitalCapacityTableRowProps {
  hospitalCapacity: IHospital;
  toggleMapsModal: (mapModalValues: IMapModalValues) => void;
}

const HospitalCapacityTableRow: FC<IHospitalCapacityTableRowProps> = (props) => {
  const history = useHistory();
  const language = useLanguage();
  const {
    hospitalCapacity: {
      _id,
      name,
      isVerified,
      location: address,
      mapLink: mapURL,
      availableTime,
      openDays,
      contact,
      hospitalType,
      totalBeds,
      numIsolationBeds,
      icu,
      nameSlug,
      ventilators,
    },
    toggleMapsModal,
  } = props;

  const showMapModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (address) {
      toggleMapsModal({ title: name.en, mapURL });
    }
  };

  return (
    <>
      <tr onClick={() => history.push(`/hospital/${nameSlug}`)} style={{ cursor: 'pointer' }}>
        <td>
          <div>
            {selectLanguage(name)}
            {isVerified && <VerfiedCheckmark />}
          </div>
          <div onClick={showMapModal}>
            {address && (
              <>
                <LocationIcon />
                <span className="ml-2" style={{ textTransform: 'capitalize' }}>
                  {selectLanguage(address)}
                </span>
              </>
            )}
          </div>
        </td>
        <td>
          {availableTime.length > 0 ? (
            <span>{(availableTime && selectLanguage(availableTime[0])) || ''}</span>
          ) : (
            <NotAvailable id={'availableTime-' + _id} />
          )}
          <div>{openDays ? selectLanguage(openDays) : ''}</div>
        </td>
        <td onClick={(e) => e.stopPropagation()}>
          {contact.length > 0 ? (
            contact.map((number, index) => (
              <a key={index} className="text-white" href={`tel:${number.en}`}>
                <TranslateNumber originalValue={number.en} language={language} />
                {index === contact.length - 1 ? ' ' : ', '}
              </a>
            ))
          ) : (
            <NotAvailable id={'contact-' + _id} />
          )}
        </td>

        <td>
        {hospitalType ? selectLanguage(hospitalType) : <NotAvailable id={"hospitalType-" + _id} />}
        </td>

        <td onClick={(e) => e.stopPropagation()}>
          {typeof totalBeds === 'number' && totalBeds > -1 ? (
            <TranslateNumber originalValue={totalBeds} language={language} />
          ) : (
            <NotAvailable id={'bed-' + _id} />
          )}
        </td>

        <td onClick={(e) => e.stopPropagation()}>
          {typeof icu === 'number' && icu > -1 ? (
            <TranslateNumber originalValue={icu} language={language} />
          ) : (
            <NotAvailable id={'icu-' + _id} />
          )}
        </td>

        <td onClick={(e) => e.stopPropagation()}>
          {typeof ventilators === 'number' && ventilators > -1 ? (
            <TranslateNumber originalValue={ventilators} language={language} />
          ) : (
            <NotAvailable id={'ventilators-' + _id} />
          )}
        </td>

        <td onClick={(e) => e.stopPropagation()}>
          {typeof numIsolationBeds === 'number' && numIsolationBeds > -1 ? (
            <TranslateNumber originalValue={numIsolationBeds} language={language} />
          ) : (
            <NotAvailable id={'isolation-bed-' + _id} placement="left" />
          )}
        </td>
      </tr>
    </>
  );
};

export default HospitalCapacityTableRow;

const VerfiedCheckmark = () => (
  <OverlayTrigger
    placement={'top'}
    overlay={
      <Tooltip id={`tooltip-total`} className="covid-hospital-count">
        Verified by covidnepal.org
      </Tooltip>
    }
  >
    <img src="/images/verified.svg" className="ml-2" alt={''} />
  </OverlayTrigger>
);
