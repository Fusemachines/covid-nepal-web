import React, { FC, useContext, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import HospitalCapacityTableRow from "./HospitalCapacityTableRow";
import { HospitalCapacityTableContext } from "../HospitalCapacity";
import MapsModal from "src/components/MapsModal";
import MapsIframe from "src/components/MapsIframe";
import Loader from "src/components/Loader";
import lo from "src/i18n/locale.json";
import { IHospitalsCount } from "src/services/hospitals";

export interface IMapModalValues {
  title: string;
  mapURL: string;
}

const HospitalCapacityTable = () => {
  const { isLoaded, hospitalsCount, hospitalCapacityList } = useContext(HospitalCapacityTableContext);

  const [showMapsModal, setShowMapsModal] = useState(false);
  const [mapModalValues, setMapModalValues] = useState<IMapModalValues>({} as IMapModalValues);
  const [t] = useTranslation();

  const toggleMapsModal = (mapModalValues?: IMapModalValues) => {
    setShowMapsModal(prevShowMapsState => !prevShowMapsState);
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
            hospitals in Nepal. If you would like to help collect data, please sign up{" "}
            <Link className={"text-white"} to="/join-us">
              {" "}
              here{" "}
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
              {<HospitalsCount hospitalsCount={hospitalsCount} />}
            </th>
            <th>{t(lo.hosp_Address)}</th>
            <th>{t(lo.hosp_Contact)}</th>
            <th>{t(lo.hosp_BedNo)}</th>
            <th>{t(lo.hosp_ICUBedsNo)}</th>
            <th>{t(lo.hosp_VentilatorsNo)}</th>
            <th>{t(lo.hosp_IsolationsBedNo)}</th>
          </tr>
        </thead>

        <tbody>
          {isLoaded ? (
            hospitalCapacityList.length > 0 ? (
              hospitalCapacityList.map(hospitalCapacity => {
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

const HospitalsCount: FC<{ hospitalsCount: IHospitalsCount }> = ({
  hospitalsCount: { totalHospitals, totalVerified }
}) => (
  <div className="mt-1 small">
    <div className="d-inline-block">
      Total
      <span className="badge badge-warning mx-2 py-1 px-2">
        {" "}
        {typeof totalHospitals === "number" && totalHospitals > -1 ? totalHospitals : "NA"}
      </span>
    </div>
    <div className="d-inline-block ml-2">
      Verified
      <span className="badge badge-success mx-2 py-1 px-2">
        {typeof totalVerified === "number" && totalVerified > -1 ? totalVerified : "NA"}
      </span>
    </div>
  </div>
);
