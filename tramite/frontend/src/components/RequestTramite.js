import React, { Component } from "react";
import Header from "./Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export function RequestTramite() {
    return (
        <div>
            <Header/>
            <Container fluid> 
                <Row > 
                    <Col className="bg-dark.bg-gradient">
                        <h1>Detalles</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RequestTramite;