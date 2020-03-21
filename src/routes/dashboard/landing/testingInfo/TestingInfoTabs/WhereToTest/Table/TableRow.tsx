import React, { FC } from 'react';

interface ITableRowProps {}

const TableRow: FC<ITableRowProps> = props => {
  return (
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
  );
};

export default TableRow;
