import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function DelTools() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
          x Deletar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>x Deletar Ferramenta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tem certeza que deseja deletar essa ferramenta?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Não
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Sim
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }