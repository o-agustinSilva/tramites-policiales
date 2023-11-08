import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
    return (
        <div>
            <Header/>
            <Container className="d-flex justify-content-center">
                <div className="login-box container-fluid">
                    <h1 id="loginTitle">Iniciar sesión</h1>
                    <form className="loginForm">
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label>Correo electrónico</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                            </Col>
                        </Row>

                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            <div className="smallText">
                                <small id="forgotPassword" className="form-text text-muted"><Link to="#">¿Olvidaste tu contraseña?</Link></small>
                                <small id="createAccount" className="form-text text-muted"><Link to="#">Registrarse</Link></small>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Continuar</button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Login;