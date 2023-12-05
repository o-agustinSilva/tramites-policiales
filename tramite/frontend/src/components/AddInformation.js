import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function AddInformation() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="bg-dark.bg-gradient"> 
            <h1>Información adicional</h1>
          </Col>
        </Row>

        <Row>
          <form>
            <Row>
              <Col xs={12}>
                <label htmlFor="requestMotherName">
                  Madre - Nombre y apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="requestMotherName"
                ></input>
              </Col>
              <Col xs={12}>
                <label htmlFor="inlineRadio1">¿Vive?</label>
                <fieldset>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    ></input>
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Si
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    ></input>
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      No
                    </label>
                  </div>
                </fieldset>
              </Col>
            </Row>
          </form>
        </Row>
      </Container>
    </div>
  );
}

export default AddInformation;
