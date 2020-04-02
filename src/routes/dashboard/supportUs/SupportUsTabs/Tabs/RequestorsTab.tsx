import React from "react";

const RequestorsTab = () => {
  return (
    <table className="table-requestor w-100" cellPadding="12">
      <thead>
        <tr>
          <th className="w-15">Requestor</th>
          <th className="w-25">Contact</th>
          <th className="w-60">Requested Support Items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-bold">Sam Pokheral</td>
          <td>
            sam@gmail.com <br />
            Samriddhi Polyclinic, Kathmandu
          </td>
          <td className="d-flex justify-content-between">
            <div className="w-70">PPE, N95 Masks, Regular Masks, Gloves</div>
            <a href="#" className="btn btn-yellow text-upper text-bold btn-support">
              i/we can support
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RequestorsTab;
