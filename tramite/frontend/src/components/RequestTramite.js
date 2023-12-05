import React, { Component } from "react";
import AddInformation from "./AddInformation";
import PersonalData from "./PersonalData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function RequestTramite() {
  return (
    <div>
      <Container fluid>
        <Row id="containerRequest">
          <PersonalData />
          <AddInformation />
        </Row>
      </Container>
    </div>
  );
}

export default RequestTramite;
