import React, { FC, useContext, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

import HospitalCapacityTableRow from './HospitalCapacityTableRow';
import { HospitalCapacityTableContext } from '../HospitalCapacity';
import MapsModal from 'src/components/MapsModal';
import MapsIframe from 'src/components/MapsIframe';
import Loader from 'src/components/Loader';
import lo from 'src/i18n/en';
import { fetchHospitalsCountsAPI, IHospitalsCounts } from 'src/services/hospitals';
import useLanguage from 'src/customHooks/useLanguage';
import TranslateNumber from 'src/components/TranslateNumber';

export interface IMapModalValues {
  title: string;
  mapURL: string;
}

const HospitalCapacityTable = () => {
  const { isLoaded, hospitalCapacityList } = useContext(HospitalCapacityTableContext);
  const [hospitalsCounts, setHospitalsCounts] = useState({} as IHospitalsCounts);
  const [showMapsModal, setShowMapsModal] = useState(false);
  const [mapModalValues, setMapModalValues] = useState<IMapModalValues>({} as IMapModalValues);
  const [t] = useTranslation();

  useEffect(() => {
    fetchHopitalsCounts();
  }, []);

  const fetchHopitalsCounts = async () => {
    try {
      const response = await fetchHospitalsCountsAPI();
      setHospitalsCounts(response);
    } catch (error) {}
  };

  const toggleMapsModal = (mapModalValues?: IMapModalValues) => {
    setShowMapsModal((prevShowMapsState) => !prevShowMapsState);
    if (mapModalValues) {
      const { title, mapURL } = mapModalValues;
      setMapModalValues({ title, mapURL });
    }
  };

  return (
    <>
      <div className="small mb-3 mt-1">
        <i>
          <Trans i18nKey={lo.contac_disclaimerHospitalGoverWebsite}>
            *Disclaimer: We are sourcing this data from various sources such as government website, situation report,
            hospital operators, doctors, etc. We need your help to continue gathering this information across all
            hospitals in Nepal. If you would like to help collect data, please sign up
            <Link className={'text-white'} to="/join-us">
              here
            </Link>
            .
          </Trans>
        </i>
      </div>
      <Table responsive className="text-white">
        <thead>
          <tr>
            <th>
              {t(lo.contac_hospitalName)}
              {<HospitalsCount hospitalsCounts={hospitalsCounts} />}
            </th>
            <th>{t(lo.hosp_OpenHours)}</th>

            <th>{t(lo.hosp_Contact)}</th>
            <th>Type</th>

            <th>
              {t(lo.hosp_TotalBeds)} <TotalCount totalCount={hospitalsCounts.totalBeds} />
            </th>
            <th>
              {t(lo.hosp_ICUBeds)} <TotalCount totalCount={hospitalsCounts.totalIcus} />
            </th>
            <th>
              {t(lo.hosp_Ventilators)} <TotalCount totalCount={hospitalsCounts.totalVentilators} />
            </th>
            <th>
              {t(lo.hosp_IsolationsBeds)} <TotalCount totalCount={hospitalsCounts.totalIsolationBeds} />
            </th>
          </tr>
        </thead>

        <tbody>
          {isLoaded ? (
            hospitalCapacityList.length > 0 ? (
              hospitalCapacityList.map((hospitalCapacity) => {
                return (
                  <HospitalCapacityTableRow
                    key={hospitalCapacity._id}
                    hospitalCapacity={hospitalCapacity}
                    toggleMapsModal={toggleMapsModal}
                  />
                );
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <span>{t(lo.com_noRecordsFound)}</span>
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan={7}>
                <Loader />
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {showMapsModal && (
        <MapsModal showModal={showMapsModal} title={mapModalValues.title} toggleModal={toggleMapsModal}>
          <div className="map-large">
            <MapsIframe url={mapModalValues.mapURL} />
          </div>
        </MapsModal>
      )}
    </>
  );
};

export default HospitalCapacityTable;

const HospitalsCount: FC<{ hospitalsCounts: IHospitalsCounts }> = ({
  hospitalsCounts: { totalHospitals, totalVerified },
}) => {
  const language = useLanguage();
  return (
    <div className="small">
      <div className="mt-1 d-inline-block mr-2">
        Total
        <span className="badge badge-warning mx-2 py-1 px-2">
          {' '}
          {typeof totalHospitals === 'number' && totalHospitals > -1 ? (
            <TranslateNumber originalValue={totalHospitals} language={language} />
          ) : (
            'NA'
          )}
        </span>
      </div>
      <div className="mt-1 d-inline-block">
        Verified
        <span className="badge badge-success mx-2 py-1 px-2">
          {typeof totalVerified === 'number' && totalVerified > -1 ? (
            <TranslateNumber originalValue={totalVerified} language={language} />
          ) : (
            'NA'
          )}
        </span>
      </div>
    </div>
  );
};

const TotalCount: FC<{ totalCount: number }> = ({ totalCount }) => {
  const language = useLanguage();
  return (
    <div className="mt-1">
      <div className="d-inline-block ml-2 small">
        Total
        <span className="badge badge-success mx-2 py-1 px-2">
          {typeof totalCount === 'number' && totalCount > -1 ? (
            <TranslateNumber originalValue={totalCount} language={language} />
          ) : (
            'NA'
          )}
        </span>
      </div>
    </div>
  );
};
