import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import { IHospital } from "src/services/hospitals";
import LocationIcon from "src/components/Icons/LocationIcon";
import { IMapModalValues } from "./HospitalCapacityTable";
import NotAvailable from "src/components/NotAvailable";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { selectLanguage } from "src/utils/stringManipulation";

export interface IHospitalCapacityTableRowProps {
  hospitalCapacity: IHospital;
  toggleMapsModal: (mapModalValues: IMapModalValues) => void;
}

const HospitalCapacityTableRow: FC<IHospitalCapacityTableRowProps> = props => {
  const history = useHistory();
  const {
    hospitalCapacity: {
      _id,
      name,
      isVerified,
      location: address,
      mapLink: mapURL,
      contact,
      totalBeds,
      numIsolationBeds,
      icu,
      nameSlug,
      ventilators
    },
    toggleMapsModal
  } = props;

  const showMapModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (address) {
      toggleMapsModal({ title: name.en, mapURL });
    }
  };

  return (
    <>
      <tr onClick={() => history.push(`/hospital/${nameSlug}`)} style={{ cursor: "pointer" }}>
        <td>
          <div>
            {selectLanguage(name)}
            {isVerified && <VerfiedCheckmark />}
          </div>
        </td>
        <td onClick={showMapModal}>
          {address ? (
            <>
              <div style={{ textTransform: "capitalize" }}>{selectLanguage(address)}</div>

              <LocationIcon />
              <span className="ml-2">Map</span>
            </>
          ) : (
            <NotAvailable id={"address-" + _id} />
          )}
        </td>
        <td onClick={e => e.stopPropagation()}>
          {contact ? (
            contact.map((number, index) => (
              <a key={index} className="text-white" href={`tel:${number.en}`}>
                {number.en} {index === contact.length - 1 ? " " : ", "}
              </a>
            ))
          ) : (
            <NotAvailable id={"contact-" + _id} />
          )}
        </td>

        <td onClick={e => e.stopPropagation()}>
          {typeof totalBeds === "number" && totalBeds > -1 ? totalBeds : <NotAvailable id={"bed-" + _id} />}
        </td>

        <td onClick={e => e.stopPropagation()}>
          {typeof icu === "number" && icu > -1 ? icu : <NotAvailable id={"icu-" + _id} />}
        </td>

        <td onClick={e => e.stopPropagation()}>
          {typeof ventilators === "number" && ventilators > -1 ? (
            ventilators
          ) : (
            <NotAvailable id={"ventilators-" + _id} />
          )}
        </td>

        <td onClick={e => e.stopPropagation()}>
          {typeof numIsolationBeds === "number" && numIsolationBeds > -1 ? (
            numIsolationBeds
          ) : (
            <NotAvailable id={"isolation-bed-" + _id} placement="left" />
          )}
        </td>
      </tr>
    </>
  );
};

export default HospitalCapacityTableRow;

const VerfiedCheckmark = () => (
  <OverlayTrigger
    placement={"top"}
    overlay={
      <Tooltip id={`tooltip-total`} className="covid-hospital-count">
        Verified by covidnepal.org
      </Tooltip>
    }
  >
    <img src="/images/verified.svg" className="ml-2" />
  </OverlayTrigger>
);
