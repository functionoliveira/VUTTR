import React, { useState, useRef } from 'react';

// import dos componentes do bootstrap
import { Button, Modal } from 'react-bootstrap';
// import components
import FormAddTools from './FormAddTools';

export default function AddTools() {
    const [show, setShow] = useState(false);
    const formRef = useRef(null);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
      formRef.current
        .onSubmit()
        .then(response => {
          if(response.status === 201) {
            setShow(false); 
          }else{
            throw response;
          }
        })
        .catch(error => {
          if(error.response) {
            console.log(error.response);
          }else {
            console.log(error);
          }
        });
    }

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
            <FormAddTools ref={formRef}></FormAddTools>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }