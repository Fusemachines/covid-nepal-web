import React, { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface IMapsModal {
  showModal: boolean;
  title: string;
  toggleModal: () => void;
}

const CustomModal: FC<IMapsModal> = ({ showModal, title, toggleModal, children }) => {
  return (
    <Modal show={showModal} onHide={toggleModal} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
