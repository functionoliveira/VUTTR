import React from 'react';

// import components bootstrap
import { 
    InputGroup, 
    FormControl,
    Row,
    Col,
    Container,
    Form
} from 'react-bootstrap';
// import components
import AddTools from './AddTools';

/**
 * Componente superior da lista, responsável por gerenciar os inputs de busca e checkbox
 * e executar o método handleInputChange passado pelo pai sempre que um evento onChange
 * do input for disparado.
 * @param handleInputChange - método disparado ao digitar no input de busca.
 * @param handleCheckbox - método disparado ao marcar ou desmarcar o checkbox.
 * @param search - valor da variável de busca.
 * @param checkbox - valor da variável de checkbox.
*/
export default function ToolsListHeader(props) {
    return (
        <Container>
            <Row className="align-items-md-center">
                <Col sm="100%">
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                        <InputGroup.Text  id="inputGroup-sizing-lg">Buscar</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={props.search} onChange={props.handleInputChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                </Col>
                <Col>
                    <Form.Group controlId="only-tags" className="my-0">
                        <Form.Check value={props.checkbox} onChange={props.handleCheckbox} type="checkbox" label="Filtrar apenas por tags" />
                    </Form.Group>
                </Col>
                <Col md="auto">
                    <AddTools></AddTools>
                </Col>
            </Row>
        </Container>
    );
}