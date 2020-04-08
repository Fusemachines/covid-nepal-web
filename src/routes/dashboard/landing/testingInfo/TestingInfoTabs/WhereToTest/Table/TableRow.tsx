import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IHospital } from 'src/services/hospitals';
import { selectLanguage } from 'src/utils/stringManipulation';
import TranslateNumber from 'src/components/TranslateNumber';
import NotAvailable from 'src/components/NotAvailable';
import useLanguage from 'src/customHooks/useLanguage';

interface ITableRowProps {
  hospital: IHospital;
}

const TableRow: FC<ITableRowProps> = props => {
  const { hospital } = props;
  const language = useLanguage();

  return (
    <tr>
      <td>
        <div>{selectLanguage(hospital.name)}</div>
      </td>
      <td className="text-center">
        <div>
          {(hospital.availableTime && hospital.availableTime.length && selectLanguage(hospital.availableTime[0])) || ''}
        </div>
        <small>{selectLanguage(hospital.openDays)}</small>
      </td>
      <td className="align-middle" onClick={e => e.stopPropagation()}>
        {hospital.contact.length > 0 ? (
          hospital.contact.map((number, index) => (
            <a key={index} className="text-white" href={`tel:${number.en}`}>
              <TranslateNumber originalValue={number.en} language={language} />
              {index === hospital.contact.length - 1 ? ' ' : ', '}
            </a>
          ))
        ) : (
          <NotAvailable id={'contact-' + hospital._id} />
        )}
      </td>
      <td>
        <Link to={`/hospital/${hospital.nameSlug}`} style={{ cursor: 'pointer' }} className="text-white small">
          More info
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
