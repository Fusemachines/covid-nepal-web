import React, { FC } from 'react';

const InformationBox: FC<{}> = () => {
  return (
    <div className="py-4 px-5 rounded bg-bluelight">
      <div className="hospital-title">Process of Testing</div>

      <div className="mt-4 text-secondary">
        Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo
        imperdiet, nec elemetum diam elementum.accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla
        facilisi. Cras urna sem, vulputate sed contum a, posuere vel enim.
      </div>

      <ul className="numc mt-5">
        <li>
          In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio.
        </li>
        <li>
          In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio.
        </li>
        <li>
          In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio.
        </li>
        <li>
          In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio.
        </li>
        <li>
          In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio.
        </li>
      </ul>
    </div>
  );
};

export default InformationBox;
