import React from 'react';
import { Form } from 'react-bootstrap';


export default function AddTools() {
    return (
        <Form>
            <Form.Group controlId="formToolName">
                <Form.Label>Nome da ferramenta</Form.Label>
                <Form.Control type="text" placeholder="Informe o nome" />
                <Form.Text className="text-muted">
                    Aqui você informa o nome da ferramente que deseja adicionar.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formToolLink">
                <Form.Label>Link de referência</Form.Label>
                <Form.Control type="url" placeholder="Informe o link" />
                <Form.Text className="text-muted">
                    Aqui você informa o link de acesso a documentação da ferramenta.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formToolDescription">
                <Form.Label>Descrição da ferramenta</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Informe a descrição" />
                <Form.Text className="text-muted">
                    Aqui você informa o nome da ferramente que deseja adicionar.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formToolTags">
                <Form.Label>Tags da ferramenta</Form.Label>
                <Form.Control type="text" placeholder="Informe as tags" />
                <Form.Text className="text-muted">
                    Aqui você informa as tags relacionadas a essa ferramenta.
                </Form.Text>
            </Form.Group>
        </Form>
    );
  }