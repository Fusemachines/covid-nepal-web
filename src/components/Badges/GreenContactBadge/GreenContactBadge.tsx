import React, { FC } from "react";
import useLanguage from "src/customHooks/useLanguage";
import { translateNumbersToNepali } from "src/utils/translate";
import PhoneIcon from "src/components/Icons/PhoneIcon";
import TranslateNumber from "src/components/TranslateNumber";

interface IGreenContactBadgeProps {
  contactNumber: string;
}

const GreenContactBadge: FC<IGreenContactBadgeProps> = props => {
  const { contactNumber } = props;
  const language = useLanguage();

  return (
    <a href={`tel:${contactNumber}`} className="mx-2 bg-success rounded py-1 px-3 btn text-white mb-1">
      <i className="mr-2">
        <PhoneIcon />
      </i>
      <TranslateNumber originalValue={contactNumber} language={language} />
    </a>
  );
};

export default GreenContactBadge;
