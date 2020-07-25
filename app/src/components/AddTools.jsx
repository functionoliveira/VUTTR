import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
// import dos componentes do bootstrap
import { Button, Modal } from 'react-bootstrap';
// import components
import FormAddTools from './FormAddTools';
// import actions
import { addToolsList } from '../store/actions/tools.action';
/**
 * Componente modal responsável por adicionar novas ferramentas.
*/
function AddTools(props) {
    // Guarda o status da modal. True quando estiver aberta e False quando fechada.
    const [show, setShow] = useState(false);
    // Guarda a referência do componente Formulário
    const formRef = useRef(null);
    
    // Método disparado para fechar a modal
    const handleClose = () => setShow(false);
    // Método disparado para abrir a modal
    const handleShow = () => setShow(true);

    // Método disparado para salvar a nova ferramenta
    const handleSave = () => {
        // Utiliza a referẽncia de componente para invocar a função 
        // interna que realiza a requisição e devolve uma Promise
        formRef.current
            .onSubmit()
            .then(response => {
                if(response.status === 201) {
                    props.addToolsToList(response.data);
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

const mapStateToProps = state => ({
  tools: state.tools
});

const mapActionsCreatorsToProps = dispatch => ({
  addToolsToList(tools) {
      // actions creator -> action
      const action = addToolsList(tools);
      dispatch(action);
  }
});

export default connect(mapStateToProps, mapActionsCreatorsToProps)(AddTools);