import React from 'react'
import { Button, Modal} from 'react-bootstrap';
import PropTypes from "prop-types";

export default function GenericModal({tittle, message, show, handleClose}) {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{tittle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  GenericModal.propTypes = {
    tittle: PropTypes.string,
    message: PropTypes.string,
    show: PropTypes.bool,
    handleClose: PropTypes.func
  };