import React, { FC } from 'react';
import GreenContactBadge from 'src/components/Badges/GreenContactBadge';

// TODO:pragyakar update while backend integration
interface IDetailsBoxProps {}

const DetailsBox: FC<IDetailsBoxProps> = props => {
  return (
    <div className="rounded bg-bluelight overflow-hidden">
      <div className="p-4 text-white">
        <div className="hospital-title">Teku Hospital</div>
        {/* <div className="my-3">
                <img src="" className="img-responsive" alt="hospital" />
              </div> */}

        <ul className="hospitalinfo-list">
          <li>
            <span className="text-secondary">Address:</span> <span className="ml-2 text-success">Teku, Kathmandu</span>
          </li>
          <li>
            <span className="text-secondary">Open hours:</span>
            <span className="mx-2">8 AM - 3 PM</span>
            <span className="ml-3">SUN - FRI</span>
          </li>
          <li>
            <span className="text-secondary">Beds for COVID-19 patients :</span>
            <span className="ml-2 h6 mb-0 text-warning font-weight-bold">50 / 120</span>
          </li>
          <li>
            <span className="text-secondary">Contact :</span>
            <GreenContactBadge contactNumber={'01-1234567'} />
            <GreenContactBadge contactNumber={'01-1234567'} />
          </li>
          <li>
            <span className="text-secondary">Hosptial Type :</span>
            <span className="ml-2">Government</span>
          </li>
        </ul>
      </div>

      <div className="maps">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14130.828627230478!2d85.3069413!3d27.6954445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd8552665e65d95b!2sTeku%20Hospital%20(Shukraraaj%20Tropical%20%26%20Infectious%20Disease%20Hospital)!5e0!3m2!1sen!2snp!4v1584778123055!5m2!1sen!2snp"
          width="400"
          height="300"
        ></iframe>
      </div>
    </div>
  );
};

export default DetailsBox;
