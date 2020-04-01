import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import GreenContactBadge from 'src/components/Badges/GreenContactBadge';
import { IContact } from 'src/services/contacts';
import Loader from 'src/components/Loader';
import lo from 'src/i18n/locale.json';
import { selectLanguage } from 'src/utils/stringManipulation';

interface IHospitalContactsRecordsProps {
  isLoaded: boolean;
  hospitalContacts: IContact[];
}

const HospitalContactsRecords: FC<IHospitalContactsRecordsProps> = props => {
  const { isLoaded, hospitalContacts } = props;
  const [t] = useTranslation();

  return (
    <div className="px-3">
      {isLoaded ? (
        hospitalContacts.length > 0 ? (
          <Table className="text-white">
            <tbody>
              {hospitalContacts.map((contact, index) => (
                <tr key={index}>
                  <td>{selectLanguage(contact.name)}</td>
                  <td className="text-right">
                    {contact.landLine.map((number, index) => (
                      <div className="badges badge-cus" key={index}>
                        <GreenContactBadge contactNumber={number.en} />
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (<span>{t(lo.com_noRecordsFound)}</span>)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default HospitalContactsRecords;
