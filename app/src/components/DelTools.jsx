import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

// import api
import { instanceToolsAPI } from '../api/main';

export default function DelTools(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
      instanceToolsAPI.remove(props.id)
        .then(resp => { 
          if(resp.status === 200)
            setShow(false)
          else
            throw resp;
        })
        .catch(err => { console.log(err); })
    }

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
            <Button variant="primary" onClick={handleDelete}>
              Sim
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }