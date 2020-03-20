import React, { FC } from 'react';
import { TextCaptionIcon } from 'src/components/TextCaption/TextCaptionIcons';

const LiveDataTableRow: FC<{}> = () => {
  return (
    <>
      <tr>
        <td>
          <div>Bir Hospital</div>
          <small>200 Beds</small>
        </td>
        <td>80</td>
        <td>
          20
          <small className="d-block text-success">
            <TextCaptionIcon type={'success'} />
            0.01%
          </small>
        </td>
      </tr>
    </>
  );
};

export default LiveDataTableRow;
