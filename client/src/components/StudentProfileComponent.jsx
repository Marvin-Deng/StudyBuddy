import React from "react";
import { Container, Row } from "react-bootstrap";

const StudentProfileComponent = ({ name, school, major, grad_year }) => {
  return (
    <Container>
      <Row>
        <h2>Viewing {name}</h2>
      </Row>
      <Row>
        <h3>
          {name} is studying {major} at {school} and graduating in {grad_year}
        </h3>
      </Row>
    </Container>
  );
};

export default StudentProfileComponent;
