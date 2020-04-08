import React, { FC } from 'react';
import { IHospital } from 'src/services/hospitals';
import { selectLanguage } from 'src/utils/stringManipulation';

const InformationBox: FC<{ hospital: IHospital }> = ({ hospital }) => {
  return (
    <div className="py-4 px-5 rounded bg-bluelight">
      <div className="hospital-title">Process of Testing</div>

      <div className="mt-4 text-secondary" dangerouslySetInnerHTML={{ __html: hospital.testingProcess? selectLanguage(hospital.testingProcess) : "" }} />

      {/* <ul className="numc mt-5">
        <li>
          In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio.
        </li>
        <li>
          In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio.
        </li>
        <li>
          In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio.
        </li>
        <li>
          In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio.
        </li>
        <li>
          In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio.
        </li>
      </ul> */}
    </div>
  );
};

export default InformationBox;
