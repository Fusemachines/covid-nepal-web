import React, { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface IMapsModal {
  showModal: boolean;
  title: string;
  toggleModal: () => void;
}

const CustomModal: FC<IMapsModal> = ({ showModal, title, toggleModal, children }) => {
  return (
    <Modal show={showModal} onHide={toggleModal} centered size="sm">
      <Modal.Header closeButton>
        <div className="text-dark">{title}</div>
      </Modal.Header>
      {children ? <Modal.Body>{children}</Modal.Body> : null}
    </Modal>
  );
};

export default CustomModal;
