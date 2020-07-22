import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

// import components
import FormAddTools from './FormAddTools';

export default function AddTools() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Adicionar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>+ Adicionar Nova Ferramenta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormAddTools></FormAddTools>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }