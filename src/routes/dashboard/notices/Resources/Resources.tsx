import React, { FC } from 'react';
import ResourceItem from './ResourceItem';

const Resources: FC<{}> = () => {
  return (
    <ul className="resources__list">
      <ResourceItem
        title={
          '7 ways employers can support working parents during the coronavirus disease COVID-19 outbreak by UNICEF'
        }
        url={'https://drive.google.com/open?id=1WRFP2u0zKaYbGypFPLBEutCuAWuu6Gp8'}
        imageUrl={''}
      />

      <ResourceItem
        title={
          'COVID-19: Operational Planning Guidelines and COVID-19 Partners Platform to support country preparedness and response'
        }
        url={'https://openwho.org/courses/UNCT-COVID19-preparedness-and-response-EN'}
        imageUrl={'https://i.vimeocdn.com/video/857141728.jpg?mw=900&mh=506&q=70'}
      />

      <ResourceItem
        title={'Hamro Patro and Ncell Presents Online Doctor Service for Covid-19'}
        url={'https://drive.google.com/open?id=1ia6wLH00ewleXTDu6buDCbuUgYCs2Bku'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Coping with stress during the 2019-nCoV outbreak'}
        url={'https://www.who.int/docs/default-source/coronaviruse/coping-with-stress.pdf?sfvrsn=9845bc3a_2'}
        imageUrl={''}
      />

      <ResourceItem
        title={'PSA Safe Grocery Shopping in COVID-19 Pandemic'}
        url={'https://youtu.be/sjDuwc9KBps'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Coronavirus Symptoms and Preventive Measures - सचेत रहौ त्रसित नबनौ by NEPAL TELEVISION'}
        url={'https://youtu.be/8M7uQc23FnY'}
        imageUrl={''}
      />

      <ResourceItem
        title={"CORONA VIRUS || DO's and DONT's || NEPAL || Ayushman Joshi || Priyanka Karki"}
        url={'https://youtu.be/TohlSCG2eZ8'}
        imageUrl={''}
      />

      <ResourceItem
        title={'When and How to Use a Mask-WHO'}
        url={'https://drive.google.com/open?id=1DA2Be-WKTPXb35jyR8zEix5UFjM2NLba'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Fact or fiction: How much do you know about the coronavirus disease (COVID-19)?'}
        url={
          'https://www.unicef.org/coronavirus/fact-or-fiction-how-much-do-you-actually-know-about-coronavirus-covid-19'
        }
        imageUrl={'https://cdn.poll-maker.com/51-1749455/coronavirus-quiz-1.png?sz=800'}
      />

      <ResourceItem
        title={'WHO Guidelines - How to protect yourself against COVID-19'}
        url={' https://drive.google.com/open?id=1PFuFqHs7-ZNk1hlrU74e27cUZnd_picy'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Reduce Your Risk of coronavirus infection'}
        url={'https://drive.google.com/open?id=11ZIhFJ9D-Txdo43SCb2umiKQuNoX6C97'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Self Quarantine Rules and Regulations as per Nepal Government'}
        url={'https://drive.google.com/open?id=1a0CLDBliaFHrRWN719CHmg1ddXyHdLTa'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Self-Quarantine_form_english_version_10-03-2020'}
        url={'https://drive.google.com/open?id=1A6Bk1bJEUHugZHwxawudc2g4kHsxRcsO'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Self-Quarantine_form_Nepali_version_10-03-2020.'}
        url={'https://drive.google.com/file/d/1zGT2gf1ANBpsHYNdhbL5VyYzvK8zEGVo/view'}
        imageUrl={''}
      />

      <ResourceItem
        title={'How to protect yourself and others against COVID-19'}
        url={'https://www.unicef.org/nepal/stories/novel-coronavirus'}
        imageUrl={'/images/protect_yourself.png'}
      />

      <ResourceItem
        title={'Join the fight against misinformation'}
        url={'https://www.unicef.org/nepal/join-fight-against-misinformation'}
        imageUrl={'/images/fight_misinformation.png'}
      />
    </ul>
  );
};

export default Resources;
