import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";

import GreenContactBadge from "src/components/Badges/GreenContactBadge";
import NotAvailable from "src/components/NotAvailable";
import { HospitalDetailsContext } from "../HospitalDetails";
import lo from "src/i18n/locale.json";
import { ILanguage } from "src/interface/common";

const DetailsBoxContent: FC<{}> = () => {
  const { hospital } = useContext(HospitalDetailsContext);
  const [t] = useTranslation();

  return (
    <>
      <div className="hospital-title">{hospital.name.en}</div>
      {/* <div className="my-3">
                <img src="" className="img-responsive" alt="hospital" />
              </div> */}

      <ul className="hospitalinfo-list">
        <li>
          <span className="text-secondary">{t(lo.hosp_Address)}:</span>{" "}
          <span className="ml-2 text-success">
            {hospital.location ? hospital.location.en : ""}, {hospital.district.en}
          </span>
        </li>
        <li>
          <span className="text-secondary">{t(lo.contac_openHours)}:</span>

          {hospital.availableTime ? (
            <span className="mx-2">
              <AvailableTimeComponent availableTime={hospital.availableTime} />
            </span>
          ) : (
            <NotAvailable id={"availableTime-" + hospital._id} />
          )}
          <span className="ml-3">{hospital.openDays ? hospital.openDays.en : ""}</span>
        </li>
        <li>
          <span className="text-secondary">Beds for COVID-19 patients : </span>
          {hospital.availableBeds > 0 && hospital.totalBeds > 0 ? (
            <span className="ml-2 h6 mb-0 text-warning font-weight-bold">
              ? {hospital.availableBeds} / {hospital.totalBeds}
            </span>
          ) : (
            <NotAvailable id={"availableBeds-" + hospital._id} />
          )}
        </li>
        <li>
          <span className="text-secondary">{t(lo.hosp_Contact)} :</span>
          {hospital.contact ? (
            hospital.contact.map(contact => <GreenContactBadge contactNumber={contact.en} />)
          ) : (
            <NotAvailable id={"contact-" + hospital._id} />
          )}
        </li>
        <li>
          <span className="text-secondary">Hospital Type :</span>
          <span className="ml-2" style={{ textTransform: "capitalize" }}>
            {hospital.hospitalType ? hospital.hospitalType.en : <NotAvailable id={"hospitalType-" + hospital._id} />}
          </span>
        </li>
      </ul>
    </>
  );
};

export default DetailsBoxContent;

const AvailableTimeComponent: React.SFC<{ availableTime: Array<ILanguage> }> = ({ availableTime }) => {
  if (availableTime.length == 2) {
    return (
      <span>
        {availableTime[0].en} AM - {availableTime[1].en}PM
      </span>
    );
  } else {
    return <span>{(availableTime && availableTime[0].en) || ""}</span>;
  }
};
