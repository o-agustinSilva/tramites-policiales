import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function RequestTramite() {
    return (
        <div>     
            <Container fluid> 
                <Row> 
                    <Col className="bg-dark.bg-gradient">
                        <h1>Detalles</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RequestTramite;