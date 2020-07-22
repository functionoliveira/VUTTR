import React from 'react';
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

export default function ToolsListHeader() {
    return (
        <Container>
            <Row className="align-items-md-center">
                <Col sm="100%">
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-lg">Buscar</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                </Col>
                <Col>
                    <Form.Group controlId="only-tags" className="my-0">
                        <Form.Check type="checkbox" label="Filtrar apenas por tags" />
                    </Form.Group>
                </Col>
                <Col md="auto">
                    <AddTools></AddTools>
                </Col>
            </Row>
            
        </Container>
    );
}