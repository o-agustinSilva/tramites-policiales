import React, { Component } from "react";
import Header from "./Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export function Tramite() {
    return (
        <div>
            <Header/>
            <Container fluid> 
                <Row id="containerTramite"> 
                    <Col className="bg-dark.bg-gradient">
                        <h1>Imágen y título</h1>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="listOfTramites mt-3">
                    <Col className="tramiteIcon h-50 w-50 d-flex justify-content-start align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="90" fill="#f8f4f4" className="bi bi-file-text-fill" viewBox="0 0 16 16">
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
                        </svg>
                             
                    </Col>

                    <Col xs={6} className="d-flex justify-content-center align-items-center">
                        <h1 id="tramiteTitle">Certificado de domicilio</h1>   
                    </Col>

                    <Col className="d-flex justify-content-end align-items-center mb-3">
                        <Form>
                            <Link to="/solicitarTramite">
                                <Button id="requestTramite" variant="outline-success">Solicitar</Button>
                            </Link>
                        </Form>
                    </Col>
                </Row>   
            </Container>
            
        </div>
    )
}

export default Tramite;