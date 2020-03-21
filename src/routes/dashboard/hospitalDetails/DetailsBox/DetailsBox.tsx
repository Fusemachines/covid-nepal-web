import React, { FC } from 'react';
import GreenContactBadge from 'src/components/Badges/GreenContactBadge';
import { IHospital } from 'src/services/hospitals';

interface IDetailsBoxProps {
  hospital: IHospital;
}

const DetailsBox: FC<IDetailsBoxProps> = props => {
  const { hospital } = props;
  return (
    <div className="rounded bg-bluelight overflow-hidden">
      <div className="p-4 text-white">
        <div className="hospital-title">{hospital.name}</div>
        {/* <div className="my-3">
                <img src="" className="img-responsive" alt="hospital" />
              </div> */}

        <ul className="hospitalinfo-list">
          <li>
            <span className="text-secondary">Address:</span>{' '}
            <span className="ml-2 text-success">
              {hospital.location}, {hospital.district}
            </span>
          </li>
          <li>
            <span className="text-secondary">Open hours:</span>
            <span className="mx-2">
              {hospital.availableTime[0]} AM - {hospital.availableTime[1]}PM
            </span>
            <span className="ml-3">{hospital.openDays}</span>
          </li>
          <li>
            <span className="text-secondary">Beds for COVID-19 patients :</span>
            <span className="ml-2 h6 mb-0 text-warning font-weight-bold">
              {hospital.availableBeds} / {hospital.totalBeds}
            </span>
          </li>
          <li>
            <span className="text-secondary">Contact :</span>
            {hospital.contact.map(contact => (
              <GreenContactBadge contactNumber={contact} />
            ))}
          </li>
          <li>
            <span className="text-secondary">Hosptial Type :</span>
            <span className="ml-2">{hospital.hospitalType}</span>
          </li>
        </ul>
      </div>
      {hospital.mapLink && (
        <div className="maps">
          <iframe title="location" src={hospital.mapLink} width="400" height="300"></iframe>
        </div>
      )}
    </div>
  );
};

export default DetailsBox;
