import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import lo from 'src/i18n/locale.json'

/* "nav_FAQ": "FAQ",
  "sym_Headache": "Headache",
  "symCh_commonCold": "Common Cold",
  "symCh_Flu": "Flu",
  "symCh_Allergies": "Allergies",
  "symCh_Sneezing": "Sneezing",
  "symCh_Common": "Common",
  "symCh_Sometimes": "Sometimes",
  "symCh_Rare": "Rare",
  "symCh_No": "No" */

const SymtomSVG: FC = () => {
  const [t] = useTranslation();

  return (
    <Table className="symptoms-table" responsive>
      <thead className="font-weight-bold text-white">
        <tr>
          <th className="">{t(lo.nav_Symptoms)}</th>
          <th className="">{t(lo.nav_covid19)}</th>
          <th className="">{t(lo.symCh_commonCold)}</th>
          <th>{t(lo.symCh_Flu)}</th>
          <th>{t(lo.symCh_Allergies)}</th>
        </tr>
      </thead>

      <tbody className="text-white">
        <tr>
          <td className="">{t(lo.sym_Fever)}</td>
          <td className="font-weight-bold text-warning">{t(lo.symCh_Common)}</td>
          <td className="">{t(lo.symCh_Rare)}</td>
          <td>{t(lo.symCh_Common)}</td>
          <td>{t(lo.symCh_Sometimes)}</td>
        </tr>

        <tr>
          <td className="">{t(lo.sym_DryCough)}</td>
          <td className="font-weight-bold text-warning">{t(lo.symCh_Common)}</td>
          <td className="">{t(lo.symCh_Mild)}</td>
          <td>{t(lo.symCh_Common)}</td>
          <td>{t(lo.symCh_Sometimes)}</td>
        </tr>

        <tr>
          <td className="">{t(lo.sym_ShortnessOfBreath)}</td>
          <td className="font-weight-bold text-warning">{t(lo.symCh_Common)}</td>
          <td className="">{t(lo.symCh_No)}</td>
          <td>{t(lo.symCh_No)}</td>
          <td>{t(lo.symCh_Common)}</td>
        </tr>

        <tr>
          <td className="">{t(lo.sym_Headache)}</td>
          <td className="text-warning font-weight-bold">{t(lo.symCh_Sometimes)}</td>
          <td className="">{t(lo.symCh_Rare)}</td>
          <td>{t(lo.symCh_Common)}</td>
          <td>{t(lo.symCh_Sometimes)}</td>
        </tr>

        <tr>
          <td className="">{t(lo.sym_AcheNPain)}</td>
          <td className="text-warning font-weight-bold">{t(lo.symCh_Sometimes)}</td>
          <td className="">{t(lo.symCh_Common)}</td>
          <td>{t(lo.symCh_Common)}</td>
          <td>{t(lo.symCh_No)}</td>
        </tr>

        <tr>
          <td className="">{t(lo.sym_SoreThroad)}</td>
          <td className="text-warning font-weight-bold">{t(lo.symCh_Sometimes)}</td>
          <td className="">{t(lo.symCh_Common)}</td>
          <td>{t(lo.symCh_Common)}</td>
          <td>{t(lo.symCh_No)}</td>
        </tr>

        <tr>
          <td className="">{t(lo.sym_Fatigue)}</td>
          <td className="text-warning font-weight-bold">{t(lo.symCh_Sometimes)}</td>
          <td className="">{t(lo.symCh_Sometimes)}</td>
          <td>{t(lo.symCh_Common)}</td>
          <td>{t(lo.symCh_Sometimes)}</td>
        </tr>

        <tr>
          <td className="">{t(lo.sym_Diarrohea)}</td>
          <td className="text-warning font-weight-bold">{t(lo.symCh_Rare)}</td>
          <td className="">{t(lo.symCh_No)}</td>
          <td>{t(lo.symCh_Sometimes)}*</td>
          <td>{t(lo.symCh_No)}</td>
        </tr>

        <tr>
          <td className="">{t(lo.sym_RunnyNose)}</td>
          <td className="text-warning font-weight-bold">{t(lo.symCh_Rare)}</td>
          <td className="">{t(lo.symCh_Common)}</td>
          <td>{t(lo.symCh_Sometimes)}</td>
          <td>{t(lo.symCh_Common)}</td>
        </tr>

        <tr>
          <td className="">{t(lo.symCh_Sneezing)}</td>
          <td className="text-warning font-weight-bold">{t(lo.symCh_No)}</td>
          <td className="">{t(lo.symCh_Common)}</td>
          <td>{t(lo.symCh_No)}</td>
          <td>{t(lo.symCh_Common)}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default SymtomSVG;
