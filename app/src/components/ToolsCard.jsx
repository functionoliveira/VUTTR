import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';


// import components
import DelTools from './DelTools';

export default function ToolsCard() {
    return (
        <Card style={{ width: '100%' }} className="my-4">
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col>
                            <a href="#">Nome da ferramenta</a>
                        </Col>
                        <Col md="auto">
                            <DelTools></DelTools>
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Text>
                    <p>Descrição da ferramenta</p>
                    <caption style={{width: '100px'}}>Tags</caption>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}