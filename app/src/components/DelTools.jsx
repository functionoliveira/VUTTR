import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
// import api
import { instanceToolsAPI } from '../api/main';
// import actions
import { removeToolsList } from '../store/actions/tools.action';
/**
 * Componente modal responsável por confirmar a ação e remover uma Ferramenta.
*/
function DelTools(props) {
    // Guarda o status da modal. True quando estiver aberta e False quando fechada.
    const [show, setShow] = useState(false);

    // Método disparado para fechar a modal
    const handleClose = () => setShow(false);
    // Método disparado para abrir a modal
    const handleShow = () => setShow(true);
    // Método disparado ao realçar a vontade de remover.
    // Realiza uma chamada ao backend enviando o ID da ferramenta.
    const handleDelete = () => {
      instanceToolsAPI.remove(props.id)
        .then(resp => { 
          if(resp.status === 204){
            props.removeToolsFromStore(props.id);
            setShow(false)
          }else{
            throw resp;
          }
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

const mapStateToProps = state => ({
    tools: state.tools
});

const mapActionsCreatorsToProps = dispatch => ({
    removeToolsFromStore(toolsID) {
        // actions creator -> action
        const action = removeToolsList(toolsID);
        dispatch(action);
    }
});

export default connect(
    mapStateToProps,
    mapActionsCreatorsToProps
)(DelTools);