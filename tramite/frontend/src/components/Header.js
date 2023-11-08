import React, { Component } from "react";
import { TramitePage } from '../pages/TramitePage';
import { home } from './Home';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="header" bg="transparent" data-bs-theme="dark">
      <Container fluid>

        <Navbar.Brand href="#">
          <img src="https://policia.tierradelfuego.gob.ar/wp-content/uploads/2021/12/LOGO-POLICIA_GOBIERNO.png" width="170px" height="70px" ></img>

          </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto order-0 my-2 my-lg-2 d-flex"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link href="#">Inicio</Nav.Link>  
            </LinkContainer>

            <LinkContainer to="/tramite">
              <Nav.Link href="#">Iniciar un tr&aacute;mite</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/">
              <Nav.Link href="#">Ayuda</Nav.Link>
            </LinkContainer>

          </Nav>
          <Form className="d-flex">
            <Link to="/login">
            <Button id="mainLoginButton" variant="outline-success">Iniciar sesi&oacute;n</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;