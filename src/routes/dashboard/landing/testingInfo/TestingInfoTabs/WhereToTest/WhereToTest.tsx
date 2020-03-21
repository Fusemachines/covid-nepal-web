import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import HospitalCross from 'src/components/Icons/HospitalCross';

const WhereToTest: FC<{}> = () => {
  return (
    <div className="px-3 py-4">
      <div className="h5 m-0">
        <HospitalCross />
        Hospitals allocated for Covid-19
      </div>

      {/* table */}
      <div className="mt-4">
        <Table responsive className="text-white">
          <thead>
            <tr>
              <th>Name of Hospital</th>
              <th>Open Hours</th>
              <th>No. of beds available</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div>Bir Hospital</div>
              </td>
              <td className="text-center">
                <div>8 AM - 3 PM</div>
                <small>Sun - Fri</small>
              </td>
              <td className="align-middle">
                <div className="h5 text-warning font-weight-bold text-right">50 / 120</div>
              </td>
            </tr>

            <tr>
              <td>
                <div>Bir Hospital</div>
              </td>
              <td className="text-center">
                <div>8 AM - 3 PM</div>
                <small>Sun - Fri</small>
              </td>
              <td className="align-middle">
                <div className="h5 text-warning font-weight-bold text-right">50 / 120</div>
              </td>
            </tr>

            <tr>
              <td>
                <div>Bir Hospital</div>
              </td>
              <td className="text-center">
                <div>8 AM - 3 PM</div>
                <small>Sun - Fri</small>
              </td>
              <td className="align-middle">
                <div className="h5 text-warning font-weight-bold text-right">50 / 120</div>
              </td>
            </tr>

            <tr>
              <td>
                <div>Bir Hospital</div>
              </td>
              <td className="text-center">
                <div>8 AM - 3 PM</div>
                <small>Sun - Fri</small>
              </td>
              <td className="align-middle">
                <div className="h5 text-warning font-weight-bold text-right">50 / 120</div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default WhereToTest;
