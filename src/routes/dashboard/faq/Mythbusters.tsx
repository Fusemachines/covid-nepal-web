import React, { FC } from "react";

import faqs from "src/constants/faq/index.json";
import FAQsItem from "./FAQsItem";

const FAQsMythbusters: FC<{}> = () => {

  return (
    <>
        <h3 className="font-weight-bold my-2 pb-2 border-dark border-bottom">Mythbusters</h3>

        <ol>
        {faqs.map(faqs => (
            faqs.category === "mythbusters" &&
            <FAQsItem key={faqs._id} question={faqs.question} answer={faqs.answer} category={faqs.category} />
        ))}
        </ol>
    </>
  );
};

export default FAQsMythbusters;
