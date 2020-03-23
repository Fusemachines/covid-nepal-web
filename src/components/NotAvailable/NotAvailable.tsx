import * as React from 'react';

import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Placement } from 'react-bootstrap/Overlay';

interface INotAvailableProps {
  id: string;
  placement?: Placement;
}

export const NotAvailable: React.FC<INotAvailableProps> = ({ id, placement = 'right' }) => {
  return (
    <OverlayTrigger
      trigger={['click']}
      data-id="test"
      placement={placement}
      rootClose
      overlay={
        <Popover id={id}>
          <Popover.Content>
            Please help us source or re-verify this data by filling{' '}
            <a className="text-black" href="https://bit.ly/collectnepalhospitaldata" target="_blank">
              this form
            </a>
          </Popover.Content>
        </Popover>
      }
    >
      <span>
        NA <small>(sourcing info)</small>
      </span>
    </OverlayTrigger>
  );
};

export default NotAvailable;
