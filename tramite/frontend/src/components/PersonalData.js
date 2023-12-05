import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function PersonalData() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="#FAFAFA"
              className="bi bi-person-vcard-fill d-flex"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
            </svg>
            <h1>Información personal</h1>
          </Col>
        </Row>

        <Row>
          <form>
            <Row>
              <Col xs={12} sm={6} lg={4}>
                <label htmlFor="requestName">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="requestName"
                ></input>
              </Col>
              <Col xs={12} sm={6} lg={4}>
                <label htmlFor="requestLastname">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="requestLastname"
                ></input>
              </Col>
              <Col xs={12} sm={12} lg={4}>
                <label htmlFor="requestDni">DNI</label>
                <input
                  type="text"
                  className="form-control"
                  id="requestDni"
                ></input>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={6} lg={4}>
                <label htmlFor="requestAddress">Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  id="requestAddress"
                ></input>
              </Col>
              <Col xs={12} sm={6} lg={4}>
                <label htmlFor="requestPhone">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  id="requestPhone"
                ></input>
              </Col>
              <Col xs={12} sm={12} lg={4}>
                <label htmlFor="requestBirthdate">Fecha de nacimiento</label>
                <input
                  type="date"
                  className="form-control"
                  id="requestBirthdate"
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={8}>
                <label htmlFor="requestEmail">Correo electrónico</label>
                <input
                  type="text"
                  className="form-control"
                  id="requestEmail"
                ></input>
              </Col>
            </Row>
          </form>
        </Row>
      </Container>
    </div>
  );
}

export default PersonalData;
