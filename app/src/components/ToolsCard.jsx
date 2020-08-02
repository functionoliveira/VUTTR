import React from 'react';

// import dos componentes do bootstrap
import { Card, Row, Col } from 'react-bootstrap';

// import components
import DelTools from './DelTools';

/**
 * Componente card usado para renderizar as informações de uma Ferramenta.
 * É necessário informar: id, title, link, description e tags.
*/
export default function ToolsCard(props) {
    return (
        <Card style={{ width: '100%' }} className="my-4">
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col>
                            <a 
                                href={props.tools.link || '#'} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >{props.tools.title}</a>
                        </Col>
                        <Col md="auto">
                            <DelTools id={props.tools.id}></DelTools>
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Text>
                    <span>{props.tools.description}</span>
                </Card.Text>
                <Card.Text>
                    <span>{'#'+props.tools.tags?.map(tag => tag.name).join('#')}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}