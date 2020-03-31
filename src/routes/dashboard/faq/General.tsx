import React, { FC } from "react";

import faqs from "src/constants/faq/index.json";
import FAQsItem from "./FAQsItem";

const FAQsGeneral: FC<{}> = () => {

  return (
    <>
      
      <h1 className="font-weight-bold mb-4">General FAQs</h1>

      <ol>
        {faqs.map(faqs => (
            faqs.category === "general" &&
          <FAQsItem key={faqs._id} question={faqs.question} answer={faqs.answer} category={faqs.category} />
        ))}
      </ol>
      
              
      <div className="h5">Sources</div>
      <ul className="mt-2">
        <li><a className="text-white" href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses" target="_blank">https://www.who.int/news-room/q-a-detail/q-a-coronaviruses</a></li>
        <li><a className="text-white mb-4" href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html" target="_blank">https://www.cdc.gov/coronavirus/2019-ncov/faq.html</a></li>
        <li><a href="https://covid19.mohp.gov.np/#/about" target="_blank" className="text-white">https://covid19.mohp.gov.np/#/about</a></li>
      </ul>
    </>
  );
};

export default FAQsGeneral;
