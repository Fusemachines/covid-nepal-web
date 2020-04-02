import React from "react";

const SupportersTab = () => {
  return (
    <table className="table-supporter w-100" cellPadding="12">
      <thead>
        <tr>
          <th className="w-15">Supporter</th>
          <th className="w-25">Contact</th>
          <th className="w-60">Provided Support Items</th>
          <th className=""></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-bold">Sarojini Shrestha</td>
          <td>
            sarojni@gmail.com <br /> Swyambhu Pharmacy, Swyambhu{" "}
          </td>
          <td className="">
            <div className="d-flex justify-content-between">
              <div className="w-70">
                PPE, N95 Masks, Regular Masks, Gloves, Gown, Eye Protection Glasses, Face Shield, Hair Cap, Boots, Shoe
                Coverups, Sanitizer
              </div>
              <div className="">
                <a href="#" className="btn btn-green text-upper text-bold btn-help">
                  i/we need help
                </a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SupportersTab;