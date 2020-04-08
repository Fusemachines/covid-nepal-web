import React, { FC } from "react";
import { IContact } from "src/services/contacts";
import PhoneIcon from "src/components/Icons/PhoneIcon";
import { selectLanguage } from "src/utils/stringManipulation";
import useLanguage from "src/customHooks/useLanguage";
import TranslateNumber from "src/components/TranslateNumber";

interface IEmergencyContactItemProps {
  contact: IContact;
}

const EmergencyContactItem: FC<IEmergencyContactItemProps> = props => {
  const { contact } = props;
  const language = useLanguage();

  return (
    <div className="info-item py-3 mt-2">
      <div className="font-16">
        {selectLanguage(contact.name)} | {selectLanguage(contact.openingTime)} - {selectLanguage(contact.closingTime)}
      </div>
      {contact.mobile.map((mobile, index) => (
        <a key={index} className="rounded btn-success px-3 py-1 mx-2 btn my-2" href={`tel:${mobile.en}`}>
          <PhoneIcon />
          <TranslateNumber originalValue={mobile.en} language={language} />
        </a>
      ))}
      {contact.landLine.map((landline, index) => (
        <a key={index} className="rounded btn-success px-3 py-1 mx-2 btn my-2" href={`tel:${landline.en}`}>
          <PhoneIcon />
          <TranslateNumber originalValue={landline.en} language={language} />
        </a>
      ))}
    </div>
  );
};

export default EmergencyContactItem;
