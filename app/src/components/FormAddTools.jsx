import React, { useState, forwardRef, useImperativeHandle } from 'react';
// import dos componentes do bootstrap
import { Form } from 'react-bootstrap';
// import api
import { instanceToolsAPI } from '../api/main';

/**
 * Componente formulário, responsável por guardar a lógica necessária para se cadastrar 
 * uma ferramenta.
*/
const FormAddTools = forwardRef((props, ref) => {
    // Guarda as informações do formulário necessárias para o
    // cadastro de uma ferramenta.
    const [form, setForm] = useState({ 
        title       : '', 
        link        : '', 
        description : '',
        tags        : ''
    });

    // Método genérico responsável por atualizar o estado da variável form
    // conforme digitado no campo input.
    function handleInputChange(e) {
        const {name, value} = e.target;
        if(name === 'tags') {
            setForm({...form, [name]: value.split(' ')});
        }else{
            setForm({...form, [name]: value});
        }
    }

    // Método responsável por disponibilizar os funções internas a ele
    // para que possam ser utilizadas em componentes pais.
    useImperativeHandle(ref, () => ({
        onSubmit() {
            return instanceToolsAPI.create(form);
        }
    }));

    return (
        <Form>
            <Form.Group controlId="formToolName">
                <Form.Label>Nome da ferramenta</Form.Label>
                <Form.Control name="title" value={form.title} onChange={handleInputChange} type="text" placeholder="Informe o nome" />
                <Form.Text className="text-muted">
                    Aqui você informa o nome da ferramente que deseja adicionar.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formToolLink">
                <Form.Label>Link de referência</Form.Label>
                <Form.Control name="link" value={form.link} onChange={handleInputChange} type="url" placeholder="Informe o link" />
                <Form.Text className="text-muted">
                    Aqui você informa o link de acesso a documentação da ferramenta.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formToolDescription">
                <Form.Label>Descrição da ferramenta</Form.Label>
                <Form.Control name="description" value={form.description} onChange={handleInputChange} as="textarea" rows="3" placeholder="Informe a descrição" />
                <Form.Text className="text-muted">
                    Aqui você informa o nome da ferramente que deseja adicionar.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formToolTags">
                <Form.Label>Tags da ferramenta</Form.Label>
                <Form.Control name="tags" value={form.tags} onChange={handleInputChange} type="text" placeholder="Informe as tags" />
                <Form.Text className="text-muted">
                    Aqui você informa as tags relacionadas a essa ferramenta.
                </Form.Text>
            </Form.Group>
        </Form>
    );
})

export default FormAddTools;